const Employees = require('../Models/Employees.model')
const jwt = require('jsonwebtoken')
const Clients = require('../Models/Clients.model')
const planes = require('../Models/Planes.model')
const flights = require('../Models/Flights.model')

const checkAuth = ( req, res, next) => {
      if (!req.headers.authorization) {
    return res.status(404).send("Token not found");
  };
    jwt.verify(
    req.headers.authorization, 
    process.env.SECRET,        
    async (error, payload) => {  
      if (error) {
        console.log(error.message);  
        return res.status(401).send("Token not valid");
      }
      const employees = await Employees.findOne({
        where: {
          username: payload.username, 
        },
      });
      const clients = await Clients.findOne({
        where: {
          username: payload.username, 
        },
      });
      if (!employees && !clients) {
        return res.status(401).send("Token not valid");
      }
      res.locals.employees = employees;
      res.locals.clients = clients;
      next();
    }
  );
};

function checkAdmin(req, res, next) {
  if (res.locals.employees.category !== 'admin' || res.locals.clients) {
    return res.status(401).json('Admins only')
  }
else {
    next()
  }
};
function checkAvailableBooking (req,res,next){
    let isAvailable = false
    if(res.locals.planes.user_capacity <= res.locals.flights.booking){
        console.log("El vuelo está lleno");
        return isAvailable
    }else{
        isAvailable =true;
        next()
    }
}


module.exports = {
    checkAdmin,
    checkAuth,
    checkAvailableBooking
}