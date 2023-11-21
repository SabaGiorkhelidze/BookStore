import { config } from "dotenv";
const env = config()

export const PORT = process.env.PORT;
export const mongodbURL = process.env.KEY