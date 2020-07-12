let ingredientsInitialData = require('./../data/ingredients');
let beveragesInitialData = require('./../data/beverages');
let ingredients = require('./../Utils/ingredientsUtil');
let beverages = require('./../Utils/beveragesUtil');
let newBeverages = require('./../data/newBeverages');

addingNewBeverages = function () {
    for (let key in newBeverages) {
        console.log(`\nAdding ${newBeverages[key].name} as new beverage to the system`);
        beverages.addNewBeverage(newBeverages[key].name, newBeverages[key].ingredients);
    }
    console.log("\nUpdated List");
    beverages.beverageList.forEach(item => console.log(item.name))
};

module.exports = {

    initialize() {
        // Getting the raw material for the machine
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

        // Updating the display list of the drinks
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

        // A function to update the list of the new beverages,
        // We can use this member as exported in case we want o=to add new beverages form config file
        // Here I am taking as non exported member for hard coding of the file
        addingNewBeverages();
    }
};