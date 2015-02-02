var chardet = require('chardet');

module.exports = function(path, callback){
    if(!path){
        console.log('usage: chardet-cli filepath')
        callback()
    }
    chardet.detectFile(path, function(error, encoding) {
        console.log('charset: '+encoding)
        callback()
    });
}
