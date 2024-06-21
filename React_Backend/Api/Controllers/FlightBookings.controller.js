const FlightBooking = require("../Models/Bookings.model");
const Flight = require("../Models/Flights.model");
const Booking = require("../Models/Bookings.model");

const getAllFlightBookings = async (req, res) => {
  try {
    const flightBooking = await FlightBooking.findAll();
    return res.status(200).json(flightBooking);
  } catch (error) {
    console.log(error);
  }
};

const getOneFlightBooking = async (req, res) => {
  try {
    const oneFlightBooking = await FlightBooking.findByPk(req.params.id);
    if (oneFLightBooking) {
      return res.status(200).json(oneFlightBooking);
    } else {
      return res.status(200).send("No user found");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateFlightBooking = async (req, res) => {
  try {
    const updatedFlightBooking = await FlightBooking.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(updateFLightBooking);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createBookingFromFlightBooking = async (req, res) => {
  try {
    const createBooking = await Booking.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    const patchToAddSeatsToFlight = await Flight.findOne(req, body, {
      where: {
        id: req.params.id,
      },
    });
    patchToAddSeatsToFlight.occupiedPlaces += 1;

    const creadBookingAndAddSeats = {
      booking: createBooking,
      flight: patchToAddSeatsToFlight,
    };

    return res.status(200).json(creadBookingAndAddSeats);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteBookingAndSeatsFromFlightBooking = async (req, res) => {
  try {
    const deleteBooking = await Booking.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const patchToReducedSeatsToFlight = await Flight.update(req, body, {
      where: {
        id: req.params.id,
      },
    });

    patchToReducedSeatsToFlight -= 1;

    const creadBookingAndAddSeats = {
      booking: deleteBooking,
      flight: patchToReducedSeatsToFlight,
    };

    return res.status(200).json(creadBookingAndAddSeats);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllFlightBookings,
  getOneFlightBooking,
  updateFlightBooking,
  createBookingFromFlightBooking,
  deleteBookingAndSeatsFromFlightBooking,
};
