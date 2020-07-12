let async = require('async');

let CVM = require('./vendingMachineState');
let ingredientUtil = require('./../Utils/ingredientsUtil');
let inputs = require('./../input/input.json');

let refillCheckItemCounter = {};

// Refill Login as private member
let refillLogic = function (shortageItem) {
    if (shortageItem !== 'nothing') {
        refillCheckItemCounter[shortageItem]++;
    }
    if (refillCheckItemCounter[shortageItem] === 3) {
        refillCheckItemCounter[shortageItem] = 0;
        CVM.refillCVM(shortageItem);
    }
};

module.exports = {
    running() {

        // Taking input as test cases form input file
        for (let i = 0; i < inputs.length; i++) {

            // Refilling the application at starting if anything is empty
            CVM.refillCVM();

            console.info("\nTEST CASE ", i);
            let n = inputs[i].outlet;
            let ingredientArray = inputs[i].peopleFetching;

            // Initializing the counter to zero, we can have better refilling logic based on the sequence and time
            // factor taking into consideration, I have implemented just simple logic for if any item if shows empty
            // state for three times will be refilled
            ingredientUtil.rawItemInventory.forEach(item => {
                refillCheckItemCounter[item.name] = 0;
            });

            // I am assuming all the time coffee is fetching something and in parallel,
            // running n outlet in parallel and then in series for next n slot
            async.forEachLimit(ingredientArray, n, (item, callback) => {
                // check if item is empty more than 2 times fill it
                let shortageItem = CVM.fetchingBeverages(item);
                refillLogic(shortageItem);
                callback();

            }, (err) => {
                if (err) {
                    console.log(err.message);
                    callback(err.message);
                }
            });
        }
    }
};

