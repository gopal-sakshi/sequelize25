const socketMw = ([event44, ...args], next) => {
    if(event44 == "greet24") { return next(new Error('notAllowed23')); }
    else next();
}

async function handler (io) {
    io.on('connection', (socket) => {

        /******** SOCKET MIDDLEWARE *********************/
        socket.use(socketMw);
        /************************************************/

        socket.on("footballEvents24", (data) => {
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