const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const userRoute = require("./routes/user.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbUrl = "mongodb+srv://cluster0.189atqv.mongodb.net/";
const connectionParams = {
  dbName: "keepCar",
  user: "root",
  pass: "dilhara2001",
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(dbUrl, connectionParams)
  .then(() => {
    console.log("database connected");
  })
  .catch(() => {
    console.log("cannot connect with database");
  });

app.listen(port, () => {
  console.log(`Our server is up and running on port:${port}`);
});

app.use("/user", userRoute);

app.use((err, req, res, next) => {
  console.log("awada");
  res.status(500);
  res.send({
    error: {
      status: err.status,
      message: err.message,
    },
  });
});
