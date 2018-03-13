import jet from 'jsonwebtoken'

import config from './../config'

const { secret, expiresIn } = config.jwt

export default {
    createToken(userinfo) {
        let token = jwt.sign(userinfo, secret, {
            expiresIn
        })
        return token
    },
    verifyToken(token) {
        if (token) {
            try {
                let result = jwt.verify(token, secret)
                return result
            } catch (error) {
                return false
            }
        } else {
            return false
        }
    }
}
