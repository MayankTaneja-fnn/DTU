import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Student } from '../models/student.model.js';
import dotenv from 'dotenv';

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "PLACEHOLDER_CLIENT_ID";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "PLACEHOLDER_CLIENT_SECRET";

if (!process.env.GOOGLE_CLIENT_ID) {
    console.warn("WARNING: GOOGLE_CLIENT_ID is missing in .env. Google OAuth will not work.");
}

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/student/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, done) {
        try {
            // 1. Check if user exists by googleId
            let student = await Student.findOne({ googleId: profile.id });

            if (student) {
                return done(null, student);
            }

            // 2. Check if user exists by email
            student = await Student.findOne({ email: profile.emails[0].value });

            if (student) {
                // Link googleId to existing account
                student.googleId = profile.id;
                await student.save();
                return done(null, student);
            }

            // 3. If not found, we cannot create a student without visual roll_no input
            // For now, we return false
            return done(null, false, { message: 'Email not registered. Please register first.' });

        } catch (err) {
            return done(err);
        }
    }
));

export default passport;
