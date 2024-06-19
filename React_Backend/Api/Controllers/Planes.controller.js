const Plane = require("../Models/Planes.model");


const getAllPlanes = async (req, res) => {
  try {
    const Planes = await Planes.findAll();
    return res.status(200).json(planes);
  } catch (error) {
    console.log(error);
  }
};

const getOnePlane = async (req, res) => {
  try {
    const onePlane = await Plane.findByPk(req.params.id);
    if (onePlane) {
      return res.status(200).json(onePlane);
    } else {
      return res.status(200).send("No user found");
    }
  } catch (error) {
    console.log(error);
  }
};

const updatePlane = async (req, res) => {
  try {
    const updatedPlane = await Plane.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(updatedPlane);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePlane = async (req, res) => {
  try {
    const deletedPlane = await Plane.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(deletedPlane);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const createPlane = async (req, res) => {
  try {
    const updatedPlane = await Plane.create(req.body);
    return res.status(200).json(updatedPlane);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllPlanes,
  getOnePlane,
  updatePlane,
  deletePlane,
  createPlane,
};