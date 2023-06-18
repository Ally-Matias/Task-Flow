//packets
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('email-validator');

//models
const User = require('../Models/User');

//helpers
const createUserToken = require('../Helpers/create-user-token');
const getToken = require('../Helpers/get-token');

module.exports = class userController {

    static async register(req, res) {

        const {
            name,
            email,
            password,
            confirmpassword
        } = req.body;

        const eValid = validator.validate(email);
        //validações
        if (!name) {
            res.status(422).json({
                message: 'O nome é obrigatório!'
            });
            return;
        }

        if (!email) {
            res.status(422).json({
                message: 'O e-mail é obrigatório!'
            });
            return;
        }

        if (!eValid) {
            res.status(422).json({
                message: 'O e-mail não é válido!'
            });
            return;
        }

        if (!password) {
            res.status(422).json({
                message: 'A senha é obrigatória!'
            });
            return;
        }

        if (!confirmpassword) {
            res.status(422).json({
                message: 'A confirmação da senha é obrigatória!'
            });
            return;
        }

        if (password !== confirmpassword) {
            res.status(422).json({
                message: 'As senhas precisam ser idênticas'
            });
            return;
        }
        //check se o usuário existe
        const userExists = await User.findOne({
            email: email
        });
        if (userExists) {
            res.status(422).json({
                message: 'Já existe um usuário cadastrado com esse e-mail!'
            });
            return;
        }

        //criar senha
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        //criar usuário
        const user = new User({
            name: name,
            email: email,
            password: passwordHash,
        });
        try {
            const newUser = await user.save();
            await createUserToken(newUser, req, res);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    static async login(req, res) {

        const {
            email,
            password
        } = req.body;

        const eValid = validator.validate(email);

        //Validações
        if (!email) {
            res.status(422).json({
                message: 'O e-mail é obrigatório!'
            });
            return;
        }

        if (!eValid) {
            res.status(422).json({
                message: 'O e-mail não é válido!'
            });
            return;
        }

        if (!password) {
            res.status(422).json({
                message: 'A senha é obrigatória!'
            });
            return;
        }

        //check se o usuário existe
        const user = await User.findOne({
            email: email
        });
        if (!user) {
            res.status(422).json({
                message: 'Não há usuário cadastrado com esse e-mail!'
            });
            return;
        }

        //check password
        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            res.status(422).json({
                message: 'Senha inválida!'
            });
        }
        await createUserToken(user, req, res)

    };

    static async checkUser(req, res) {
        
        let currentUser;

        if (req.headers.authorization) {
            const token = getToken(req);
            const decoded = jwt.verify(token, 'ChupaC@br@10!');
            currentUser = await User.findById(decoded.id);
            currentUser.password = undefined;
        } else {
            currentUser = null;
        }
        res.status(200).send(currentUser);
    }
};
