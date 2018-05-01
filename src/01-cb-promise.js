const fs = require('fs')

// 第一种
fs.readFile('../package.json',(err, data) => {
    if (err) return console.log(err)

    data = JSON.parse(data)
    console.log(data.name)
})

// 第二种
function readFileAsync () {
    return new Promise((resolve, reject) => {
        fs.readFile('../package.json',(err, data) => {
            if(err) reject(err)
            else resolve(data)
        })
    })
}

readFileAsync().then(data => {
    let msg = JSON.parse(data)
    console.log('promise:', msg.name)
}).catch(err => {
    console.log(err)
})

// 第三种
const util = require('util')
util.promisify(fs.readFile)('../package.json')
.then(JSON.parse)
.then(data => {
    console.log('util:', data.name)
}).catch(err => {
    console.log(err)
})