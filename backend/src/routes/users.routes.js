import { Router } from "express";
import signUp from "../controllers/user.signup.js";
import login from "../controllers/user.login.js";
import { getUserHistory, addToHistory } from "../controllers/history.js";

const router = Router();

router.post("/login", login);
router.post("/signup", signUp);
router.post("/add_to_activity", addToHistory);
router.get("/get_all_activity", getUserHistory);

export default router;
