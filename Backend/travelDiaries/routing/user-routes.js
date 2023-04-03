import { Router } from "express";
import { getAllUsers, signup, login } from "../controller/user-controller";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);
userRouter.post("/login", login)

export default userRouter;