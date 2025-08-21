import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import mongoose from 'mongoose';

import studentRouter from './src/routes/student.routes.js';
import logRouter from './src/routes/logs.routes.js';
import facultyRouter from './src/routes/faculty.routes.js';

const MongoStore = connectMongo(session);
// const MongoStore = new (connectMongo(session))();

// const MongoStore =new connectMongo(session); // Still the function to be called
// const store = new MongoStore({
//   mongooseConnection: mongoose.connection,
//   collection: 'sessions'
// });


const app = express();

// Middleware for parsing cookies
app.use(cookieParser());

// Middleware for parsing JSON request bodies
app.use(express.json());

// Session middleware
app.use(session({
    secret: 'VOp2tCqr1f', // Replace with a secure key in production
    resave: false, // Avoid resaving unchanged sessions
    saveUninitialized: false, // Only save sessions that are modified
    cookie: {
        httpOnly: true,
       secure: true,        // ✅ must be true in production (HTTPS)
       sameSite: "none", 
        // resave:true,
        maxAge: 8 *60* 60 * 60 * 1000, // 8 hours
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection // Ensure the session store uses the correct connection
    }),
}));

// Middleware to set res.locals.email from session
app.use((req, res, next) => {
    // console.log('Session:', req.session); // Log the entire session object
    res.locals.email = req.session.email; // Retrieve email from session
    // console.log('Email in locals:', res.locals.email); // Log the email in locals
    next();
});

// Middleware for parsing URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true, // Allow credentials (cookies) to be sent
}));

// Serve static files
app.use(express.static('/public'));

// Importing routes
app.use('/student', studentRouter);
app.use('/logs', logRouter);
app.use('/faculty',facultyRouter);

// Export the app
export {
    app
};
