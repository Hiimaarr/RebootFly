const Clients_flights = require('../Models/Clients_flights.model');
const Flight = require('../Models/Flights.model')
const Client = require('../Models/Clients.model')
const Location = require('../Models/Location.model')

const getAllClients_flights = async ( req, res ) => {
    try {
        const client_flight = await Clients_flights.findAll()
        return res.status(200).json(client_flight)
    } catch (error) {
        console.log(error);
    }
};

const getOneClient_flight = async (req, res ) => {
    try {
        const oneClient_flight = await Clients_flights.findByPk(req.params.id)
        if (oneAirport) {
            return res.status(200).json(oneClient_flight)
        } else {
            return res.status(200).send('No user found')
        }
    } catch (error) {
        console.log(error)
    }
};

const updateClient_flight = async (req, res ) => {
    try {
        const updatedClient_flight = await Clients_flights.update(req.body, {
            where: {
                id:req.params.id
            }})    
        return res.status(200).json(updatedClient_flight) 
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

const deleteClient_flight = async (req,res)=>{
    try {
        const deletedClient_flight=await Clients_flights.destroy({
            where:{
                id: req.params.id
            }
        })
        return res.status(200).json(deletedClient_flight) 
    } catch (error) {
       console.log(error); 
       return res.status(500).send(error.message)
    }
};



const createClients_flights = async (req, res ) => {
    try {
        const updatedClient_flight = await Clients_flights.create(req.body)    
        return res.status(200).json(updatedClient_flight)
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

const getFlightByPK = async (req,res) =>{
    try {
        const {Flights} = await Client.findByPk(req.params.id,
           { include:Flight}
        )
        const location = await Flight.findByPk(Flights[0].id, {
            include: Location
        })
        const result = {
            flights: Flights,
            locationFlight: location.Location
        }
            /* const getFlight = await Flight.findAll() */
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllClients_flights,
    createClients_flights,
    getOneClient_flight,
    updateClient_flight,
    deleteClient_flight,
    getFlightByPK
}