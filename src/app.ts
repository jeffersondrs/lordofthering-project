import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { router } from "./routes/routers";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", (req, res) => {
  res.json({ message: "Hello World dasss " });
});

app.use(router);

export default app;
