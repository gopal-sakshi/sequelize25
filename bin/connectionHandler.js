const socketMw = ([event44, ...args], next) => {
    // wholeObj = 3 elements of array = eventName, args, callbackFn
    // we destructured the eventName into event44 property
    if(event44 == "greet24") {
        // somehow NOT WORKINGGGGGGGGGGGGGGGGGGGGGGG
        // okay, it seems, socketMiddleware wont immediately throw error to client
        // it throws ERROR ---> so, we can catch & process it in socket.on('error') 
        // and decide accordingly;
        // next(new Error('that event is not allowed be'));         // just next() didnt work
        return next(new Error('notAllowed23'));     // it seems, we need return()
    }
    else { next() } ;
}

async function handler (io) {
    io.on('connection', (socket) => {

        socket.use(socketMw);

        socket.on("footballEvents24", (data) => {
            // console.log('listening footballEvents', data);
            socket.emit("footballEvents24", JSON.stringify(data));
        });

        socket.on("error", (err) => {
            if (err && err.message === "notAllowed23") {
                console.log('hmmmm, chuddaaaaaaaaaam');
                socket.disconnect();
            }
        })
    });
}
  
module.exports = handler;