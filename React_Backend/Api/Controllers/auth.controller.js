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
      capacity:req.body.capacity,
      occupiedPlaces:req.body.occupiedPlaces,
      price: req.body.price
    })
  } catch (error) {
    console.log(error);
  }
}
const bulkSignup = async (req, res) => {
  try {
    // Obtener los usuarios a registrar desde el cuerpo de la solicitud
    const usersToCreate = req.body.users;

    // Validar que se reciban datos de usuarios
    if (!usersToCreate || usersToCreate.length === 0) {
      return res.status(400).json({ message: "No users provided" });
    }

    // Procesar cada usuario para encriptar la contraseña y crear en la base de datos
    const salt = bcrypt.genSaltSync(10); // Generar salt para bcrypt
    const usersPromises = usersToCreate.map(async (userData) => {
      // Encriptar contraseña
      const hashedPassword = bcrypt.hashSync(userData.password, salt);

      // Crear usuario en la base de datos
      await Users.create({
        name: userData.name,
        surname: userData.surname,
        username: userData.username,
        password: hashedPassword,
        dni: userData.dni,
        email: userData.email,
        phone: userData.phone,
        role: userData.role || "client", // Asignar role por defecto si no se proporciona
      });
    });

    // Esperar a que se completen todas las operaciones de creación
    await Promise.all(usersPromises);

    return res.status(201).json({ message: "Bulk signup successful" });
  } catch (error) {
    console.log("Error in bulk signup:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
  signUp,
  login,
  bulkSignup
};
