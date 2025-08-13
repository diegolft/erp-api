import { Router } from "express";
import { AuthController } from "../controllers/auth-controllers";

const router = Router();
const authController = new AuthController();

router.post("/login", authController.login);

export default router;
