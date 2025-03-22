import express from "express";

const router = express.Router();

router.route("/login");
router.route("/signup");
router.route("add_to_activity");

export default router;
