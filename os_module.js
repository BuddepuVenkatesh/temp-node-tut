const os = require('os');

// user info
const user  = os.userInfo()
console.log(user);


// methods returns the system uptime in secs
console.log(`System Uptime in secs : ${os.uptime()}`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS);