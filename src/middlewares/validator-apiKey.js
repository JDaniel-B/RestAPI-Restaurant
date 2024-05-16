import { config } from "dotenv";
config();
const { API_KEY } = process.env;

export const validatorApiKey = (req, res, next) => {
  const apiKey = req.header("apiKey");
  if (apiKey !== API_KEY) {
    res.status(401).send("NO ACCESS");
  } else {
    next();
  }
};
