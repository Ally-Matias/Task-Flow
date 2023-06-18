const jwt = require('jsonwebtoken');

// Função responsável por criar um token JWT para o usuário.
createUserToken = async (user, req, res) => {
    // Cria um token JWT contendo o nome e o ID do usuário.
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, "ChupaC@br@10!");

    // Retorna uma resposta de status 200 com o token e o ID do usuário.
    res.status(200).json({
        message: 'Autenticado com sucesso!',
        token: token,
        userId: user._id,
    })
};

// Exporta a função createUserToken para uso em outros módulos.
module.exports = createUserToken;