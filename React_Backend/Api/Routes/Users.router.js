const router = require("express").Router();
const {
  checkAdmin,
  checkAuth,
  /* checkAvailableBooking, */ //icebox for seats availability
} = require("../Middleware/auth");

const {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  createUser,
} = require("../Controllers/Users.controller");

router.get("", checkAuth, checkAdmin, getAllUsers);
router.get("/:id", checkAuth, checkAdmin, getOneUser);
router.put("/:id", checkAuth, checkAdmin, updateUser);
router.delete("/:id", deleteUser);
router.post("", checkAuth, checkAdmin, createUser);

module.exports = router;
