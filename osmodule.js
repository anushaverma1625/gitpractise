const os = require('os');
//hamne yaha pr ./ nhi lagaya lekin jab Second.js file ko impory kar rahe to use kiya tha aisa isliye because os is a built in module or second.js folder me tha isliye jab hame kabhi built in module ko import karna hota hai too direct name likhte hai

console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.platform())
console.log(os.release())
console.log(os.uptime())
console.log(os.type())