 //  cart
 let cartIcon = document.querySelector("#cart-icon")
 let cart = document.querySelector(".cart")
 let closeCart = document.querySelector("#close-cart")
//  Open Cart
 cartIcon.onclick = () => {
    cart.classList.add("active");
 };
 //  Close Cart
 closeCart.onclick = () => {
    cart.classList.remove("active");
 };


 //  Cart Working JS
 if (document.readyState == "loading"){
     document.addEventListener("DOMContenloadedt", ready);
 }
 else {
    ready();
 }
 
 //  Making Function
 function ready() {
   //  Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click" , removeCartItem);
    }     
 }

 //  Remove Items From Cart
 function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
 }

 // Updeta Total
 function updatetotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('car-price')
        var quantityElement = cartBox.getElementsByClassName()
    }
 }

