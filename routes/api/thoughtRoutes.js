const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");
// **`/api/thoughts`**
router.route("/").get(getThoughts).post(createThought);

router
  .route("/:_id")
  .get(getSingleThought)
  .post(updateThought)
  .delete(deleteThought);

router
  .route("/:thoughtId/reactions/:reactionId")
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
