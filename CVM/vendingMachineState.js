let CONSTANTS = require('./constants');
let ingredients = require('./Utils/ingredientsUtil');
let beverageUtil = require('./Utils/beveragesUtil');

module.exports = {

    refillCVM(item) {

        let itemArray = [];
        if (item !== undefined) {
            itemArray = [{name: item, quantity: CONSTANTS.MAX_QUANTITY_OF_INGREDIENTS}]
        } else {
            itemArray = ingredients.rawItemInventory
        }
        for (let key  in itemArray) {
            try {
                // This function can be made on input however here we can use it as from the initialize value or test cases
                if (itemArray[key].name === 'hot_water') {
                    ingredients.addNewIngredient(itemArray[key].name, CONSTANTS.MAX_WATER_QUANTITY);
                } else {
                    ingredients.addNewIngredient(itemArray[key].name, CONSTANTS.MAX_QUANTITY_OF_INGREDIENTS);

                }
            } catch (err) {
                console.log(err.message)
            }
        }

    },

    fetchingBeverages(item) {
        // check if quantity available for beverages,
        const tempArray = [];
        let flag = true;
        let shortageItem = 'nothing';
        let beverage = beverageUtil.checkIfBeveragesExist(item);

        // check each ingredient availability and reduce the amount if available and throw error if now
        for (let key in beverage.ingredients) {
            let beveragesIngredient = ingredients.checkIfIngredientExist(key);
            if (beveragesIngredient.quantity < beverage.ingredients[key]) {
                console.log(`${item} cannot be made as ${key} quantity is less than the required amount`);
                flag = false;
                shortageItem = key;
                break;
            } else {
                tempArray.push({
                    name: key,
                    quantity: beveragesIngredient.quantity - beverage.ingredients[key]
                })
            }
        }
        if (flag) {
            console.log(`${item} is started being prepared`);
            tempArray.forEach(item => {
                ingredients.updateIngredientValue(item.name, item.quantity)
            });
        }
        return shortageItem;
    },
};