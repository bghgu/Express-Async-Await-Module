const crypto = require('crypto');
const hashKey = require('../../config/hashKey').key;

module.exports = {
    //암호화
    encoding : function(password) {
        var cipher = crypto.createCipher('aes192', hashKey);
        var encoded_result = cipher.update(password, 'utf-8', 'base64');
        encoded_result += cipher.final('base64');
        return encoded_result;
    },
    //복호화
    decoding : function(password) {
        var decipher = crypto.createDecipher('aes192', hashKey);
        var decoded_result = decipher.update(password, 'base64', 'utf-8');
        decoded_result += decipher.final('utf-8');
        return decoded_result;
    }
};
