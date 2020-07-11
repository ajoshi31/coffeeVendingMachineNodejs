let ingredientsUtil = require('./ingredientsUtil');

module.exports = {
    addNewBeverage(name, ingredientObject) {
        // Check if the ingredients exist and if not send a request to add and add raw ingredient list as empty
        for (let key in ingredientObject) {
            if (ingredientObject.hasOwnProperty(key)) {
                if (!ingredientsUtil.checkIfIngredientExist(key)) {
                    // adding the ingredient with initial value of 0 .. User can add it later
                    console.log(`The inventory does not have ${key} to make ${name}, so adding block for it 
                    to the inventory with zero quantity`);
                    ingredientsUtil.addNewIngredient(key, 0)
                }
            }
        }
        this.beverageList.push({name, ingredients: ingredientObject});
    },
    beverageList: []
};