initializeCart();
function initializeCart() {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }

  
function addItem(item) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function displayCart(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
  }
  
  const displayCartButton = document.getElementById('displayCartButton');
  displayCartButton.addEventListener('click', function(event) {
    event.preventDefault();
    displayCart();
  });
  
const addItemForm= document.getElementById('addItemForm');
addItemForm.addEventListener
    ('submit', function(event){
        event.preventDefault();
        const itemNameElm = (document.getElementById('itemName')).value;
        const itemPrice = (document.getElementById('itemPrice')).value;
        const itemId = new Date().getTime();
        const item = { id:itemId, name:itemNameElm, price: itemPrice };
        addItem(item); 
    });
    
initializeCart();