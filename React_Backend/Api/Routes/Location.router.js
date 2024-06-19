const router = require("express").Router();

const {
  getAllLocations,
  getOneLocation,
  updateLocation,
  deleteLocation,
  createLocation,
} = require("../Controllers/Location.controller");

router.get("", getAllLocations);
router.get("/:id", getOneLocation);
router.put("/:id", updateLocation);
router.delete("/:id", deleteLocation);
router.post("", createLocation);

module.exports = router;