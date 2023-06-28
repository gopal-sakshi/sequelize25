const redis = require('redis');
const ConnectionHandler = require('./connectionHandler');

async function createSocketServer (httpServer) {
    console.log('create socket server called');
    
    // // NOT WORKING YET
    // const io = require("socket.io")(httpServer, { path: '/socket44' });
    const io = require("socket.io")(httpServer);

    // MOVED TO CONNECTION_HANDLER
    // io.on('connection', (socket) => {
    //     console.log('socket is ready for connection');
    // });
    // io.on('error', (err) => { console.log(err)});

    /******************** REDIS ADAPTER ***********************/
    // const createAdapter = require('@socket.io/redis-adapter');
    // const pubClient = redis.createClient({ url: "redis://localhost:6379" });
    // const subClient = pubClient.duplicate();
    // io.adapter(createAdapter(pubClient, subClient));
    /***********************************************************/


    ConnectionHandler(io);

    return io;
}   

module.exports = createSocketServer;