const http =require('http');
const express = require('express');
const path = require('path');

const app = express();


const publicPath = path.join(__dirname, '/');
app.use(express.static(publicPath));

app.get('/',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'))
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(publicPath,'#'))
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(publicPath,'#'))
});

app.get('/',(req,res)=>{
    res.status(404).sendFile(path.join(publicPath,'#'))
});

const server = http.createServer(app);


const port =5000;
server.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})

