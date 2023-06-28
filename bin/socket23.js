async function createSocketServer (httpServer) {
    console.log('create socket server called');
    var path = '/socket44';
    const io = require("socket.io")(httpServer, {
        path: path
    });

    // io.ApiEventBus
    // io.publishAgentUpdate
    // ConnectionHandler(io)
    // registerApiEvents(io)
    return io;
}   

module.exports = createSocketServer;