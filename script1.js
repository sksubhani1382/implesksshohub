// Load cart count on all pages
window.onload = () => {
    updateCartCount();
    if (document.getElementById("cartItems")) {
        displayCart();
    }
};

// Add item to cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart!");
}

// Update cart count in navbar
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartCount").innerText = cart.length;
}

// Display cart items in cart.html
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cartItems");
    let total = 0;
    container.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;
        container.innerHTML += `
            <p>${item.name} - ${item.price} Rupees
            <button onclick="removeItem(${index})">Remove</button></p>
        `;
    });

    document.getElementById("totalCost").innerText = total;
}

// Remove an item from cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}
