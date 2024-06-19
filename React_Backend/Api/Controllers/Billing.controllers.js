const Billing = require('../Models/Billing.model')

const getAllBillings = async (req, res ) => {
    try {
        const billings = await Billing.findAll()
        return res.status(200).json(billings)
    } catch (error) {
        console.log(error);
    }
};

const getOneBilling = async (req, res ) => {
    try {
        const oneBilling = await Billing.findByPk(req.params.id)
        if (oneBilling) {
            return res.status(200).json(oneBilling)
        } else {
            return res.status(200).send('No user found')
        }
    } catch (error) {
        console.log(error)
    }
};

const updateBilling = async (req, res ) => {
    try {
        const updatedBilling = await Billing.update(req.body, {
            where: {
                id:req.params.id
            }})    
        return res.status(200).json(updatedBilling) 
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

const deleteBilling = async (req,res)=>{
    try {
        const deletedBilling=await Billing.destroy({
            where:{
                id: req.params.id
            }
        })
        return res.status(200).json(deletedBilling) 
    } catch (error) {
       console.log(error); 
       return res.status(500).send(error.message)
    }
};


const createBilling = async ( req, res ) => {
    try {
        const createdBilling = await Billing.create(req.body)
        return res.status(200).json(createdBilling)
    } catch (error) {
        return res.status(500).send(error.message)
    }
};



module.exports = {
    getAllBillings,
    createBilling,
    getOneBilling,
    updateBilling,
    deleteBilling
}