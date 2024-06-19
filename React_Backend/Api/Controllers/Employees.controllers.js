const Employees = require('../Models/Employees.model')

const getAllEmployees = async (req, res ) => {
    try {
        const employees= await Employees.findAll()
        return res.status(200).json(employees)
    } catch (error) {
        console.log(error);
    }
};

const getOneEmployee = async (req, res ) => {
    try {
        const oneEmployee = await Employees.findByPk(req.params.id)
        if (oneEmployee) {
            return res.status(200).json(oneEmployee)
        } else {
            return res.status(200).send('No user found')
        }
    } catch (error) {
        console.log(error)
    }
};


const updateEmployee = async (req, res ) => {
    try {
        const updatedEmployee = await Employees.update(req.body, {
            where: {
                id:req.params.id
            }})    
        return res.status(200).json(updatedEmployee) 
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

const deleteEmployee = async (req,res)=>{
    try {
        const deletedEmployee =await Employees.destroy({
            where:{
                id: req.params.id
            }
        })
        return res.status(200).json(deletedEmployee) 
    } catch (error) {
       console.log(error); 
       return res.status(500).send(error.message)
    }
} 

const createEmployee = async (req, res ) => {
    try {
        const createEmployee = await Employees.create(req.body)    
        return res.status(200).json(createEmployee) 
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = {
    getAllEmployees,
    getOneEmployee,
    updateEmployee,
    deleteEmployee,
    createEmployee
}