// Переменные для хранения данных
let products = [];
let cart = [];

// Загрузка данных из JSON-файла
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        displayProducts();
    });

// Функция для отображения товаров на странице
function displayProducts() {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price} руб.</p>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Функция для добавления товара в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    displayCart();
}

// Функция для отображения корзины
function displayCart() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} (x${item.quantity}) - ${item.price * item.quantity} руб.</span>
            <button onclick="removeFromCart(${item.id})">Удалить</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('total-price').textContent = totalPrice;
}

// Функция для удаления товара из корзины
function removeFromCart(productId) {
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem.quantity > 1) {
        cartItem.quantity--;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }

    displayCart();
}

// Загрузка данных корзины из Local Storage
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        displayCart();
    }
}

// Сохранение данных корзины в Local Storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Добавление товара в корзину с сохранением в Local Storage
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    displayCart();
    saveCartToLocalStorage();  // Сохраняем корзину
}

// Удаление товара из корзины с сохранением изменений в Local Storage
function removeFromCart(productId) {
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem.quantity > 1) {
        cartItem.quantity--;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }

    displayCart();
    saveCartToLocalStorage();  // Сохраняем корзину
}

// При загрузке страницы загружаем данные из Local Storage
window.onload = () => {
    loadCartFromLocalStorage();
};
