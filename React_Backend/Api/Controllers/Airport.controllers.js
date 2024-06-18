const Airport = require('../Models/Airport.model');

const getAllAirports = async (req, res ) => {
    try {
        const airport = await Airport.findAll()
        return res.status(200).json(airport)
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllAirports
}