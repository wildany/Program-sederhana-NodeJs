import net from "net";

const server = net.createServer((client) => {

    console.info("Client Connected");

    client.addListener("data", (data) => {
        console.info('Received Data ' + data.toString());
        client.write('Hello Dany \r\n');
    })
})

server.listen(3000, "localhost");