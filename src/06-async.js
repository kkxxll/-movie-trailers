const fs = require('fs')

// 第一阶段 回调函数
function readFile (cb) {
    fs.readFile('../package.json', (err, data) => {
        if (err) return cb(err)
        cb(null, data)
    })

}
readFile((err, data) => {
    if (!err) {
        data = JSON.parse(data)
        console.log(data.name)
    }
})

// 第二阶段 Promise

function readFileAsync () {
    return new Promise((resolve, reject) => {
        fs.readFile('../package.json',(err, data) => {
            if(err) reject(err)
            else resolve(data)
        })
    })
}

readFileAsync().then(data => {
    data = JSON.parse(data)
    console.log('promise:', data.name)
}).catch(err => {
    console.log(err)
})

// 第三阶段 借助co库
const co = require('co')
const util = require('util')

co(function *() {
    let data = yield util.promisify(fs.readFile)('../package.json')

    data = JSON.parse(data)

    console.log('co:', data.name)
})

// 第四阶段
const readAsync = util.promisify(fs.readFile)

async function init() {
    let data = await readAsync('../package-lock.json')
    data = JSON.parse(data)

    console.log('async:', data.name)
}

init()