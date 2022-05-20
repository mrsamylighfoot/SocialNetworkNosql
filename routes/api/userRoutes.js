const router = require("express").Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController.js");
// **`/api/users`**
router.route("/").get(getUser).post(createUser);
module.exports = router;
