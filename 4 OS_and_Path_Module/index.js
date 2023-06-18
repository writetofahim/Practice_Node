// Operating System (OS)
const {userInfo, totalmem, freemem}=require('os')
console.log(userInfo())
console.log(freemem())
console.log(totalmem())

// Path
const path = require('path')
console.log(path)

// console.log(__dirname)

// const extName = path.extname('index.html')

const joinPath = path.join(__dirname + '/views')
console.log(joinPath)
const joinBackPath = path.join(__dirname + '/../views')
console.log(joinBackPath)