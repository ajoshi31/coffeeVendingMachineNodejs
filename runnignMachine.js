let async = require('async');

let CVM = require('./vendingMachineState');
let ingredientUtil = require('./Utils/ingredientsUtil');
let inputs = require('./input.json');

let refillCheckItemCounter = {};

module.exports = {
    running() {
        for (let i = 0; i < inputs.length; i++) {
            CVM.refillCVM();
            console.info("\nTEST CASE ", i);
            let n = inputs[i].outlet;
            let ingredientArray = inputs[i].peopleFetching;

            ingredientUtil.rawItemInventory.forEach(item => {
                refillCheckItemCounter[item.name] = 0;
            });

            //I am assuming all the time coffee is fetching something and in parallel
            async.forEachLimit(ingredientArray, n, (item, callback) => {
                // check if item is empty more than 2 times fill it
                let shortageItem = CVM.fetchingBeverages(item);
                this.refillLogic(shortageItem);
                callback();

            }, (err) => {
                if (err) {
                    console.log(err.message)
                }
            });
        }
    },

    refillLogic(shortageItem) {
        if (shortageItem !== 'nothing') {
            refillCheckItemCounter[shortageItem]++;
        }
        if (refillCheckItemCounter[shortageItem] === 3) {
            refillCheckItemCounter[shortageItem] = 0;
            CVM.refillCVM(shortageItem);
        }
    },

};