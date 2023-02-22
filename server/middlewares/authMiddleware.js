const jwt = require('jsonwebtoken')


const authMiddleware = async (req,res,next) => {
    try {
        const token =  req.headers.authorization.split(" ")[1];
        console.log(token)
        const decodetoken = jwt.verify(token, process.env.JWT_SECRET);
        console.log('decode',decodetoken.userId)
        const userId = decodetoken.userId
        req.body.userId = userId
        next()
    } catch (error) {
        res.status(401).send({
            message: "You are not authenticated",
            data: error,
            success: false,
          });
    }
}

module.exports = authMiddleware