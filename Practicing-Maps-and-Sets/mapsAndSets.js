let fruitInventory = new Map();

fruitInventory.set('apple', 10) 
fruitInventory.set('banana', 20)
fruitInventory.set('orange', 30)

fruitInventory.set('apple', 15)

console.log(fruitInventory)

bananaInventory = fruitInventory.get('banana')

console.log(bananaInventory)

let uniqueColors = new Set(['red', 'blue', 'green'])

uniqueColors.add('yellow')

console.log(uniqueColors)

let hasBlue = uniqueColors.has('blue')

console.log(hasBlue)