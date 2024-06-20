/* const Client = require('../Models/Clients.model'); */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Clients = require('../Models/Clients.model');

const signUp = async ( req, res ) => {
    try {

        const findClient = await Clients.findOne({
            where: {
                username: req.body.username
            }
        });
        if (findClient) {
            return res.json({ message: 'User already exists'})
        };

        const salt = bcrypt.genSaltSync(parseInt('10'));
        req.body.password = bcrypt.hashSync(req.body.password, salt);

        const client = await Clients.create({
            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            password: req.body.password,
            dni: req.body.dni,
            email: req.body.email,
        });

        const payload = {email: req.body.email};
        const token = jwt.sign(payload, 'secret', {expiresIn: '1h'});
        return res.status(200).json({token});
    }
     catch (error) {
        console.log('Error signing up client', error);
        return res.status(500).json(error);
    }
};

const login = async ( req, res ) => {
    try {
        const client = await Clients.findOne({
            where: {
               username: req.body.username
            }
        });

        if (!client) {
            return res.status(404).send('Email or password wrong');
        }

        const checkpass = bcrypt.compareSync(req.body.password, client.password);

        if ( checkpass ) {
            const payload = {email: req.body.email};
            const token = jwt.sign(payload, 'secret', {expiresIn: '1h'});
            return res.status(200).json({ token });
        } else {
            return res.status(404).send('Email or password wrong');
        };

    } catch (error) {
        console.log('Error logging in ');
        return res.status(500).json(error);
    }
};

module.exports = {
    signUp,
    login
}
