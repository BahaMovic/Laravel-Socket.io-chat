const http = require('http');
const express = require('express');
const socket = require('socket.io');
const SocketConnect = require('./socket');
class Server{
    constructor(){
        this.port = 5000;
        this.host = 'localhost';

        this.app = express()
        this.http = http.Server(this.app);
        this.socket = socket(this.http);

    }

    runServer(){
        new SocketConnect(this.socket).socketConnect();
        this.http.listen(this.port,this.host,()=>{
            console.log("Hello world we now run node js host");
        });
    }
}

var serv = new Server();
serv.runServer();