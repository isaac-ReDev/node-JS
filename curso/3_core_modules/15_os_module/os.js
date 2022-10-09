const os = require('os')

const myCpus = os.cpus()
const myFreemem = os.freemem()
const myhomeDir = os.homedir()
const myType = os.type()

const showMessage = (msg) => {
    console.log(msg)
}


// showMessage(myCpus)
showMessage(myFreemem)
// showMessage(myhomeDir)
// showMessage(myType)
