const express = require('express')
const app = express()
const path = require('node:path')

console.log("hello from node");

app.get('/', function (req, res) {  // middleware?
 // res.send('<h2>Hello World from Express<h2>')

     res.sendFile(path.join(__dirname, 'index.html'));


})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));