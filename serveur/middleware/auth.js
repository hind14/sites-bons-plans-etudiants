const jwt = require("jsonwebtoken")

exports.userAuth = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1]

        if(!token) res.status(401).json({ error: "Pas de token utilisteur" })
        
        const decodedToken = jwt.verify(token, process.env.jwtsecret)
        const userId = decodedToken.userId

        if(req.params.userId && req.params.userId !== userId) {
            res.status(403).json({ error: "Pas les droits d utilisateur!" })
        } else {
            next()
        }
    } catch {
        res.status(401).json({ error: "Pas de tokens" })
    }

}

exports.adminAuth = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1]

        if(!token) res.status(401).json({ error: "Pas de token administrateur" })

        const decodedToken = jwt.verify(token, process.env.jwtsecret)
        const role = decodedToken.role

        if (role != "admin") {
               res.status(403).json({ error: "Pas les droits d'administrateur!" })
        } else {
            next()
        }
    } catch {
        res.status(403).json({ error: "Pas les droits d Admin" })
    }

  

}

exports.ownerOrAdmin = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1]

        if(!token) res.status(401).json({ error: "Pas de token" })
        
        const decodedToken = jwt.verify(token, process.env.jwtsecret)
        const userId = decodedToken.userId
        const role = decodedToken.role

        if(req.params.userId && req.params.userId !== userId && role !== "admin") {
            res.status(403).json({ error: "Pas les droits!" })
        } else {
            next()
        }
    } catch {
        res.status(401).json({ error: "Pas de tokens" })
    }

}