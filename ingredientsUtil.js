let CONSTANTS = require('./constants');

module.exports = {
    addNewIngredient(name, quantity) {
        if (quantity === undefined || typeof  quantity !== "number") {
            throw new Error("Quantity fields cannot be undefined and should be numeric only");
        }
        if (name === undefined || typeof  name !== "string") {
            throw new Error("Name fields cannot be undefined and should be String Only!");
        }
        quantity = (quantity > CONSTANTS.MAX_QUANTITY_OF_INGREDIENTS ? CONSTANTS.MAX_QUANTITY_OF_INGREDIENTS : quantity);
        this.rawItemInventory.push({name, quantity});
    },

    reset() {
        this.rawItemInventory = [];
    },

    checkIfIngredientExist(name) {
        const selectedItem = this.rawItemInventory.find(item => item.name === name);
        return (!selectedItem) ? false : selectedItem
    },

    rawItemInventory: []
};