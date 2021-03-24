let totalPrice;
let cart = null;


init = () => {
    cart = getProductsCart();

    if(cart.length) {
        buildCart(cart);
    } else {
        noProducts();
    }

}

getProductsCart = () => {
    return JSON.parse(localStorage.getItem("cart"));
}

buildCart = (cart) => {
    const cartContainer = document.getElementById("cartContainer");

    cart.forEach(element => {
        let product = document.createElement("div");
        product.className="productContainer";
        let title = document.createElement("span");
        let deleteButton = document.createElement("div");
        deleteButton.innerText = "X";
        deleteButton.addEventListener("click", () => {deleteProduct(element.id)})
        let img = document.createElement("img");

        title.innerText = element.title;
        img.src = element.img;

        product.appendChild(title);
        product.appendChild(deleteButton);
        product.appendChild(img);

        cartContainer.appendChild(product)
    });
}

noProducts = () => {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.innerText = "Your cart is empty";
}

deleteProduct = (id) => {
    const indexToDelete = cart.findIndex(elm => elm.id === id)
    cart.splice(indexToDelete, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

window.addEventListener('load', init);
