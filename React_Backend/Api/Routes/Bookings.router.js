const router = require("express").Router();

const {
  getAllBookings,
  getOneBooking,
  updateBooking,
  deleteBooking,
  createBooking,
} = require("../Controllers/Bookings.controller");

router.get("", getAllBookings);
router.get("/:id", getOneBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);
router.post("/:id", createBooking);

module.exports = router;
