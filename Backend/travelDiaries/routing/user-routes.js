import { Router } from "express";
import { getALLUsers } from "../controller/user-controller";

const userRouter = Router();

userRouter.get("/", getALLUsers);

export default userRouter;