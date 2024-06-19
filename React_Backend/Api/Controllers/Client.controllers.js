const Clients = require('../Models/Clients.model')
const getAllClients = async (req, res ) => {
    try {
        const client = await Clients.findAll()
        return res.status(200).json(client)
    } catch (error) {
        console.log(error);
    }
};

const getOneClient = async (req, res ) => {
    try {
        const oneClient = await Clients.findByPk(req.params.id)
        if (oneClient) {
            return res.status(200).json(oneClient)
        } else {
            return res.status(200).send('No user found')
        }
    } catch (error) {
        console.log(error)
    }
};


const updateClient = async (req, res ) => {
    try {
        const updatedClient = await Clients.update(req.body, {
            where: {
                id:req.params.id
            }})    
        return res.status(200).json(updatedClient) 
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

const deleteClient = async (req,res)=>{
    try {
        const deletedClient =await Clients.destroy({
            where:{
                id: req.params.id
            }
        })
        return res.status(200).json(deletedClient) 
    } catch (error) {
       console.log(error); 
       return res.status(500).send(error.message)
    }
} 

const createClient = async (req, res ) => {
    try {
        const createClient = await Clients.create(req.body)    
        return res.status(200).json(createClient) 
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = {
    getAllClients,
    getOneClient,
    updateClient,
    deleteClient,
    createClient
}