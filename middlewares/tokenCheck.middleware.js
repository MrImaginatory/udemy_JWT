import { asyncWrapper } from "../utils/asyncWrapper.util.js";
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;

const tokenCheck = asyncWrapper(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized User" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, jwtSecret);
        req.user = decodedToken;
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
});

export {tokenCheck};