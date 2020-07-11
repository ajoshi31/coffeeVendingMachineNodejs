class Ingredients {

    constructor(name) {
        _validateName(name);
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        _validateName(newName);
        this._name = newName;
    }
}

let _validateName = function (name) {
    if (!name) {
        throw new Error("Name fields undefined!");
    } else if (typeof name !== "string") {
        throw new Error("name field can only be string");
    }
};

module.exports = Ingredients;


//#####################################/*#####################################/*##################################### //

class RawItemsInventory {

    constructor(ingredient, quantity) {
        this._name = ingredient;
        this._quantity = quantity;
    }

    get getIngredientDetails() {
        return {
            "item": this._name,
            "quantity": this._quantity
        }
    }

}

module.exports = RawItemsInventory;

//#####################################/*#####################################/*##################################### //

function vendingMachine(snack, cash) {
    const snacks = [
        {name: 'Espresso', price: 1},
        {name: 'Cappuccino', price: 2.50},
        {name: 'Chocolate', price: 2},
        {name: 'Potato', price: 3.50}
    ];

    const selected_snack = snacks.find(item => item.name === snack);

    if (selected_snack) {
        if (selected_snack.price === cash) {
            return `Your ${snack} have been served`;
        }
        else {
            if (selected_snack.price > cash) {
                return `Insufficient funds. Please insert more cash.`;
            }
            else {
                return `Your ${snack} have been served. Here is your $${cash - selected_snack.price} change.`;
            }
        }
    }

    else {
        return `${snack} does not exist. Please try again`
    }
};


//#########################################################################################################

var Base = function (props) {
    const _props = props;
    this.getProps = () => _props;
    const privateMethod = () => "do internal stuff";
    return this
};

var Child = function (props) {
    const parent = Base(props);
    this.getMessage = () => `Message is ${parent.getProps()}`;
    return this
};

let childObject = Child("Secret Message");
console.log(childObject.getMessage());   // logs "Message is Secret Message"
console.log(childObject.getProps());