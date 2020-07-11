let ingredientsInitialData = require('./data/ingredients');
let beveragesInitialData = require('./data/beverages');
let ingredients = require('./Utils/ingredientsUtil');
let beverages = require('./Utils/beveragesUtil');

module.exports = {

    initialize() {

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

        console.log("\nRAW MATERIAL INVENTORY LIST -------------------- ");
        console.log(ingredients.rawItemInventory);

        console.log("\nBEVERAGES DISPLAY LIST ----------------------- ");
        beverages.beverageList.forEach(item => console.log(item.name));

        // Lets add some new beverage
        console.log("\nAdding espresso as new beverage to the system");
        beverages.addNewBeverage("espresso", {
            "hot_water": 200,
            "hot_milk": 40,
            "raw_sugar": 10
        });
        console.log("\nAdded the espresso to the list");
        beverages.beverageList.forEach(item => console.log(item.name))

    },
};