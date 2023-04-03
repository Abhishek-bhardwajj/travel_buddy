import { Router } from "express";
import { getAllUsers, signup, login, getUserById } from "../controller/user-controller";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/:id", getUserById);

export default userRouter;