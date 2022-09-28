const EventEmitter = require("events")
const eventEmitter = new EventEmitter()
eventEmitter.on("messageLogged",function(){
    console.log("message logged is triggered")
})
eventEmitter.emit("messageLogged")