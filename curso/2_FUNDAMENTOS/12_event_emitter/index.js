// const EventEmitter = require('events');
// const eventEmitter = EventEmitter();

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();




eventEmitter.on("start", () => {
    console.log("Durante");
});

eventEmitter.emit('start');
console.log("Antes");

eventEmitter.on("bilola", () => {
    console.log("Bilolas");
})

// eventEmitter.emit("start");

console.log("depois");

eventEmitter.emit("bilola")