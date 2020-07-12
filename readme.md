# Coffee Vending Machine - Node.js

This is node.js coffee vending machine sample code, basic version 

## Installation

```bash
npm install
npm start
```

## Testing
The test is integrated as the input part which is generated for 200 types of vending cases and there are two test cases
To add custom test add new array object in 'Input/input.json'

```$xslt
  {
     "outlet": 3,
     "peopleFetching": [
       "hot_tea",
       "black_tea",
       "THIS WAS FAKE ENTRY",
       null,
       1,
       "diet_tea",
       "espresso",
       "diet_tea",
       "hot_tea",
       "hot_tea",
       "espresso",
       "hot_coffee"
     ]
   }
```