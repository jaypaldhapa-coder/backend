import { sendMail } from '../controllers/authController.js';
import express from "express";
const router = express.Router();

router.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "API working properly",
    });
});

router.post("/sendmail",sendMail);

export default router;