const redis = require('redis');
const ConnectionHandler = require('./connectionHandler');
async function createSocketServer (httpServer) {
    console.log('create socket server called');
    var path = '/socket44';
    const io = require("socket.io")(httpServer, {
        path: path
    });

    /******************** REDIS ADAPTER ***********************/
    const createAdapter = require('@socket.io/redis-adapter');
    const pubClient = redis.createClient({ url: "redis://localhost:6379" });
    const subClient = pubClient.duplicate();
    io.adapter(createAdapter(pubClient, subClient));
    /***********************************************************/


    ConnectionHandler(io);

    return io;
}   

module.exports = createSocketServer;