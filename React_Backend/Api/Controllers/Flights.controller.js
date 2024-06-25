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
    const updatedFlights = await Flights.create(req.body);
    return res.status(200).json(updatedFlights);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
//searching for specific flights:

const searchFlights = async (req, res) => {
  const { origin, destination, date, returnDate } = req.query;

  try {
  
    const query = {
      where: {
        departure_time: {
          [Op.between]: [new Date(date), new Date(returnDate)],
        },
      },
      include: [
        {
          model: Airport,
          as: 'departureAirport',
          where: { id: origin },
        },
        {
          model: Airport,
          as: 'arrivalAirport',
          where: { id: destination },
        },
      ],
    };

    
    const outgoingFlights = await Flight.findAll({
      ...query,
    });

    let returnFlights = [];
    
    if (returnDate) {
      returnFlights = await Flight.findAll({
        ...query,
      });
    }

    res.json({ outgoingFlights, returnFlights });
  } catch (error) {
    console.error('Error searching flights:', error);
    res.status(500).json({ error: 'Error al buscar vuelos' }); 
  }
};

//take the dates

const getFlightDates = async (req, res) => {
  const { origin, destination } = req.query;

  try {
    const dates = await Flight.findAll({
      
     
attributes: [
        [sequelize.fn('DISTINCT', sequelize.col('departure_time')), 'departure_time'],
      ],
      where: {
        
       
departureAirportId: origin,
        arrivalAirportId: destination,
        
       
departure_time: {
          [Op.gte]: new Date(), // Solo fechas en el futuro
        },
      },
      order: [['departure_time', 'ASC']],
    });

    
    const availableDates = dates.map(date => date.departure_time.toISOString()); // Convertimos las fechas a formato ISO 8601

    res.json(availableDates);
  } catch (error) {
    console.error('Error fetching flight dates:', error);
    res.status(500).json({ error: 'Error al obtener las fechas disponibles de vuelo' });
  }
};

module.exports = {
  getAllFlights,
  getOneFlights,
  updateFlights,
  deleteFlights,
  createFlights,
  searchFlights,
  getFlightDates
};
