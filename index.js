const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const mongo = require("./Connect");
const pinRouter = require("./routers/pinRouter");
const userRouter = require("./routers/userRouter");
const dotenv = require("dotenv");

//midleweares
app.use(express.json());
app.use(cors());
app.use("/pins", pinRouter);
app.use("/users", userRouter);
dotenv.config();

app.use("/", (req, res) => {
  res.send("hey lets start the project");
});
mongo.connect();

app.listen(PORT, () => console.log(`server running on port number ${PORT}`));
