import express from "express";
import { login, logOut ,register} from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup",register);
router.post("/login",login);
router.get("/logout",logOut);

export default router;