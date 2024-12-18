import dotenv from "dotenv";

dotenv.config();

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.RAWG_KEY,
  },
});
