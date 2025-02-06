# Frontend Mentor - E-commerce product page

This is a solution to
the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![Cart empty](E-commerce_product_page_cart_desktop.png)
###### Cart empty (desktop)

![Cart](E-commerce_product_page_desktop.png)
###### Cart with item(desktop)

![Mobile](E-commerce_product_page_mobile.png)
###### Mobile

### Links

- Solution URL: [Ecommerce Product Page](https://github.com/L-ux-es/Ecommerce-Product-Page)
- Live Site URL: [Frontend Mentor | Ecommerce Product Page solution](https://l-ux-es.github.io/Ecommerce-Product-Page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

```html
       <div id="popup" class="popup">
            <div class="product-images-container popup-content">
                <button class="close-btn" onclick="closePopup()">X</button>
                <img id="popupImage" class="principal-image" src="" alt="Product in pop-up window">
                <button class="left-control" onclick="previousImage('popupImage')" aria-label="Previous image">
                    <img src="images/icon-previous.svg" alt="<">
                </button>
                <button class="right-control" onclick="nextImage('popupImage')" aria-label="Next image">
                    <img src="images/icon-next.svg" alt=">">
                </button>
                <div class="carrousel-product-images">
                    <button onclick=changePopupImage(this.firstElementChild,'images/image-product-1.jpg')>
                        <img class="thumbnail"
                             src="images/image-product-1-thumbnail.jpg"
                             alt="Fall Limited Sneakers miniature 1">
                    </button>
                    <button onclick=changePopupImage(this.firstElementChild,'images/image-product-2.jpg')>
                        <img class="thumbnail"
                             src="images/image-product-2-thumbnail.jpg"
                             alt="Fall Limited Sneakers miniature 2">
                    </button>
                    <button onclick=changePopupImage(this.firstElementChild,'images/image-product-3.jpg')>
                        <img class="thumbnail"
                             src="images/image-product-3-thumbnail.jpg"
                             alt="Fall Limited Sneakers miniature 3">
                    </button>
                    <button onclick=changePopupImage(this.firstElementChild,'images/image-product-4.jpg')>
                        <img class="thumbnail"
                             src="images/image-product-4-thumbnail.jpg"
                             alt="Fall Limited Sneakers miniature 4">
                    </button>
                </div>
            </div>
        </div>
```

```css
.popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
}
```

## Author

- GitHub - [L-ux-es](https://github.com/L-ux-es)
- Frontend Mentor - [@L-ux-es](https://www.frontendmentor.io/profile/L-ux-es)
