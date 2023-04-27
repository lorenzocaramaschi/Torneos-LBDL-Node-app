import dotenv from "dotenv";

// We activate dotenv
dotenv.config();

// Then we make an object "config" that will contain all the enviroment variables stored in our .env file.
const config = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  DB: process.env.DB,
};

// Finally, we export config object.
export default config;