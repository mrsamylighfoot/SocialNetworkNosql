const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController.js');
// **`/api/users`**
router.route('/').get(getUsers).post(createUser);
// * `GET` all users
// * `GET` a single user by its `_id` and populated thought and friend data
// * `POST` a new user:
// ```json
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// ```
router.route("/:userId").get(getSingleUser).post(updateUser).remove(deleteUser);
// * `PUT` to update a user by its `_id`
// * `DELETE` to remove user by its `_id`
// **BONUS**: Remove a user's associated thoughts when deleted.
// ---
// **`/api/users/:userId/friends/:friendId`**
router.route("/:userId/friends/:friendId").post(addFriend).remove(removeFriend);
// * `POST` to add a new friend to a user's friend list
// * `DELETE` to remove a friend from a user's friend list
// ---
module.exports = router;