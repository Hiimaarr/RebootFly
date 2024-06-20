const router = require("express").Router();

const {
  getAllPlanes,
  getOnePlane,
  updatePlane,
  deletePlane,
  createPlane,
} = require("../Controllers/Planes.controller");

router.get("", getAllPlanes);
router.get("/:id", getOnePlane);
router.put("/:id", updatePlane);
router.delete("/:id", deletePlane);
router.post("", createPlane);

module.exports = router;
