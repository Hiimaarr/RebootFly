const EmployeesFlight = require('../Models/Employees_flights.model')

const getAllEmployeesFlight = async (req, res ) => {
    try {
        const employeesFlight= await EmployeesFlight.findAll()
        return res.status(200).json(employeesFlight)
    } catch (error) {
        console.log(error);
    }
};

const getOneEmployeeFlight = async (req, res ) => {
    try {
        const oneEmployeeFlight = await EmployeesFlight.findByPk(req.params.id)
        if (oneEmployeeFlight) {
            return res.status(200).json(oneEmployeeFlight)
        } else {
            return res.status(200).send('No user found')
        }
    } catch (error) {
        console.log(error)
    }
};


const updateEmployeeFlight = async (req, res ) => {
    try {
        const updatedEmployeeFlight = await EmployeesFlight.update(req.body, {
            where: {
                id:req.params.id
            }})    
        return res.status(200).json(updatedEmployeeFlight) 
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

const deleteEmployeeFlight = async (req,res)=>{
    try {
        const deletedEmployeeFlight =await EmployeesFlight.destroy({
            where:{
                id: req.params.id
            }
        })
        return res.status(200).json(deletedEmployeeFlight) 
    } catch (error) {
       console.log(error); 
       return res.status(500).send(error.message)
    }
} 

const createEmployeeFlight = async (req, res ) => {
    try {
        const createEmployeeFlight = await EmployeesFlight.create(req.body)    
        return res.status(200).json(createEmployeeFlight) 
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = {
    getAllEmployeesFlight,
    getOneEmployeeFlight,
    updateEmployeeFlight,
    deleteEmployeeFlight,
    createEmployeeFlight
}