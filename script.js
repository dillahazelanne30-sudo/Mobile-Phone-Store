/*
    Yung nakalagay sa dashboard eh wala dito

    These products are only for the separate
    Apple / Samsung / OPPO / New Arrivals / Sale tabs.
*/


const products = [

    /* APPLE */

    {
        brand: "APPLE",
        name: "iPhone 17 Pro",
        storage: "256GB / 512GB / 1TB",
        description: "Pro camera system, A19 Pro chip and titanium design.",
        price: 79990,
        category: "apple",
        image: "https://cdn.tehnoezh.ua/0/0/0/2/1/0/3/9/9/000210399_545_545.webp",
        newProduct: true,
        sale: false
    },

    {
        brand: "APPLE",
        name: "iPhone 17",
        storage: "256GB / 512GB",
        description: "Next-generation iPhone with advanced camera features.",
        price: 57990,
        category: "apple",
        image: "https://inbox.ph/wp-content/uploads/2024/10/iPHone-16-main.jpg",
        newProduct: true,
        sale: false
    },

    {
        brand: "APPLE",
        name: "iPhone 17e",
        storage: "256GB",
        description: "A more affordable iPhone experience with modern performance.",
        price: 44990,
        category: "apple",
        image: "https://inbox.ph/wp-content/uploads/2024/10/iPHone-16-main.jpg",
        newProduct: true,
        sale: false
    },

    {
        brand: "APPLE",
        name: "iPhone 16",
        storage: "128GB / 256GB / 512GB",
        description: "Powerful everyday iPhone with advanced camera system.",
        price: 49990,
        category: "apple",
        image: "https://inbox.ph/wp-content/uploads/2024/10/iPHone-16-main.jpg",
        newProduct: false,
        sale: true
    },


    /* SAMSUNG */

    {
        brand: "SAMSUNG",
        name: "Galaxy S26 Ultra",
        storage: "12GB + 256GB / 12GB + 512GB",
        description: "Samsung flagship smartphone with advanced camera and performance.",
        price: 86990,
        category: "samsung",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLX6Yo9qqlzSXeCKOM9Z80py1pD5unM4uM5-hZswIOsSPNJg3tEp5tCwM&s=10",
        newProduct: true,
        sale: false
    },

    {
        brand: "SAMSUNG",
        name: "Galaxy S26+",
        storage: "12GB + 256GB / 12GB + 512GB",
        description: "Large flagship display with powerful Galaxy performance.",
        price: 69990,
        category: "samsung",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLX6Yo9qqlzSXeCKOM9Z80py1pD5unM4uM5-hZswIOsSPNJg3tEp5tCwM&s=10",
        newProduct: true,
        sale: false
    },

    {
        brand: "SAMSUNG",
        name: "Galaxy S26",
        storage: "12GB + 256GB",
        description: "Compact flagship with high-performance Galaxy hardware.",
        price: 59990,
        category: "samsung",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLX6Yo9qqlzSXeCKOM9Z80py1pD5unM4uM5-hZswIOsSPNJg3tEp5tCwM&s=10",
        newProduct: true,
        sale: false
    },


    /*  OPPO */

    {
        brand: "OPPO",
        name: "OPPO A3",
        storage: "8GB RAM + 256GB ROM",
        description: "Everyday OPPO smartphone with a stylish Starlight White finish.",
        price: 9839,
        category: "oppo",
        image: "https://electroworld.abenson.com/media/catalog/product/1/9/194412_2024.jpg",
        newProduct: false,
        sale: true
    },

    {
        brand: "OPPO",
        name: "OPPO Reno16 5G",
        storage: "12GB RAM + 256GB ROM",
        description: "Reno-series smartphone focused on photography and everyday performance.",
        price: 29999,
        category: "oppo",
        image: "https://electroworld.abenson.com/media/catalog/product/1/9/194412_2024.jpg",
        newProduct: true,
        sale: false
    },

    {
        brand: "OPPO",
        name: "OPPO Reno16 Pro 5G",
        storage: "12GB RAM + 512GB ROM",
        description: "Premium Reno smartphone with enhanced camera and performance features.",
        price: 39999,
        category: "oppo",
        image: "https://electroworld.abenson.com/media/catalog/product/1/9/194412_2024.jpg",
        newProduct: true,
        sale: false
    }

];


/* CURRENT CATEGORY */

let currentCategory = "new";


/* SHOW PAGE */

function showPage(page) {

    /* Hide all pages */

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(pageElement) {

        pageElement.classList.remove("active-page");

    });


    /* HOME */

    if (page === "home") {

        document
            .getElementById("homePage")
            .classList.add("active-page");

        window.scrollTo(0, 0);

        return;
    }


    /* PRODUCT CATEGORIES */

    if (
        page === "apple" ||
        page === "samsung" ||
        page === "oppo" ||
        page === "new" ||
        page === "sale" ||
        page === "accessories"
    ) {

        currentCategory = page;

        document
            .getElementById("productPage")
            .classList.add("active-page");


        updateCatalogTitle();

        renderProducts();

        window.scrollTo(0, 0);

        return;
    }


    /* OTHER PAGES */

    document
        .getElementById("otherPage")
        .classList.add("active-page");


    const title =
        document.getElementById("otherTitle");

    const description =
        document.getElementById("otherDescription");


    const pageInfo = {

        account: [
            "MY ACCOUNT",
            "Your HAZE account section. You can add your login and registration system here."
        ],

        favorites: [
            "MY FAVORITES",
            "Your favorite products will appear here."
        ],

        cart: [
            "SHOPPING CART",
            "Your shopping cart will appear here."
        ],

        about: [
            "ABOUT HAZE",
            "HAZE is your ultimate phone destination for smartphones and technology."
        ],

        contact: [
            "CONTACT US",
            "Add your contact information, social media accounts and customer support details here."
        ],

        shipping: [
            "SHIPPING",
            "Add your shipping policies and delivery information here."
        ],

        returns: [
            "RETURNS",
            "Add your return and refund policies here."
        ],

        help: [
            "HELP CENTER",
            "Add frequently asked questions and customer support information here."
        ]

    };


    if (pageInfo[page]) {

        title.innerText =
            pageInfo[page][0];

        description.innerText =
            pageInfo[page][1];

    }


    window.scrollTo(0, 0);
}


/* UPDATE CATALOG TITLE */

function updateCatalogTitle() {

    const title =
        document.getElementById("catalogTitle");

    const smallTitle =
        document.getElementById("catalogSmallTitle");


    if (currentCategory === "apple") {

        title.innerText = "APPLE";

        smallTitle.innerText =
            "SHOP APPLE";

    }

    else if (currentCategory === "samsung") {

        title.innerText = "SAMSUNG";

        smallTitle.innerText =
            "SHOP SAMSUNG";

    }

    else if (currentCategory === "oppo") {

        title.innerText = "OPPO";

        smallTitle.innerText =
            "SHOP OPPO";

    }

    else if (currentCategory === "new") {

        title.innerText = "NEW ARRIVALS";

        smallTitle.innerText =
            "JUST IN";

    }

    else if (currentCategory === "sale") {

        title.innerText = "SALE";

        smallTitle.innerText =
            "SPECIAL OFFERS";

    }

    else {

        title.innerText = "PRODUCTS";

        smallTitle.innerText =
            "HAZE STORE";

    }

}


/* RENDER PRODUCTS */

function renderProducts() {

    const grid =
        document.getElementById("catalogGrid");

    grid.innerHTML = "";


    let filteredProducts;


    if (currentCategory === "new") {

        filteredProducts =
            products.filter(function(product) {

                return product.newProduct === true;

            });

    }

    else if (currentCategory === "sale") {

        filteredProducts =
            products.filter(function(product) {

                return product.sale === true;

            });

    }

    else if (currentCategory === "accessories") {

        filteredProducts = [];

    }

    else {

        filteredProducts =
            products.filter(function(product) {

                return product.category === currentCategory;

            });

    }


    if (filteredProducts.length === 0) {

        grid.innerHTML = `

            <div class="empty-products">

                <h2>
                    No products yet
                </h2>

                <p>
                    You can add your accessories here later.
                </p>

            </div>

        `;

        return;
    }


    filteredProducts.forEach(function(product) {

        createProductCard(product, grid);

    });

}


/* CREATE PRODUCT CARD */

function createProductCard(product, container) {

    const card =
        document.createElement("div");

    card.className =
        "product-card";


    const formattedPrice =
        "₱" +
        product.price.toLocaleString("en-PH", {
            minimumFractionDigits: 2
        });


    card.innerHTML = `

        <div class="product-image">

            ${
                product.newProduct
                ?
                `<span class="new-tag">NEW</span>`
                :
                ""
            }

            ${
                product.sale
                ?
                `<span class="sale-tag">SALE</span>`
                :
                ""
            }

            <img
                src="${product.image}"
                alt="${product.name}"
                onclick="zoomImage(this)"
            >

            <button
                class="heart"
                onclick="addFavorite(this, '${product.name}')">

                ♡

            </button>

        </div>


        <div class="product-info">

            <p class="brand">
                ${product.brand}
            </p>

            <h3>
                ${product.name}
            </h3>

            <p class="description">
                ${product.storage}
            </p>

            <p class="description">
                ${product.description}
            </p>

            <p class="price">
                ${formattedPrice}
            </p>

            <button
                class="product-button"
                onclick="showProductDetails('${product.name}')">

                VIEW PRODUCT

            </button>

        </div>

    `;


    container.appendChild(card);
}


/* SEARCH */

function searchProducts() {

    const searchInput =
        document.getElementById("searchInput");

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    if (search === "") {

        return;

    }


    const results =
        products.filter(function(product) {

            return (

                product.name
                    .toLowerCase()
                    .includes(search)

                ||

                product.brand
                    .toLowerCase()
                    .includes(search)

                ||

                product.storage
                    .toLowerCase()
                    .includes(search)

            );

        });


    document
        .getElementById("homePage")
        .classList.remove("active-page");

    document
        .getElementById("otherPage")
        .classList.remove("active-page");

    document
        .getElementById("productPage")
        .classList.add("active-page");


    document
        .getElementById("catalogTitle")
        .innerText = "SEARCH RESULTS";


    document
        .getElementById("catalogSmallTitle")
        .innerText =
            "RESULTS FOR: " + search.toUpperCase();


    const grid =
        document.getElementById("catalogGrid");

    grid.innerHTML = "";


    if (results.length === 0) {

        grid.innerHTML = `

            <div class="empty-products">

                <h2>
                    No products found
                </h2>

                <p>
                    Try searching for Apple, Samsung, OPPO,
                    iPhone, Galaxy or Reno.
                </p>

            </div>

        `;

        return;
    }


    results.forEach(function(product) {

        createProductCard(product, grid);

    });


    window.scrollTo(0, 0);
}


/* SEARCH WITH ENTER */

document
    .getElementById("searchInput")
    .addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {

                searchProducts();

            }

        }
    );


/* SORT PRODUCTS */

function sortProducts() {

    const sort =
        document.getElementById("sortProducts").value;


    let filteredProducts;


    if (currentCategory === "new") {

        filteredProducts =
            products.filter(
                product => product.newProduct
            );

    }

    else if (currentCategory === "sale") {

        filteredProducts =
            products.filter(
                product => product.sale
            );

    }

    else {

        filteredProducts =
            products.filter(
                product =>
                    product.category === currentCategory
            );

    }


    if (sort === "low") {

        filteredProducts.sort(
            (a, b) => a.price - b.price
        );

    }

    else if (sort === "high") {

        filteredProducts.sort(
            (a, b) => b.price - a.price
        );

    }


    const grid =
        document.getElementById("catalogGrid");

    grid.innerHTML = "";


    filteredProducts.forEach(function(product) {

        createProductCard(product, grid);

    });

}


/* IMAGE ZOOM */

function zoomImage(image) {

    const modal =
        document.getElementById("zoomModal");

    const zoomedImage =
        document.getElementById("zoomedImage");


    zoomedImage.src =
        image.src;


    modal.style.display =
        "flex";
}


function closeZoom() {

    const modal =
        document.getElementById("zoomModal");


    modal.style.display =
        "none";
}


/* CLOSE WHEN CLICKING OUTSIDE IMAGE */

document
    .getElementById("zoomModal")
    .addEventListener(
        "click",
        function(event) {

            if (event.target === this) {

                closeZoom();

            }

        }
    );


/* FAVORITES */

let favorites = [];


function addFavorite(button, productName) {

    if (
        favorites.includes(productName)
    ) {

        favorites =
            favorites.filter(
                item => item !== productName
            );

        button.innerHTML = "♡";

    }

    else {

        favorites.push(productName);

        button.innerHTML = "♥";

    }

}


/* PRODUCT DETAILS */

function showProductDetails(productName) {

    const product =
        products.find(
            item => item.name === productName
        );


    if (!product) {

        alert(productName);

        return;

    }


    const modal =
        document.getElementById("detailsModal");

    const content =
        document.getElementById("detailsContent");


    const formattedPrice =
        "₱" +
        product.price.toLocaleString(
            "en-PH",
            {
                minimumFractionDigits: 2
            }
        );


    content.innerHTML = `

        <p class="small-text">
            ${product.brand}
        </p>

        <h2>
            ${product.name}
        </h2>

        <p>
            <strong>Storage:</strong>
            ${product.storage}
        </p>

        <p>
            ${product.description}
        </p>

        <p class="details-price">
            ${formattedPrice}
        </p>

        <button
            class="product-button"
            onclick="addToCart('${product.name}')">

            ADD TO CART

        </button>

    `;


    modal.style.display =
        "flex";
}


/* CLOSE DETAILS */

function closeDetails() {

    document
        .getElementById("detailsModal")
        .style.display = "none";

}


/* CART */

let cart = [];


function addToCart(productName) {

    cart.push(productName);


    alert(
        productName +
        " has been added to your cart!"
    );


    closeDetails();

}


/* CLOSE DETAILS WHEN CLICKING OUTSIDE */

document
    .getElementById("detailsModal")
    .addEventListener(
        "click",
        function(event) {

            if (event.target === this) {

                closeDetails();

            }

        }
    );


/* INITIAL LOAD */

showPage("home");