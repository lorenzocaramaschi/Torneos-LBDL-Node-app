import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  DB: process.env.DB,
};

export default config;