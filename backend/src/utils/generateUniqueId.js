const crypto = require('crypto');

module.exports = function generateUniqueI() {
    return crypto.randomBytes(4).toString('HEX');
}