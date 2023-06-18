const jwt = require('jsonwebtoken');

createUserToken = async (user, req, res) => {
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, "ChupaC@br@10!");
    res.status(200).json({
        message: 'Autenticado com sucesso!',
        token: token,
        userId: user._id,
    })
};

module.exports = createUserToken;