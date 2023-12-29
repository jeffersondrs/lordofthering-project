import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { userRouter } from "./routes/user-routes";
import { raceRouter } from "./routes/race-routes";
import { classRouter } from "./routes/class-routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", (req, res) => {
  res.json({ message: "Hello World dasss " });
});

app.use("/char", userRouter);
app.use("/race", raceRouter);
app.use("/class", classRouter);

export default app;
