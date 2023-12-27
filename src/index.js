import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() =>
    app.listen(process.env.PORT || 8000, (req, res) => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("Mongo db connection failed!!!", err);
  });
console.log(process.env.ACCESS_TOKEN_SECRET);
