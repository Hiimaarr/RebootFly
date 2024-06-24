const router = require("express").Router();

const {
  getAllLocations,
  getOneLocation,
  updateLocation,
  deleteLocation,
  createLocation,
  createLocationInBulk
} = require("../Controllers/Location.controller");

router.get("", getAllLocations);
router.get("/:id", getOneLocation);
router.put("/:id", updateLocation);
router.delete("/:id", deleteLocation);
router.post("", createLocation);
router.post("/bulk-locations", createLocationInBulk)

module.exports = router;