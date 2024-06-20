const router = require("express").Router();

const {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  createUser,
} = require("../Controllers/Users.controller");

router.get("", getAllUsers);
router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("", createUser);

module.exports = router;
