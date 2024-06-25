const Location = require("../Models/Location.model");

const getAllLocations = async (req, res) => {
  try {
    const getAllLocation = await Location.findAll();
    return res.status(200).json(getAllLocation);
  } catch (error) {
    console.log(error);
  }
};

const getOneLocation = async (req, res) => {
  try {
    const oneLocation = await Location.findByPk(req.params.id);
    if (oneLocation) {
      return res.status(200).json(oneLocation);
    } else {
      return res.status(200).send("No user found");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateLocation = async (req, res) => {
  try {
    const updatedLocation = await Location.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(updatedLocation);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteLocation = async (req, res) => {
  try {
    const deletedLocation = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(deletedLocation);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const createLocation = async (req, res) => {
  try {
    const updatedLocation = await Location.create(req.body);
    return res.status(200).json(updatedLocation);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createLocationInBulk = async (req, res) => {
  try {
    const updatedLocation = await Location.bulkCreate(req.body);
    return res.status(200).json(updatedLocation);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllLocations,
  getOneLocation,
  updateLocation,
  deleteLocation,
  createLocation,
  createLocationInBulk
};
