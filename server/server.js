import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import config from "./config/config.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import router from "./routes/index.js";
import cors from "cors";

const app = express();
// We import PORT enviroment variable from config.js and set it as PORT value
const PORT = config.PORT || 3001;

app.use(json());
app.use(urlencoded({ extended: true }));
// IMPORTANT: we apply cors here to avoid CORS POLICY error when making requests
app.use(cors());

// All routes are going to be controlled by the router index
app.use("/", router);

// Here we pass a middleware that checks if there is any error in the request made to the server
app.use(errorMiddleware);

// We connect to our mongo db
await mongoose.connect(config.DB);

console.log("Database connected!");

app.listen(PORT, (err) => {
  if (err) {  
    console.log(`Error intializing server ${JSON.stringify(err)}`);
  }

  console.log(`Server listening port: ${PORT}`);
});
