const Booking = require("../Models/Bookings.model");
const Flight = require("../Models/Flights.model");
const FlightBooking = require("../Models/FlightBookings.model")

const getAllBookings = async (req, res) => {
  try {
    const booking = await Booking.findAll();
    return res.status(200).json(booking);
  } catch (error) {
    console.log(error);
  }
};

const getOneBooking = async (req, res) => {
  try {
    const oneBooking = await Booking.findByPk(req.params.id);
    if (oneBooking) {
      return res.status(200).json(oneBooking);
    } else {
      return res.status(200).send("No user found");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateBooking = async (req, res) => {
  try {

    
    const flight = await Flight.findByPk(req.params.id);
    const updatedBooking = await Booking.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(updatedBooking);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await Booking.destroy({
      where: {
        id: req.params.id,
      },
    });
   const flight = await Flight.findByPk(req.params.id);
    flight.occupiedPlaces -= 1;
    return res.status(200).json({deletedBooking, flight});
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

/*const createBooking = async (req, res) => {
  try {
 
    const flight = await Flight.findByPk(req.params.id);

    if (!flight) {
      return res.status(404).json({ error: "Flight not found" });
    }

    if (flight.occupiedPlaces < flight.capacity) {
      
      const createBooking = await Booking.create(req.body);

      await flight.addBooking(createBooking);

      flight.occupiedPlaces += 1;
      const flightBooking = await Flight.findOne({
        where: {
          id: req.params.id,
        },
      });;
    console.log(flightBooking)

      return res.status(200).json({ booking: createBooking, flightUpdated: flight });
    } else {
      return res.status(400).json({ error: "No available seats on this flight" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};*/

const createBooking = async (req, res) => {
  try {
 
    const flight = await Flight.findByPk(req.params.id);

    if (!flight) {
      return res.status(404).json({ error: "Flight not found" });
    }

    if (flight.occupiedPlaces < flight.capacity) {
      
      const createBooking = await Booking.create(req.body);

      await flight.addBooking(createBooking);

      flight.occupiedPlaces += 1;
      const flightBooking = await Flight.findOne({
        where: {
          id: req.params.id,
        },
      });;
    console.log(flightBooking)

      return res.status(200).json({ booking: createBooking, flightUpdated: flight });
    } else {
      return res.status(400).json({ error: "No available seats on this flight" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
 

module.exports = {
  getAllBookings,
  getOneBooking,
  updateBooking,
  deleteBooking,
  createBooking,
};
