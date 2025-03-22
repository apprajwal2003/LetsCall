import { Router } from "express";
import signUp from "../controllers/user.signup.js";
import login from "./../controllers/user.login.js";

const router = Router();

router.post("/login", login);
router.post("/signup", signUp);
router.route("add_to_activity");

export default router;
