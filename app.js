const express = require("express");
const app = express();
// const data = require("./employees.json");
app.use(express.json());

const profiles = [{
    id: 1,
    playerName: "Sean",
    age: 15,
    height: "5'6"
}]

app.get("/profile", (req, res) => {
  res.send(profiles);
});

app.post("/addstats", (req, res) => {
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   }
  const player = {
    id: profiles.length + 1,
    playerName: req.body.playerName,
    age: req.body.age,
    height: req.body.height
  };
  profiles.push(player);
  res.send(profiles);
});

app.put("/editstats/:id", (req, res) => {
  const player = profiles.find(function() {
    return parseInt(req.params.id) === profiles.id;
  });
//   if (!player) {
//     res.status(404).send("Player cannot be found");
//   }
  console.log(profiles)
  profiles.playername = req.body.playerName;
  profiles.age = req.body.age;
  profiles.height = req.body.age;
  res.send(profiles);
});

app.delete("/deletestats/:id", (req, res) => {
  const player = players.find(c => c.id === parseInt(req.params.id));
  console.log(player);
  if (!player) {
    res.status(404).send("player cannot be found");
  }

  const index = players.indexOf(player);
  data.players.splice(index, 1);
  res.send(player);
});

app.get("/getstats/:id", (req, res) => {
  const player = players.find(function(player) {
    return parseInt(req.params.id) === player.id;
  });
  if (!player) {
    res.status(404).send("Player cannot be found");
  }
  res.send(player);
});

const port = process.env.PORT || 2000;
app.listen(2000, () => console.log(`Listening on port ${port}`));
