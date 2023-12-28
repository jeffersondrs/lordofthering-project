import app from "./app";
import http from "node:http";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE_URL!.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD!
);

mongoose.connect(DB).then(() => console.log("Conectado ao banco de dados"));

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("🚀 Server started on port 3000!");
});
