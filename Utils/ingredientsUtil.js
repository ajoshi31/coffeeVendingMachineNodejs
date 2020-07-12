let CONSTANTS = require('./../constants');
let ValidationError = require('./../Error/error');

let _validateIngredientEntry = function (name, quantity) {
    if (quantity === undefined) {
        throw new ValidationError("No field: quantity");
    } else if (typeof  quantity !== "number") {
        throw new ValidationError("Quantity should be numeric only");
    }

    if (name === undefined) {
        throw new ValidationError("No field: quantity");
    } else if (typeof  name !== "string") {
        throw new ValidationError("Quantity should be string type only");
    }
};

module.exports = {
    addNewIngredient: function (name, quantity) {

        _validateIngredientEntry(name, quantity);

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

