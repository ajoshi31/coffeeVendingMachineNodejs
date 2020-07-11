let ingredientsInitialData = require('./data/ingredients');
let beveragesInitialData = require('./data/beverages');
let ingredients = require('./Utils/ingredientsUtil');
let beverages = require('./Utils/beveragesUtil');
let newBeverages = require('./data/newBeverages');

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

        this.addingNewBeverages();

    },

    addingNewBeverages() {
        for (let key in newBeverages) {
            console.log(`\nAdding ${newBeverages[key].name} as new beverage to the system`);
            beverages.addNewBeverage(newBeverages[key].name, newBeverages[key].ingredients);
        }
        console.log("\nUpdated List");
        beverages.beverageList.forEach(item => console.log(item.name))
    }
};