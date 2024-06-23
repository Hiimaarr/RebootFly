const Users = require("../Models/Users.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const getOneUsers = async (req, res) => {
  try {
    const oneUsers = await Users.findByPk(req.params.id);
    if (oneUsers) {
      return res.status(200).json(oneUsers);
    } else {
      return res.status(200).send("No user found");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateUsers = async (req, res) => {
  try {
    const updatedUsers = await Users.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(updatedUsers);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteUsers = async (req, res) => {
  try {
    const deletedUsers = await Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(deletedUsers);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

const createUsers = async (req, res) => {
  try {
    const updatedUsers = await Users.create(req.body);
    return res.status(200).json(updatedUsers);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUsers,
  updateUsers,
  deleteUsers,
  createUsers,
};
