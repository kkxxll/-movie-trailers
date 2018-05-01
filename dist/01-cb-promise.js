'use strict';

var fs = require('fs');

// 第一种
fs.readFile('../package.json', function (err, data) {
    if (err) return console.log(err);

    data = JSON.parse(data);
    console.log(data.name);
});

// 第二种
function readFileAsync() {
    return new Promise(function (resolve, reject) {
        fs.readFile('../package.json', function (err, data) {
            if (err) reject(err);else resolve(data);
        });
    });
}

readFileAsync().then(function (data) {
    var msg = JSON.parse(data);
    console.log('promise:', msg.name);
}).catch(function (err) {
    console.log(err);
});

// 第三种
var util = require('util');
util.promisify(fs.readFile)('../package.json').then(JSON.parse).then(function (data) {
    console.log('util:', data.name);
}).catch(function (err) {
    console.log(err);
});
//# sourceMappingURL=01-cb-promise.js.map