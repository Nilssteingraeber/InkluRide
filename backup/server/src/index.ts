import "dotenv/config";
import express from "express";
import cors from "cors";
import ApiRoute from "./api/ApiRoute";
import REST_Router from "./api/REST_Router";
import path, { dirname } from "path";
import mongoose, { Mongoose } from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

const restRouter = new REST_Router(app);


console.log("\nConnecting to Database at " + process.env.MONGO_DB_URL + "..");
mongoose.connect(process.env.MONGO_DB_URL as string).then(() => {
  console.log("Connected to Database.");
});


console.log(path.resolve(__dirname + "/../src/public"));

//http://localhost:3001/static/image.png
app.use(
  "/api/static",
  express.static(path.resolve(__dirname + "/../src/public"))
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//console.log(app._router.stack)
