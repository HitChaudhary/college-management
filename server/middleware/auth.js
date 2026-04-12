import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    // 1. Check if token exists at all
    if (!token) {
        return res.json({ success: false, message: "Access Denied. No token provided." });
    }

    try {
        // 2. Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded; // Store admin info in request object
        next();
    } catch (error) {
        // 3. Specific error message
        res.status(401).json({ success: false, message: "Invalid or Expired Token" });
    }
}

export default auth;