import { Router } from "express";
import { getAllUsers, signup } from "../controller/user-controller";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);

export default userRouter;