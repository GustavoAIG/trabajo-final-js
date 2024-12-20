import { Router } from "express";
import {
  login,
  logout,
  register,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.get("/logout", logout);

router.get("/verify", verifyToken);

router.post("/profile", authRequired, profile);

export default router;