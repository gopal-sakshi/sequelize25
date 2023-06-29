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