class Socket{
    
    constructor(socket){
        this.io = socket;
        this.online_users = [];
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
            this.online_users = Object.keys(this.io.sockets.sockets);
            // socket.broadcast.emit('user_online',{
            //     socket_id:socket.id
            // });
            // console.log('socket is run',socket.id);
            socket.on('check_onlines',(data)=>{
                if(this.online_users.indexOf(data.uID) != -1){
                    var status = 'online';
                    this.io.sockets.connected[data.uID].emit('show_onlines2',{
                        user_id:socket.id,
                        status:'online'
                    });
                }else
                {
                    var status = 'offline';
                }
                // var status = 'online';
                this.io.sockets.connected[socket.id].emit('show_onlines',{
                    user_id:data.uID,
                    status:status
                });
                
                console.log(data.uID);
            });
            this.socketDisconnect(socket);
        });
    }

    socketDisconnect(socket){
        socket.on('disconnection',(data)=>{

        });
    }
}

module.exports = Socket;
