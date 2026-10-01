/* ==========================================================================
   1. DATA KELOLA MENU (12 Menu Pilihan UMKM Lab Rasa)
   ========================================================================== */
const menuData = [
    {
        id: 1,
        title: "Ayam Geprek",
        category: "pedas",
        price: 15000,
        image: "img/ayam.jpeg",
        desc: "Ayam krispi renyah digeprek dengan sambal cabai rawit merah segar racikan laboratorium rasa.",
        ingredients: "Ayam segar, Cabai Rawit Merah, Bawang Putih, Minyak Rempah"
    },
    {
        id: 2,
        title: "Roti Bakar Caramel Choco",
        category: "manis",
        price: 16000,
        image: "img/rokbar.jpeg",
        desc: "Roti tebal bakar mentega dengan lelehan saus karamel legit dan keju melimpah.",
        ingredients: "Roti Bandung, Keju Cheddar, Caramel Sauce, Cokelat Premium"
    },
    {
        id: 3,
        title: "Rice Bowl Beef Mentai",
        category: "asin",
        price: 20000,
        image: "img/mentai.jpg",
        desc: "Nasi hangat dengan irisan daging sapi gurih disiram saus mentai krimer yang dibakar (torched).",
        ingredients: "Daging Sapi US Slice, Saus Mentai, Nasi Jepang, Nori"
    },
    {
        id: 4,
        title: "Nutrisari",
        category: "segar",
        price: 7000,
        image: "img/nutrisari.png",
        desc: "Minuman es jeruk manis asam segar yang kaya akan Vitamin C penawar pedas sempurna.",
        ingredients: "Nutrisari Jeruk, Air Mineral, Es Batu Kristal"
    },
    {
        id: 5,
        title: "Pisang Goreng Madu",
        category: "manis",
        price: 10000,
        image: "img/pisgor madu.jpeg",
        desc: "Pisang manis pilihan terbalut adonan madu murni, digoreng karamel hingga crispy di luar dan lumer di dalam.",
        ingredients: "Pisang Raja, Madu Murni, Tepung Terigu & Beras, Santan, Minyak Nabati"
    },
    {
        id: 6,
        title: "Mix Platter",
        category: "asin",
        price: 20000,
        image: "img/mix plat.jpg",
        desc: "Kombinasi kentang goreng, sosis,dan nugget dengan cocolan saus Mayonnaise & saus sambal.",
        ingredients: "Kentang Goreng, Sosis, Nugget, Saus Mayonnaise, Saus Sambal"
    },
    {
        id: 7,
        title: "Kentang Goreng Truffle Salted",
        category: "asin",
        price: 18000,
        image: "img/kentang.jpeg",
        desc: "French fries renyah bertabur garam gurih & sensasi aroma minyak truffle mewah.",
        ingredients: "Kentang Impor, Garam Laut, Truffle Oil, Parsley"
    },
    {
        id: 8,
        title: "Es Teh Manis",
        category: "segar",
        price: 5000,
        image: "img/es teh.jpg",
        desc: "Seduhan teh melati wangi alami dengan gula murni dan es batu kristal, penawar pedas terbaik.",
        ingredients: "Teh Melati, Gula Murni, Es Batu Kristal"
    },
    {
        id: 9,
        title: "Ayam Geprek Sambal Matah",
        category: "pedas",
        price: 23000,
        image: "img/matah.jpeg",
        desc: "Ayam krispi renyah digeprek dengan siraman sambal matah khas Bali yang segar, wangi, dan pedas menggugah selera.",
        ingredients: "Ayam Crispy, Bawang Merah, Cabai Rawit, Serai, Daun Jeruk, Jeruk Limau, Minyak Kelapa"
    },
    {
        id: 10,
        title: "Mie Bangladesh",
        category: "pedas",
        price: 15000,
        image: "img/mie.jpeg",
        desc: "Mie goreng masak nyemek bumbu rempah kari kaya rasa dengan campuran telur creamy khas Medan.",
        ingredients: "Mie Goreng, Bumbu Kari, Telur Creamy, Daun Seledri"
    },
    {
        id: 11,
        title: "Level Pedass Ayam Geprek",
        category: "pedas",
        price: 2000,
        image: "img/level.png",
        desc: "Tentukan sendiri level pedas untuk ayam geprek favoritmu, mulai dari level 1 hingga level 10",
        ingredients: "sambal cabai rawit merah, bawang putih, minyak rempah"
    },
    {
        id: 12,
        title: "Es Kopi Susu Creamy Lab",
        category: "kopi",
        price: 18000,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
        desc: "Perpaduan espresso kopi pilihan, susu segar, dan gula aren asli dengan tekstur super creamy.",
        ingredients: "Espresso, Susu Segar, Creamer, Gula Aren Premium"
    },
    {
        id: 13,
        title: "Butterscotch Coffee Delight",
        category: "kopi",
        price: 23000,
        image: "img/butter.jpeg",
        desc: "Espresso dan susu segar dengan balutan sirup butterscotch beraroma mentega karamel manis gurih.",
        ingredients: "Espresso, Fresh Milk, Butterscotch Syrup, Creamer"
    },
    {
        id: 14,
        title: "Americano Classic",
        category: "kopi",
        price: 15000,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
        desc: "Seduhan double shot espresso murni tanpa gula yang memberikan rasa kopi segar, tegas, dan otentik.",
        ingredients: "Double Shot Espresso, Air Mineral, Es Batu"
    },
   {
        id: 15,
        title: "Kue Pancong Lumer ",
        category: "manis",
        price: 8000,
        image: "img/pancong susu.png",
        desc: "Kue pancong kelapa gurih dimasak setengah matang dengan adonan lumer dan lelehan topping manis pilihan.",
        ingredients: "Tepung Beras, Kelapa Parut, Santan, Telur, Margarin, Gula, Susu Kental Manis"
    },
    {
        id: 16,
        title:"Pilihan Rasa Kue Pancong",
        category: "manis",
        price: 0,
        image: "img/rasa pancong.png",
        desc: "Berbagai pilihan rasa topping kue pancong lumer",
        ingredients: "Topping Cokelat, Topping Ovaltine, Topping keju, Topping Keju Cokelat, Topping Keju Ovaltine, Topping Keju Susu Kental Manis"
    },
    {
        id: 17,
        title:"Es Kuwut Mentimun",
        category: "segar",
        price: 10000,
        image:"img/Es Kuwut.png",
        desc:"Serutan mentimun segar dipadu perasan jeruk nipis, sirup melon, dan biji selasih penawar pedas & minyak alami.",
        ingredients:"Mentimun, Jeruk Nipis, Sirup Melon, Biji Selasih, Es Batu"
    }
];

/* State Keranjang Belanja */
let cart = [];

/* ==========================================================================
   2. DOM ELEMENTS SELECTION
   ========================================================================== */
const menuGrid = document.getElementById('menuGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

const cartToggle = document.getElementById('cartToggle');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');

const modal = document.getElementById('menuModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

/* ==========================================================================
   3. LOGIK RENDER & FILTER MENU
   ========================================================================== */
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
}

function renderMenu(items) {
    menuGrid.innerHTML = '';
    
    if (items.length === 0) {
        menuGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted); padding: 40px 0;">Menu yang Anda cari tidak ditemukan...</p>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <div class="card-img-wrapper" onclick="openModal(${item.id})">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <span class="flavor-badge bg-${item.category}">${item.category}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title" onclick="openModal(${item.id})" style="cursor:pointer">${item.title}</h3>
                <p class="card-desc">${item.desc}</p>
                <div class="card-footer">
                    <span class="card-price">${formatRupiah(item.price)}</span>
                    <button class="add-cart-btn" onclick="addToCart(${item.id})" aria-label="Tambah ke keranjang">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

function filterMenu() {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filtered = menuData.filter(item => {
        const matchCategory = (activeFilter === 'all') || (item.category === activeFilter);
        const matchSearch = item.title.toLowerCase().includes(searchTerm) || item.desc.toLowerCase().includes(searchTerm);
        return matchCategory && matchSearch;
    });

    renderMenu(filtered);
}

// Event Handler Filter & Search
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterMenu();
    });
});

searchInput.addEventListener('input', filterMenu);

/* ==========================================================================
   4. SHOPPING CART LOGIC
   ========================================================================== */
function addToCart(id) {
    const item = menuData.find(m => m.id === id);
    const existingIndex = cart.findIndex(c => c.id === id);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    updateCartUI();
    openCart();
}

function updateQty(id, delta) {
    const index = cart.findIndex(c => c.id === id);
    if (index > -1) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding:20px;">Tabung pesanan masih kosong.</p>`;
    } else {
        cart.forEach(item => {
            total += item.price * item.qty;
            count += item.qty;

            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'cart-item';
            cartItemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p>${formatRupiah(item.price)}</p>
                </div>
                <div class="cart-qty-control">
                    <button onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemEl);
        });
    }

    cartCount.textContent = count;
    cartTotalPrice.textContent = formatRupiah(total);
}

function openCart() { document.body.classList.add('cart-open'); }
function closeCart() { document.body.classList.remove('cart-open'); }

cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

/* Checkout ke WhatsApp Direct */
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Silakan pilih menu terlebih dahulu!');
        return;
    }

    let message = "Halo *Lab Rasa*, saya ingin pesan menu berikut:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        message += `${index + 1}. *${item.title}* (${item.qty}x) = ${formatRupiah(subtotal)}\n`;
    });

    message += `\n*Total Biaya:* ${formatRupiah(total)}`;
    message += `\n\nMohon konfirmasi ketersediaan & alamat pengiriman. Terima kasih!`;

    const encodedMsg = encodeURIComponent(message);
    const waNumber = "6282123077949";
    window.open(`https://api.whatsapp.com/send/?phone=${waNumber}&text=${encodedMsg}`, '_blank');
});

/* ==========================================================================
   5. MODAL DETAIL MENU LOGIC
   ========================================================================== */
function openModal(id) {
    const item = menuData.find(m => m.id === id);
    modalBody.innerHTML = `
        <div class="modal-body-content">
            <img src="${item.image}" alt="${item.title}">
            <span class="flavor-badge bg-${item.category}" style="display:inline-block; margin-bottom:10px;">${item.category}</span>
            <h2>${item.title}</h2>
            <h3 style="color:var(--segar); margin: 10px 0;">${formatRupiah(item.price)}</h3>
            <p style="color:var(--text-muted); margin-bottom:15px;">${item.desc}</p>
            <div style="background:rgba(255,255,255,0.05); padding:12px; border-radius:8px; font-size:0.85rem; margin-bottom:20px;">
                <strong>Komposisi Formula:</strong><br>
                <span style="color:var(--text-muted);">${item.ingredients}</span>
            </div>
            <button class="btn btn-primary btn-block" onclick="addToCart(${item.id}); closeModal();">
                <i class="fa-solid fa-cart-plus"></i> Tambah ke Pesanan
            </button>
        </div>
    `;
    modal.classList.add('active');
}

function closeModal() { modal.classList.remove('active'); }

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

/* ==========================================================================
   6. NAVBAR ACTIVE STATE, SCROLLSPY & MOBILE MENU
   ========================================================================== */
const sections = document.querySelectorAll('section[id]');
const navLinksItems = document.querySelectorAll('.nav-links .nav-item');

// Toggle Hamburger Menu versi Mobile
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Pindah indikator warna putih saat menu diklik
navLinksItems.forEach(link => {
    link.addEventListener('click', function() {
        navLinksItems.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        navLinks.classList.remove('active');
    });
});

// Pindah indikator warna putih otomatis saat scroll (Scrollspy)
window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
});

// Render Awal Menu
document.addEventListener('DOMContentLoaded', () => {
    renderMenu(menuData);
});
