import express from "express";
import { validateBody } from "../../decorators/index.js";
import usersSchamas from "../../schemas/users-schamas.js";
import authControllers from "../../controllers/auth-controllers.js";
import { authenticate } from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validateBody(usersSchamas.userSignupSchama),
  authControllers.signup
);

authRouter.post(
  "/signin",
  validateBody(usersSchamas.userSigninSchama),
  authControllers.signin
);

authRouter.get("/current", authenticate, authControllers.getCurrent);

authRouter.post("/signout", authenticate, authControllers.signout);

export default authRouter;
