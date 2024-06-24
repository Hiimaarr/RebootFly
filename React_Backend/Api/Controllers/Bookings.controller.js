const Booking = require("../Models/Bookings.model");
const Flight = require("../Models/Flights.model");

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
    return res.status(200).json(deletedBooking);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const createBooking = async (req, res) => {
  try {
/*
    const flight = await Flight.findByPk(req.params.id);

    if(flight.dataValues.occupiedPlaces < flight.dataValues.capacity) {
      const updatedBooking = await Booking.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json(updatedBooking);

    }
    else {
      return res.status(200).json("")
    } */

    const updatedBooking = await Booking.create(req.body);

    return res.status(200).json(updatedBooking);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllBookings,
  getOneBooking,
  updateBooking,
  deleteBooking,
  createBooking,
};
