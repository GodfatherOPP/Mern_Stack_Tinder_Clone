import express from "express";
import mongoose from "mongoose";
import tinderCardSchema from "./cardSchema.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 8000;
const connection_url =
  "mongodb+srv://Harsh:hdprsc9587@tinderclone.ls2qajn.mongodb.net/tinderDatabase?retryWrites=true&w=majority";
//add middleware
app.use(express.json());
app.use(cors()); //cors module add headers to every request
//connect database
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  //   useFindAndModify: false, option not supported anymore (genetates connection err)
  useUnifiedTopology: true,
});

// to check if database is connected to application successfully
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("database Connected successfully");
});
//api endpoints

app.get("/", (req, res) => {
  res.status(200);
  res.send("server running");
});
app.post("/tinder/Cards", (req, res) => {
  const cards = req.body;
  tinderCardSchema.create(cards, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/Cards", (req, res) => {
  const cards = req.body;
  tinderCardSchema.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//listener
app.listen(port, () => console.log("server is up and runnig "));
