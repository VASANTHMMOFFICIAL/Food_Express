// Main JavaScript for E-commerce Website

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load navbar and footer
    loadNavbar();
    loadFooter();
    
    // Initialize cart count
    updateCartCount();
    
    // Load featured products on home page
    if (document.querySelector('#featured-products')) {
        loadFeaturedProducts();
    }
    
    // Setup add to cart buttons
    setupAddToCart();
});

// Load Navbar with Bootstrap
function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
                <div class="container">
                    <a class="navbar-brand fw-bold text-primary" href="index.html">
                        Food<span class="text-secondary">Express</span>
                    </a>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="snacks.html">Snacks</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="food.html">Food Items</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="pizza.html">Pizza</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="fruits.html">Fruits</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="maps.html">Store Locator</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contact</a>
                            </li>
                        </ul>
                        
                        <div class="d-flex align-items-center">
                            <a href="cart.html" class="position-relative me-3">
                                <i class="fas fa-shopping-cart fs-5"></i>
                                <span class="cart-count position-absolute" id="cart-count">0</span>
                            </a>
                            <a href="login.html" class="btn btn-outline-primary">
                                <i class="fas fa-user me-2"></i>Login
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}

// Load Footer with Bootstrap
function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="footer py-5">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-3 col-md-6">
                            <h3>FoodExpress</h3>
                            <p class="mb-3">Your one-stop shop for fresh groceries, snacks, and delicious meals delivered to your door.</p>
                            <div class="d-flex gap-2">
                                <a href="#" class="btn btn-sm btn-outline-light rounded-circle"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="btn btn-sm btn-outline-light rounded-circle"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="btn btn-sm btn-outline-light rounded-circle"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="btn btn-sm btn-outline-light rounded-circle"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        
                        <div class="col-lg-3 col-md-6">
                            <h3>Quick Links</h3>
                            <ul class="footer-links">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="snacks.html">Snacks</a></li>
                                <li><a href="food.html">Food Items</a></li>
                                <li><a href="pizza.html">Pizza</a></li>
                                <li><a href="fruits.html">Fruits</a></li>
                            </ul>
                        </div>
                        
                        <div class="col-lg-3 col-md-6">
                            <h3>Customer Service</h3>
                            <ul class="footer-links">
                                <li><a href="contact.html">Contact Us</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Shipping Policy</a></li>
                                <li><a href="#">Returns & Refunds</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        
                        <div class="col-lg-3 col-md-6">
                            <h3>Contact Info</h3>
                            <ul class="footer-links">
                                <li><i class="fas fa-map-marker-alt me-2"></i> 123 Food Street, City, State 12345</li>
                                <li><i class="fas fa-phone me-2"></i> (123) 456-7890</li>
                                <li><i class="fas fa-envelope me-2"></i> info@foodexpress.com</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="text-center mt-4 pt-3 border-top">
                        <p class="mb-0">&copy; ${new Date().getFullYear()} FoodExpress. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Load Featured Products with Bootstrap Cards
function loadFeaturedProducts() {
    const products = [
        {
            id: 1,
            name: "Premium Potato Chips",
            price: 3.99,
            image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            rating: 4.5
        },
        {
            id: 2,
            name: "Organic Apples",
            price: 5.99,
            image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            rating: 4.8
        },
        {
            id: 3,
            name: "Margherita Pizza",
            price: 12.99,
            image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            rating: 4.7
        },
        {
            id: 4,
            name: "Whole Grain Bread",
            price: 4.49,
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            rating: 4.6
        }
    ];
    
    const productGrid = document.getElementById('featured-products');
    if (productGrid) {
        productGrid.innerHTML = products.map(product => `
            <div class="col-md-6 col-lg-3">
                <div class="card product-card h-100">
                    <div class="product-image">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <div class="product-rating mb-2">
                            ${getStarRating(product.rating)}
                        </div>
                        <div class="product-price h4 text-primary mb-3">$${product.price.toFixed(2)}</div>
                        <button class="btn btn-primary add-to-cart mt-auto" 
                            data-id="${product.id}"
                            data-name="${product.name}"
                            data-price="${product.price}"
                            data-image="${product.image}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Get Star Rating HTML
function getStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Cart Functions (Keep existing cart functions)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
    }
}

function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            if (window.location.pathname.includes('cart.html')) {
                loadCartItems();
            }
        }
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Setup Add to Cart Buttons
function setupAddToCart() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
            const productId = button.dataset.id;
            const productName = button.dataset.name;
            const productPrice = parseFloat(button.dataset.price);
            const productImage = button.dataset.image;
            
            addToCart({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage
            });
        }
    });
}

// Load Cart Items with Bootstrap
function loadCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartSummaryContainer = document.querySelector('.cart-summary');
    
    if (cartItemsContainer && cart.length > 0) {
        cartItemsContainer.innerHTML = `
            <h2 class="mb-4">Your Cart (${cart.length} items)</h2>
            ${cart.map(item => `
                <div class="cart-item row align-items-center">
                    <div class="col-md-2 col-3">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}" class="img-fluid">
                        </div>
                    </div>
                    <div class="col-md-4 col-9">
                        <div class="cart-item-details">
                            <h5 class="mb-1">${item.name}</h5>
                            <p class="text-muted mb-0">Fresh and delicious</p>
                        </div>
                    </div>
                    <div class="col-md-2 col-4">
                        <div class="cart-item-price h5 text-primary">$${item.price.toFixed(2)}</div>
                    </div>
                    <div class="col-md-3 col-5">
                        <div class="cart-item-quantity d-flex align-items-center">
                            <button class="btn btn-sm btn-outline-secondary quantity-btn decrease" data-id="${item.id}">-</button>
                            <input type="number" class="form-control form-control-sm mx-2 quantity-input" value="${item.quantity}" min="1" data-id="${item.id}" style="width: 60px;">
                            <button class="btn btn-sm btn-outline-secondary quantity-btn increase" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <div class="col-md-1 col-3">
                        <button class="btn btn-link text-danger remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('')}
        `;
        
        // Add event listeners
        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                const item = cart.find(item => item.id === productId);
                if (item) updateQuantity(productId, item.quantity - 1);
            });
        });
        
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                const item = cart.find(item => item.id === productId);
                if (item) updateQuantity(productId, item.quantity + 1);
            });
        });
        
        document.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', function() {
                const productId = parseInt(this.dataset.id);
                updateQuantity(productId, parseInt(this.value));
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                removeFromCart(productId);
            });
        });
    } else if (cartItemsContainer) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
                <h3 class="mb-3">Your cart is empty</h3>
                <p class="text-muted mb-4">Add some delicious items to get started!</p>
                <a href="index.html" class="btn btn-primary btn-lg">Continue Shopping</a>
            </div>
        `;
    }
    
    if (cartSummaryContainer) {
        const subtotal = getCartTotal();
        const shipping = subtotal > 50 ? 0 : 5.99;
        const tax = subtotal * 0.08;
        const total = subtotal + shipping + tax;
        
        cartSummaryContainer.innerHTML = `
            <h2 class="mb-4">Order Summary</h2>
            <div class="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>${shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2)}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
                <span>Tax</span>
                <span>$${tax.toFixed(2)}</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between mb-4 fw-bold">
                <span>Total</span>
                <span class="text-primary">$${total.toFixed(2)}</span>
            </div>
            <a href="checkout.html" class="btn btn-primary btn-lg w-100">Proceed to Checkout</a>
        `;
    }
}

// Show Notification with Bootstrap Alert
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'alert alert-success alert-dismissible fade show position-fixed';
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 300px;';
    
    notification.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Handle Login Form
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    showNotification('Login successful!');
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Handle Signup Form
function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (!name || !email || !password || !confirmPassword) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    showNotification('Account created successfully!');
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}