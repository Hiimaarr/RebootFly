const Flights = require("../Models/Flights.model");

const getAllFlights = async (req, res) => {
  try {
    const getAllflights = await Flights.findAll();
    return res.status(200).json(getAllflights);
  } catch (error) {
    console.log(error);
  }
};

const getOneFlights = async (req, res) => {
  try {
    const oneFlights = await Flights.findByPk(req.params.id);
    if (oneFlights) {
      return res.status(200).json(oneFlights);
    } else {
      return res.status(200).send("No user found");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateFlights = async (req, res) => {
  try {
    const updatedFlights = await Flights.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(updatedFlights);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteFlights = async (req, res) => {
  try {
    const deletedFlights = await Flights.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(deletedFlights);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const createFlights = async (req, res) => {
  try {
    console.log(req.body);
    const updatedFlights = await Flights.create(req.body);
    return res.status(200).json(updatedFlights);
  } catch (error) {
    console.log(error.message)
    return res.status(500).send(error.message);
  }
};

const createFlightsInBulk = async (req, res) => {
  try {
    const updatedFlights = await Flights.bulkCreate(req.body);
    return res.status(200).json(updatedFlights);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllFlights,
  getOneFlights,
  updateFlights,
  deleteFlights,
  createFlights,
  createFlightsInBulk
};
