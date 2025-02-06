let basket = JSON.parse(localStorage.getItem("data")) || [];
const cartIcon = document.getElementById("cart-amount");
const productCard = document.getElementById('product-cart');
const checkoutButton = document.getElementById('checkout');
const emptyCard = document.getElementById('empty-card');
let cartItems = [
    {
        name: "Fall Limited Edition Sneakers",
        quantity: 0,
        price: 125.00,
        image: ['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg',
            'images/image-product-4.jpg']
    }
];

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined) {
        basket.push({id: selectedItem.id, item: 1})
        search = {id: selectedItem.id, item: 1}
    } else {
        search.item += 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));
    update(selectedItem, search.item);
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined) return;
    else if (search.item === 0) {
        return;
    } else {
        search.item -= 1;
    }
    update(selectedItem, search.item);
    basket = basket.filter((x) => x.item !== 0);
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id, item) => {
    document.getElementById(id).innerHTML = item;
    calculation();
};

let calculation = () => {
    let count = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    if (count) {
        cartIcon.style.display = "block";
        cartIcon.innerHTML = count;
    } else {
        cartIcon.style.display = "none";
    }
    cartItems[0].quantity = count;
    document.getElementById("count").innerHTML = count;
    displayCartItems();
};

function changeImage(element, imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
    setSelectedImage(element);
}

function changePopupImage(element, imageSrc) {
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('mainImage').src = imageSrc;
    setSelectedImage(element);
}

function setSelectedImage(element) {
    let thumbnails = document.getElementsByClassName('thumbnail');
    for (const thumbnail of thumbnails) {
        thumbnail.classList.remove('selected');
    }
    element.classList.add('selected');
}

function openPopup(imageSrc) {
    const desktopResolution = window.innerWidth >= 840;
    if (desktopResolution) {
        document.getElementById('popupImage').src = imageSrc;
        document.getElementById('popup').style.display = 'flex';
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function toggleCartPopup() {
    const popup = document.getElementById('cartPopup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.alignItems = 'center'
        popup.style.gap = '0.5rem';
        displayCartItems();
    } else {
        popup.style.display = 'none';
    }
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const productImage = document.getElementById('product-image-cart');
    cartItemsContainer.innerHTML = '';
    productImage.src = '';
    if (cartItems[0].quantity > 0) {
        productCard.style.display = 'flex';
        checkoutButton.style.display = 'block';
        emptyCard.style.display = 'none';
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<p>${item.name}</p> <div>$${item.price} x ${item.quantity} <span>$${item.price * item.quantity}</span></div>`
            cartItemsContainer.appendChild(itemElement);
            productImage.src = `${item.image[0]}`;
        });
    } else {
        showEmpty();
    }
}

function showEmpty() {
    productCard.style.display = 'none';
    checkoutButton.style.display = 'none';
    emptyCard.style.display = 'block';
}

function emptyCart() {
    cartItems[0].quantity = 0;
    basket = [];
    localStorage.setItem("data", JSON.stringify(basket));
    displayCartItems();
    cartIcon.style.display = 'none';
    document.getElementById('count').innerHTML = '0';
}

function nextImage(id) {
    const [images, index] = getImagesAndIndex(id);
    if (index !== -1 && index < images.length - 1) {
        document.getElementById('popupImage').src = images[index + 1];
        document.getElementById('mainImage').src = images[index + 1];
    }
}

function previousImage(id) {
    const [images, index] = getImagesAndIndex(id);
    if (index > 0) {
        document.getElementById('popupImage').src = images[index - 1];
        document.getElementById('mainImage').src = images[index - 1];
    }
}

function getImagesAndIndex(id) {
    const images = cartItems[0].image;
    const imageActual = document.getElementById(id).src;
    const index = images.findIndex(x => imageActual.includes(x));
    return [images, index];
}

calculation();