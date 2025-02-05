let basket = JSON.parse(localStorage.getItem("data")) || [];

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
    let cartIcon = document.getElementById("cart-amount");
    let count = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    if (count) {
        cartIcon.style.display = "block";
        cartIcon.innerHTML = count;
    } else {
        cartIcon.style.display = "none";
    }
    document.getElementById("count").innerHTML = count;
};

function changeImage(element, imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
    let thumbnails = document.getElementsByClassName('thumbnail');
    for (const thumbnail of thumbnails) {
        thumbnail.classList.remove('selected');
    }
    element.classList.add('selected');
}

calculation();