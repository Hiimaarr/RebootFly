/* const Client = require('../Models/Clients.model'); */
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("../Models/Users.model");
const Flights = require("../Models/Flights.model")

const signUp = async (req, res) => {
  try {
    const findUser = await Users.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (findUser) {
      
      return res.json({ message: "User already exists" });
    }

    const salt = bcrypt.genSaltSync(parseInt("10"));
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    const user = await Users.create({
      name: req.body.name,
      surname: req.body.surname,
      username: req.body.username,
      password: req.body.password,
      dni: req.body.dni,
      email: req.body.email,
      phone: req.body.phone,
    });

    const payload = { email: req.body.email };
    const token = jwt.sign(payload, "secret", { expiresIn: "1h" });
    return res.status(200).json({ token });
  } catch (error) {
    console.log("Error signing up client", error);
    return res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    /*if(req.body.username === "davidG" && req.body.password === "123456"){
      const payload = { username: req.body.username };
      const token = jwt.sign(payload, "secret", { expiresIn: "1h" });
      return res.status(200).json({ token });
    }*/
    const user = await Users.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      return res.status(404).send("Username or password wrong");
    }

    const checkpass = bcrypt.compareSync(req.body.password, user.password);

    if (checkpass) {
      const payload = { username: req.body.username };
      const token = jwt.sign(payload, "secret", { expiresIn: "1h" });
      return res.status(200).json({ token });
    } else {
      return res.status(404).send("Username or password wrong");
    }
  } catch (error) {
    console.log("Error logging in ");
    return res.status(500).json(error);
  }
};
const insertFly = async(req,res)=>{
  try {
    const flight = Flights.create({
      code: req.body.code,
      departure_time: req.body.departure_time,
      arrival_time:req.body.arrival_time,
      status: req.body.status,
      capacity:req.body.capacity
      occupiedplaces:req.body.occupiedPlaces,
      price: req.body.price
    })
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  signUp,
  login,
};
