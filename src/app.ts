import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { userRouter } from "./routes/character-routes";
import { raceRouter } from "./routes/race-routes";
import { classRouter } from "./routes/class-routes";
import { bookRouter } from "./routes/book-routes";
import { kingdomRouter } from "./routes/kingdom-routes";
import { languageRouter } from "./routes/language-routes";
import { locationRouter } from "./routes/location-routes";
import { ringOfPowerRouter } from "./routes/ringOfPower-routes";
import { weaponRouter } from "./routes/weapon-routes";

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
app.use("/book", bookRouter);
app.use("/kingdom", kingdomRouter);
app.use("/language", languageRouter);
app.use("/location", locationRouter);
app.use("/ringOfPower", ringOfPowerRouter);
app.use("/weapon", weaponRouter);

export default app;
