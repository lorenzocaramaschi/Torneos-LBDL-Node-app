import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import router from "./routes/index.js";
import cors from "cors";

const app = express();
const PORT = config.PORT || 3001;
const HOST = config.HOST;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

app.use(errorMiddleware);

await mongoose.connect(config.DB);

console.log("Database connected!");

app.listen(PORT, (err) => {
  if (err) {  
    console.log(`Error intializing server ${JSON.stringify(err)}`);
  }

  console.log(`Server listening port: ${PORT}`);
});
