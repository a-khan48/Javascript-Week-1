
// Add Granny Smith's Apples
let shoppingCart = document.querySelector('#list').children
shoppingCart[1].innerhtml = "Granny Smith apples";

// Remove Oat Milk
document.getElementById('list').lastElementChild.remove();

// Add item Kombucha
let kombucha = document.createElement('li')
kombucha.innerHTML = 'Kombucha'
document.getElementById('list').appendChild(kombucha)

// Clear the list and add additional items

shoppingCart = document.getElementById('list')
shoppingCart.innerHTML = "";

const newList = ["protein bars", "almonds", "peanut butter"]

for (let item of newList) {
    const listItem = document.createElement('li')
    listItem.innerHTML = item;
    list.appendChild(listItem);
}

// Adds "important" class to almonds

const almonds = document.querySelector('ul').children[1];

almonds.className = "important"



