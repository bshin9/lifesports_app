/////////////////////////////////////////////
//// API endpoints for managing exercises //
///////////////////////////////////////////

const router = require("express").Router();
let Exercise = require("../models/exercise.model");

// Your Challenge: Make five routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// 1. get all exercise logs on record
// GET: /
// ========================================
router.get("/", async (req, res) => {
  // using async await promises because we want the endpoint to return the exercise data
  // try statements can come with catch clause that just means that when the condition 
  // in the try block is not fulfilled then the catch will handle the error
  try {
    const exercise = await Exercise.find();
    res.send(exercise);
  } catch {
    res.send(404);
  }
});

// 2. add a new exercise log
// POST: /add
// ========================================
router.post("/add", async (req, res) => {
  try {
    let exercise = new Exercise(req.body);
    exercise = await exercise.save();

    res.send(exercise);
  } catch {
    res.send(500);
  }
});
// 3. retrieve a specfic exercise log
// GET: /:id
// ========================================
router.get("/:id", async (req, res) => {
  // findById means that we're going to locate our user data with their ID
  try {
    const exercise = await Exercise.findById(req.params.id);

    res.send(exercise);
  } catch {
    // we're going to catch the error if exercise is not equal to the ID we are trying to locate
    res.send(404);
  }
});
// 4. delete a specfic exercise log
// DELETE: /:id
// ========================================
router.delete("/:id", async (req, res) => {
  try {
    // findByAndRemove is going to find the id and remove the desired exercise log
    const exercise = await Exercise.findByIdAndRemove(req.params.id);

    res.send(exercise);
  } catch {
    res.send(404);
  }
});
// 5. retrieve a specific exercise log and update it
// with information sent by client on req body
// Put: /update/:id
// ========================================
router.put("/update/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    // the set allows us to edit our exercises through the req.body
    exercise.set(req.body); 
    // we want to send result back and save the exercise information
    const result = await exercise.save();

    res.send(result);
  } catch {
    res.send(404);
  }
});

module.exports = router;
