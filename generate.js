var beverage = [
    'green_tea',
    'espresso',
    'hot_coffee',
    'black_tea',
    'hot_tea'
]


for (let i = 0; i < 100; i++) {
    let number = Math.floor((Math.random() * 4) + 1);
    if (number < 5) {
        console.log(`"${beverage[number]}",`);
    }
}