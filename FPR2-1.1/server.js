const net = require('net')

const handleConnection = socket => {
    console.log('Alguém se conectou.')

    socket.on('data', data => {
        console.log(data.toString())
    })
}

const server = net.createServer(handleConnection)

server.listen(3000, '127.0.0.1')