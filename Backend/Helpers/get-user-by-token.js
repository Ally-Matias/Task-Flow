const bcryptSecret = process.env.BCRYPT_SECRET;
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const errorHelper = require('../Helpers/errorHelper');
const errorMessages = require('../Utils/errorMessages');


// Resgatando o usuario pelo token.
const getUserByToken = async (token) => {
    
    if (!token) {
        return sendError(res, errorMessages.deniedPermission.statusCode, errorMessages.deniedPermission.message);
    }

    const decoded = jwt.verify(token,bcryptSecret);
    
    const userId = decoded.id;
    
    const user = await User.findOne({_id: userId });
    
    return user;
}

module.exports = getUserByToken;