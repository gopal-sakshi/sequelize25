const redis = require('redis');
const ConnectionHandler = require('./connectionHandler');
const blah = require('../controllers/tenantDbController');








/***************** MIddleWares ************************/
const serverMiddleware23 = async (socket, next) => {
    console.log('new connection about to start --> ', socket.id);
    var clientId = null, agentId = null; socketId = socket.id;
    socket.handshake.query.type == 'client22' ? 
                            clientId = socket.handshake.query.email : 
                            agentId = socket.handshake.query.email;
    await blah.createEntry(socket.id, clientId, agentId);
    next();
}

const giligiliga = async (socket, next) => {
    // console.log(socket.request.url);
    // console.log(socket.request.headers);
    if(socket.request.headers.project23) { next(); }

    // it seems you cant throw an error here... something transport level errors
    // else throw Error('provide project23 headers ra idiote')
    else next(new Error('provide project23 headers ra idiote'));
}
/*******************************************************/







/******************** Utility Methods ****************/
function utilityMethods(io) { 
    console.log('clients count1 ====> ', io.engine.clientsCount);
    console.log('clients count2 ====> ', io.of('/').sockets.size);
}
/*****************************************************/


async function createSocketServer (httpServer) {
    console.log('ssss000');
    const io = require("socket.io")(httpServer);

    /**************************** MIDDLEWARES *******************************/
    // // we are having two middlewares on serverInstance
    io.use(serverMiddleware23);
    // io.use(giligiliga);
    /***********************************************************************/

    /******************** REDIS ADAPTER ***********************/
    const createAdapter = require('@socket.io/redis-adapter');
    const pubClient = redis.createClient({ url: "redis://localhost:6379" });
    const subClient = pubClient.duplicate();
    io.adapter(createAdapter(pubClient, subClient));
    /***********************************************************/

    // ConnectionHandler(io);
    utilityMethods(io);
    return io;
}   

module.exports = createSocketServer;