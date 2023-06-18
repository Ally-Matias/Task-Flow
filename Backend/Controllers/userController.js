// Importação de pacotes.
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('email-validator');

// Importação de modelos.
const User = require('../Models/User');

// Importação de helpers.
const createUserToken = require('../Helpers/create-user-token');
const getToken = require('../Helpers/get-token');

module.exports = class userController {
    
    // Método para registrar um usuário.
    static async register(req, res) {
        // Extração dos dados da requisição.
        const {
            name,
            email,
            password,
            confirmpassword
        } = req.body;

        // Validação do e-mail utilizando email-validator.
        const eValid = validator.validate(email);

        // Validações.
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

        // Verifica se o usuário já existe.
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            res.status(422).json({
                message: 'Já existe um usuário cadastrado com esse e-mail!'
            });
            return;
        }

        // Criptografa a senha.
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        // Cria um novo usuário.
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

    // Método para realizar o login de um usuário.
    static async login(req, res) {
        // Extração dos dados da requisição.
        const {
            email,
            password
        } = req.body;

        // Validação do e-mail utilizando email-validator.
        const eValid = validator.validate(email);

        // Validações.
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

        // Verifica se o usuário existe.
        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(422).json({
                message: 'Não há usuário cadastrado com esse e-mail!'
            });
            return;
        }

        // Verifica a senha.
        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            res.status(422).json({
                message: 'Senha inválida!'
            });
        }
        await createUserToken(user, req, res);
    };

    // Método para verificar se um usuário está autenticado.
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