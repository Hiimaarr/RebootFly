const router = require("express").Router();
const {
  checkAdmin,
  checkAuth,
  /* checkAvailableBooking, */ //icebox for seats availability
} = require("../Middleware/auth");

const {
  getAllUsers,
  getOneUsers,
  updateUsers,
  deleteUsers,
  createUsers,
  createUsersInBulk,
  getBookingFromOneUser
} = require("../Controllers/Users.controller");

router.get("", checkAuth, checkAdmin, getAllUsers);
router.get("/:id",getBookingFromOneUser)
router.get("/:id", checkAuth, checkAdmin, getOneUsers);
router.put("/:id", checkAuth, checkAdmin, updateUsers);
router.delete("/:id", deleteUsers);
router.post("", checkAuth, checkAdmin, createUsers);
router.post("/bulk", checkAuth, checkAdmin, createUsersInBulk);

module.exports = router;
