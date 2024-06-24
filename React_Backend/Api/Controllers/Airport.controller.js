const Airport = require("../Models/Airport.model");

const getAllAirports = async (req, res) => {
  try {
    const airport = await Airport.findAll();
    return res.status(200).json(airport);
  } catch (error) {
    console.log(error);
  }
};

const getOneAirport = async (req, res) => {
  try {
    const oneAirport = await Airport.findByPk(req.params.id);
    if (oneAirport) {
      return res.status(200).json(oneAirport);
    } else {
      return res.status(200).send("No user found");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateAirport = async (req, res) => {
  try {
    const updatedAirport = await Airport.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(updatedAirport);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteAirport = async (req,res)=>{
    try {
        const deletedAirport=await Airport.destroy({
            where:{
                id: req.params.id
            }
        })
        return res.status(200).json(deletedAirport) 
    } catch (error) {
       console.log(error); 
       return res.status(500).send(error.message)
    }
};

const createAirport = async (req, res ) => {
    try {
        const updatedAirport = await Airport.create(req.body)    
        return res.status(200).json(updatedAirport) 
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

//create bulk airports

const createAirportInBulk = async (req, res) => {
  try {
    const updatedAirport = await Airport.bulkCreate(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(updatedAirport);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};



module.exports = {
  getAllAirports,
  getOneAirport,
  updateAirport,
  deleteAirport,
  createAirport,
  createAirportInBulk
};
