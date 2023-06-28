const invoke1 = () => console.log('1 invoked');
const invoke2 = () => console.log('2 invoked');
const invoke3 = () => console.log('3 invoked');

const doStuff1 = () => {
    console.log('conn called');
    invoke1(); invoke2(); invoke3();
}
async function handler (io) {
    io.on('connection', doStuff1);
}
  
module.exports = handler;