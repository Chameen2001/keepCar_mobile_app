const express = require("express");
const router = express.Router();
const app = express();
const User = require("../model/user.model");

app.use(express.json());

router.post("/signup", async (req, res, next) => {
  try {
    await new User(req.body).save();
    res.send({
      status: "success",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
