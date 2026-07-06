require('dotenv').config();
const jwt = require('jsonwebtoken');

function adminMiddleware (req, res, next){
    const token = req.headers.token;
    const verifyUser = jwt.verify(token, process.env.JWT_ADMIN_SECRET);

    if(verifyUser){
        req.id = verifyUser.id;
        next();
    }else{
        return res.status(401).json({
            message:"wrong token supplied!"
        })
    }
}

module.exports = adminMiddleware;