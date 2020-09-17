const net = require('net')

const handleConnection = socket => {
    console.log('Alguém se conectou.')
}

const server = net.createServer(handleConnection)

server.listen(3000, '127.0.0.1')