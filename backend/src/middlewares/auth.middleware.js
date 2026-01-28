import jwt from 'jsonwebtoken';
const jwtAuth = (req, res, next) => {
    // 1. Read the token.
    const token = req.cookies.auth_token;
    // console.log(token);
    // 2. if no token, return the error.
    if (!token) {
        return res.status(401).send("Unauthorized");
    }
    // 3. check if token is valid.
    try {

        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET || "VOp2tCqr1f"
        );
        // console.log("Token verified successfully for: ", payload.email);
        req.user_email = payload.email;
    } catch (err) {
        // 4. return error.
        console.error("JWT Verification failed:", err.message);
        return res.status(401).send("Unauthorized: Invalid Token");
    }

    // 5. call next middleware.
    next();
};

export default jwtAuth;
