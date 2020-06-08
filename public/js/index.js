var socket = io();

        socket.on('connect',function () {
            console.log('Connected to server');

            socket.emit('createMessage',{
                from:'jen',
                text:'This is jenny'
            });
       })

        socket.on('disconnect',function () {
            console.log('Server Disconnected')
        })
        socket.on('newMessage', function (message) {
            console.log('New message',message);
        })