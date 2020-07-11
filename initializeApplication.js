let ingredientsInitialData = require('./data/ingredients');
let beveragesInitialData = require('./data/beverages');
let ingredients = require('./ingredientsUtil');
let beverages = require('./beveragesUtil');

module.exports = {

    initialize() {
        // Initializing inventory with the input
        for (let key  in ingredientsInitialData) {
            if (ingredientsInitialData.hasOwnProperty(key)) {
                try {
                    // This function can be made on input however here we can use it as from the initialize value or test cases
                    ingredients.addNewIngredient(key, ingredientsInitialData[key]);
                } catch (err) {
                    console.log(err.message)
                }
            }
        }

        // Initialise Beverages List
        for (let key  in beveragesInitialData) {
            if (beveragesInitialData.hasOwnProperty(key)) {
                try {
                    // This function can be made on input however here we can use it as from the initialize value or test cases
                    beverages.addNewBeverage(key, beveragesInitialData[key]);
                } catch (err) {
                    console.log(err.message)
                }
            }
        }

        console.log(ingredients.rawItemInventory);
        console.log(beverages.beverageList);
    },
};