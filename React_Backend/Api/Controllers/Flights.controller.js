//const Flight = require("../Models/Flights.model");
const Flights = require("../Models/Flights.model");
const { Op } = require("sequelize");
const Airport = require("../Models/Airport.model");

const getAllFlights = async (req, res) => {
  try {
    const getAllflights = await Flights.findAll();
    return res.status(200).json(getAllflights);
  } catch (error) {
    console.log(error);
  }
};

const getOneFlights = async (req, res) => {
  console.log("si soy");
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
    console.log(error.message);
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
const searchFlights = async (req, res) => {
  console.log("SEARCH FLIGHTTTTTTTTTTTTTTTTTTTTTTTT");

  const { origin, destination, date, returnDate } = req.body;

  // Parse dates from query parameters
  const searchDate = new Date(date);
  const startOfDay = new Date((
    searchDate.getDate()
  ))
  const endOfDay = new Date(
    searchDate.getFullYear(),
    searchDate.getMonth(),
    searchDate.getDate() + 1
  );

  const query = {
    where: {
      departureAirportId: origin,
      arrivalAirportId: destination,
      departure_time: {
        [Op.gte]: startOfDay,
        [Op.lt]: endOfDay,
      },
    },
    include: [
      {
        model: Airport,
        as: "departureAirport",
      },
      {
        model: Airport,
        as: "arrivalAirport",
      },
    ],
  };

  try {
    const outgoingFlights = await Flights.findAll(query);
    let returnFlights = [];

    if (returnDate) {
      const returnSearchDate = new Date(returnDate);
      const returnStartOfDay = new Date(
        returnSearchDate.getFullYear(),
        returnSearchDate.getMonth(),
        returnSearchDate.getDate()
      );
      const returnEndOfDay = new Date(
        returnSearchDate.getFullYear(),
        returnSearchDate.getMonth(),
        returnSearchDate.getDate() + 1
      );

      returnFlights = await Flights.findAll({
        where: {
          departureAirportId: origin,
          arrivalAirportId: destination,
          departure_time: {
            [Op.gte]: returnStartOfDay,
            [Op.lt]: returnEndOfDay,
          },
        },
        include: [
          {
            model: Airport,
            as: "departureAirport",
          },
          {
            model: Airport,
            as: "arrivalAirport",
          },
        ],
      });
    }

    res.status(200).json({ outgoingFlights, returnFlights });
  } catch (error) {
    console.error("Error searching flights:", error);
    res.status(500).json({ error: "Error searching flights" });
  }
};

// Obtener fechas de vuelo disponibles
const getFlightDates = async (req, res) => {
  const { origin, destination } = req.query;

  try {
    const dates = await Flights.findAll({
      attributes: [
        [
          sequelize.fn("DISTINCT", sequelize.col("departure_time")),
          "departure_time",
        ],
      ],
      where: {
        departureAirportId: origin,
        arrivalAirportId: destination,
        departure_time: {
          [Op.gte]: new Date(), // Solo fechas en el futuro
        },
      },
      /*  order: [["departure_time", "ASC"]], */
    });

    const availableDates = dates.map((date) =>
      date.departure_time.toISOString()
    );

    res.json(availableDates);
  } catch (error) {
    console.error("Error fetching flight dates:", error);
    res.status(500).json({ error: "Error fetching flight dates" });
  }
};

module.exports = {
  getAllFlights,
  getOneFlights,
  updateFlights,
  deleteFlights,
  createFlights,
  searchFlights,
  getFlightDates,
  createFlightsInBulk,
};
