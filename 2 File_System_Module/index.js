const fs = require('fs')
// console.log(fs)

// fs.writeFile('demo.txt','Hello',(err)=>{
//     !err? 
//     console.log('success')
//     : 
//     console.log(err)
// })

// fs.appendFile('demo.txt',' I am Fahim',(err)=>{
//     err?console.log(err):console.log('success')
// })

fs.readFile('demo.txt','utf-8',(err,data)=>{
    console.log(err)
    err? console.log(err):console.log(data)
})