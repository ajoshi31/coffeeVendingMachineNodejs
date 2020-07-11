let CONSTANTS = require('./../constants');

module.exports = {
    addNewIngredient(name, quantity) {
        if (quantity === undefined || typeof  quantity !== "number") {
            throw new Error("Quantity fields cannot be undefined and should be numeric only");
        }
        if (name === undefined || typeof  name !== "string") {
            throw new Error("Name fields cannot be undefined and should be String Only!");
        }

        if (name === 'hot_water') {
            quantity = (quantity > CONSTANTS.MAX_WATER_QUANTITY ? CONSTANTS.MAX_WATER_QUANTITY : quantity);
        } else {
            quantity = (quantity > CONSTANTS.MAX_QUANTITY_OF_INGREDIENTS ? CONSTANTS.MAX_QUANTITY_OF_INGREDIENTS : quantity);
        }

        if (this.checkIfIngredientExist(name) !== false) {
            this.updateIngredientValue(name, quantity)

        } else {
            // Add new entry
            this.rawItemInventory.push({name, quantity});
        }
    },

    reset() {
        this.rawItemInventory = [];
    },

    checkIfIngredientExist(name) {
        const selectedItem = this.rawItemInventory.find(item => item.name === name);
        return (!selectedItem) ? false : selectedItem
    },

    updateIngredientValue(name, quantity) {
        for (let key in this.rawItemInventory) {
            if (this.rawItemInventory[key].name === name) {
                this.rawItemInventory[key].quantity = quantity;
            }
        }
    },

    rawItemInventory: []
};