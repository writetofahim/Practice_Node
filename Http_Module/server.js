const http = require('http')
// console.log(http)

//create a server object:
const myServer = http.createServer(function (req, res) {
    res.write('<h1>Hello World!</h1>'); //write a response to the client
    res.end(); //end the response
  })

myServer.listen(3000,()=>{
    console.log('server is running')
})