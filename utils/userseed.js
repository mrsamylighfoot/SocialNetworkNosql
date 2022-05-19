const { getThoughts } = require("../controllers/thoughtController")
const { User, Thought } = require("../models")

await User.collection.insertOne
{
    "username": "lernantino",
    "email": "lernantino@gmail.com"
  };

await User.collection.insertOne
  {
    "username": "Pokemon",
    "email": "poke@mon.com"
  };

await Thought.collection.insertOne
{
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
  };