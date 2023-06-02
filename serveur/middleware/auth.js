exports.adminAuth = (req, res, next) => {

    const jwt = require('jsonwebtoken')

    try {
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, process.env.jwtsecret)
        const role = decodedToken.role
        if (role != "admin") {
            throw 'Vous n etes pas un admin'
        } else {
            next()
        }
    } catch {
        res.status(403).json({ error: new Error('Not Admin') })
    }

}

exports.userAuth = (req, res, next) => {

    const jwt = require('jsonwebtoken')

    try {
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, process.env.jwtsecret)
        const userId = decodedToken.userId
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID'
        } else {
            next()
        }
    } catch {
        res.status(401).json({ error: new Error('Invalid request!') })
    }

}