"use strict";

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms (MPRT) response time delivers smooth, seamless, lag-free gaming experience. The customizable screen’s refresh rate, response time and game modes allow you to take full advantage of your game’s specs. Connect multiple devices such as PC, Macbook, and laptops with 2 HDMI 2.0, 1 DP1.2, and 1 mDP1.2 ports",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece Liner, Zippered Detachable Hood with Adjustable Drawstring, Velcro cuffs, Breathable Soft Shell, Adjustable Waist",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
];

let cart = [];
let selectedCategory = "All categories";

function getProductImage(product) {
  const img = document.createElement("img");
  img.src = product.image;
  img.classList.add("p-8", "rounded-t-lg", "w-80", "h-56");
  return img;
}

function getProductInfo(product) {
  const div = document.createElement("div");
  div.classList.add("px-5", "pb-5");
  const productName = document.createElement("h5");
  productName.classList.add(
    "text-xl",
    "font-semibold",
    "tracking-tight",
    "text-gray-900",
    "dark:text-white"
  );
  productName.innerText = product.title;
  div.appendChild(productName);

  const ratingDiv = document.createElement("div");
  ratingDiv.classList.add("flex", "items-center", "mt-2.5", "mb-5");

  const ratinglevel = document.createElement("b");
  ratinglevel.innerText = "Rating :";
  ratingDiv.appendChild(ratinglevel);

  const ratingNumber = document.createElement("span");
  ratingNumber.classList.add(
    "bg-blue-100",
    "text-blue-800",
    "text-xs",
    "font-semibold",
    "px-2.5",
    "py-0.5",
    "rounded",
    "dark:bg-blue-200",
    "dark:text-blue-800",
    "ms-3"
  );
  ratingNumber.innerText = product.rating.rate;
  ratingDiv.appendChild(ratingNumber);
  div.appendChild(ratingDiv);
  return div;
}

function getProductPrice(product) {
  const productPriceDiv = document.createElement("div");
  productPriceDiv.classList.add("flex", "items-center", "justify-between");

  const productPrice = document.createElement("span");
  productPrice.classList.add(
    "text-3xl",
    "font-bold",
    "text-gray-900",
    "dark:text-white"
  );
  productPrice.innerText = "$" + product.price;

  productPriceDiv.appendChild(productPrice);

  const productButton = document.createElement("a");
  productButton.classList.add(
    "text-white",
    "bg-blue-700",
    "hover:bg-blue-800",
    "focus:ring-4",
    "focus:outline-none",
    "focus:ring-blue-300",
    "font-medium",
    "rounded-lg",
    "text-sm",
    "px-5",
    "py-2.5",
    "text-center",
    "dark:bg-blue-600",
    "dark:hover:bg-blue-700",
    "dark:focus:ring-blue-800"
  );
  productButton.innerText = "Add To Cart";
  productButton.addEventListener("click", function () {
    if (isproductPresent(product.id)) {
      alert("product already exist");
      return;
    }
    cart.push(product);
    renderCart();
  });
  productPriceDiv.appendChild(productButton);
  return productPriceDiv;
}

function isproductPresent(productId) {
  const productIndex = cart.findIndex(function (product) {
    if (product.id === productId) {
      return true;
    } else {
      return false;
    }
  });
  if (productIndex === -1) {
    return false;
  }
  return true;
}

function getProductCard(product) {
  const card = document.createElement("div");
  card.classList.add(
    "w-full",
    "max-w-sm",
    "bg-white",
    "border",
    "border-gray-200",
    "rounded-lg",
    "shadow",
    "dark:bg-gray-800",
    "dark:border-gray-700"
  );
  const productImage = getProductImage(product);
  card.appendChild(productImage);

  const productInfo = getProductInfo(product);
  card.appendChild(productInfo);

  const productPrice = getProductPrice(product);
  card.appendChild(productPrice);
  return card;
}

function deleteBtnCartItem(cartProductId) {
  const productIndex = cart.findIndex(function (product) {
    return product.id === cartProductId;
  });
  if (productIndex === -1) {
    alert("Product is not present in the cart");
    return;
  }
  cart.splice(productIndex, 1);
  renderCart();
}
function getCartProductItem(cartProduct) {
  const list = document.createElement("li");
  list.classList.add("py-3", "sm:py-4");
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("flex", "items-center");
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("flex-shrink-0");
  const img = document.createElement("img");
  img.classList.add("w-8", "h-8", "rounded-full");
  img.src = cartProduct.image;
  imgDiv.appendChild(img);

  const textDiv = document.createElement("div");
  textDiv.classList.add("flex-1", "min-w-0", "ms-4");
  const text = document.createElement("p");
  text.classList.add(
    "text-sm",
    "font-medium",
    "text-gray-900",
    "truncate",
    "dark:text-white"
  );
  text.innerText = cartProduct.title;
  textDiv.appendChild(text);
  const deleteBtn = document.createElement("a");
  deleteBtn.classList.add(
    "inline-flex",
    "items-center",
    "text-base",
    "font-semibold",
    "text-gray-900",
    "dark:text-white",
    "cursor-pointer"
  );
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", function () {
    deleteBtnCartItem(cartProduct.id);
  });
  mainDiv.appendChild(imgDiv);
  mainDiv.appendChild(textDiv);
  mainDiv.appendChild(deleteBtn);
  list.appendChild(mainDiv);
  return list;
}
function renderCart() {
  const cartContainer = document.getElementById("cart-list");
  cartContainer.innerHTML = "";
  cart.forEach(function (cartProduct) {
    const cartProductItem = getCartProductItem(cartProduct);
    cartContainer.appendChild(cartProductItem);
  });
}

function renderProducts() {
  const productListContainer = document.getElementById("product-list");
  productListContainer.innerHTML = "";
  let categorizedProducts = products;
  if (selectedCategory !== "All categories") {
    categorizedProducts = products.filter(function (product) {
      return product.category === selectedCategory;
    });
  }
  categorizedProducts.forEach(function (product) {
    const productCard = getProductCard(product);
    productListContainer.appendChild(productCard);
  });
}

function getProductCategories() {
  const productCategories = products.map(function (product) {
    return product.category;
  });

  const uniqueCategories = new Set(productCategories);
  return ["All categories", ...uniqueCategories];
}

function renderCategories() {
  const categoryContainer = document.getElementById("category-filters");
  categoryContainer.innerHTML = "";

  const categories = getProductCategories();
  categories.forEach(function (category) {
    const categoryBtn = document.createElement("button");
    categoryBtn.innerText = category;
    categoryBtn.classList.add(
      "text-blue-700",
      "hover:text-white",
      "border",
      "border-blue-600",
      "bg-white",
      "hover:bg-blue-700",
      "focus:ring-4",
      "focus:outline-none",
      "focus:ring-blue-300",
      "rounded-full",
      "text-base",
      "font-medium",
      "px-5",
      "py-2.5",
      "text-center",
      "me-3",
      "mb-3",
      "dark:border-blue-500",
      "dark:text-blue-500",
      "dark:hover:text-white",
      "dark:hover:bg-blue-500",
      "dark:bg-gray-900",
      "dark:focus:ring-blue-800"
    );
    categoryBtn.addEventListener("click", function () {
      selectedCategory = category;
      renderProducts();
    });
    categoryContainer.appendChild(categoryBtn);
  });
}
renderCategories();
renderProducts();
//line 339 why alert is given
