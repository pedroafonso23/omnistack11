const crypto = require('crypto')

module.exports = function generaUniqueId() {
    return crypto.randomBytes(4).toString('HEX')
}