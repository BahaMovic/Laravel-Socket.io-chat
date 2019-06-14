class Socket{
    constructor(socket){
        this.io = socket;
    }

    ioConfig(){
        this.io.use((socket,next)=>{
            socket['id'] = 'user_'+socket.handshake.query.user_id;
            next();
        });
    }

    socketConnect(){
        this.ioConfig();
     
        this.io.on('connection',(socket)=>{
            socket.broadcast.emit('user_online',{
                socket_id:socket.id
            });
            console.log('socket is run',socket.id);
            this.socketDisconnect(socket);
        });
    }

    socketDisconnect(socket){
        socket.on('disconnection',(data)=>{

        });
    }
}

module.exports = Socket;
