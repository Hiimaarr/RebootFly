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

//search by flight id

/* const getOneFlightBooking = async (req, res) => {
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
}; */

const updateFlightBooking = async (req, res) => {
  try {
    const updatedFlightBooking = await FlightBooking.update(req.body, {
      where: {
        FlightId: req.params.id,
      },
    });
    return res.status(200).json(updatedFlightBooking);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createBookingAndIncreaseOcuppiedSeatsFromFlightBooking = async (
  req,
  res
) => {
  try {
    const createBooking = await Booking.create(req.body);

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
    const flightBooking = await FlightBooking.findOne(req.body, {
      where: {
        FlightId: req.params.id,
        //we have to pass the bookingId in the body
        BookingId: req.body.BookingId,
      },
    });
    if (!flightBooking) {
      return res.status(404).send("Flight booking not found");
    }

    await FlightBooking.destroy({
      where: {
        FlightId: req.params.id,
        BookingId: req.body.BookingId,
      },
    });

    await Booking.destroy({
      where: {
        id: req.body.bookingId,
      },
    });

    const patchToReducedSeatsToFlight = await Flight.update(req, body, {
      where: {
        id: req.params.id,
      },
    });

    patchToReducedSeatsToFlight.occupiedPlaces -= 1;
    await patchToReducedSeatsToFlight.save();

    return res.status(200).json({
      message: "Booking deleted and seats reduced",
      flight: patchToReducedSeatsToFlight,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllFlightBookings,
  /* getOneFlightBooking, */
  updateFlightBooking,
  createBookingAndIncreaseOcuppiedSeatsFromFlightBooking,
  deleteBookingAndSeatsFromFlightBooking,
};
