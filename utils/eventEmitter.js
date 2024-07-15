// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {}
// const eventEmitter = new MyEmitter();

// module.exports = eventEmitter;
const EventEmitter = require('events');
const orderPlaced = new EventEmitter();
const bookAdded = new EventEmitter();

module.exports = { orderPlaced, bookAdded };