//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require("express").Router();
let User = require("../models/user.model");

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. get all users on record
// GET: /
// ========================================
router.get("/", async (req, res) => {
  // using try and catch statements here as well but for users
  try {
    const users = await User.find();
    res.send(users);
  } catch {
    res.send(404);
  }
});

// 2. add a new user
// POST /add
// ========================================
router.post("/add", async (req, res) => {
  // idea is similiar to exercise
  // creating a new User and then saving it
  try {
    let users = new User(req.body);
    users = await users.save();

    res.send(users);
  } catch {
    res.send(404);
  }
});

module.exports = router;
