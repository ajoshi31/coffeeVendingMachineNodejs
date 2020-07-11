let initializeCFM = require('./initializeApplication');

let SYSTEM_START;

if (process.argv.slice(2)[0] && process.argv.slice(2)[0].toUpperCase() === "START") {
    console.log("Starting the awesome coffee vending machine");
    SYSTEM_START = true;
}

if (SYSTEM_START) {
    initializeCFM.initialize();
} else {
    console.log("System is not started please start the system using command: npm start")
}

