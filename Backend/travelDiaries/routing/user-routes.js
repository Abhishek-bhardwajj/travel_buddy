import { Router } from "express";
import { getAllUsers } from "../controller/user-controller";

const userRouter = Router();

userRouter.get("/", getAllUsers);

export default userRouter;