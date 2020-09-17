const net = require('net')

const readline = require('readline')

const client = new net.Socket()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

client.connect(3000, '127.0.0.1', () => {
    console.log('Conexão bem sucedida')

    rl.addListener('line', line => {
        const reverseLine = line.split('').reverse().join('')
        client.write(reverseLine)
    })

})

