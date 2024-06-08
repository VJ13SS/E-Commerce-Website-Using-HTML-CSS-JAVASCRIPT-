let hero = document.querySelector(".hero");
let shops = document.querySelector("#shops");
let home = document.querySelector("#home");
let cart = document.querySelector("#cart-details");
let footer = document.querySelector("footer");
let trending1= document.querySelector(".Trending1");
let trending2= document.querySelector(".Trending2");
let blogs = document.querySelector(".blogs");
let getDetails = document.querySelector(".get-details");
let clothing= document.querySelector(".clothing");
let gadgets= document.querySelector(".gadgets");
let clothingText1 = document.querySelector(".Trending1 .text h1");
let clothingText2 = document.querySelector(".Trending1 .text span");
let gadgetsText1 = document.querySelector(".Trending2 .text h1");
let gadgetsText2 = document.querySelector(".Trending2 .text span");
let discounts= document.querySelector(".discounts");
let explore = document.querySelector(".hero .main-text button");
let cards = document.querySelectorAll(".card");
let profile= document.querySelector(".account");

let submitButton = document.querySelector("form button");
//to show product if clicked by user
let product = document.querySelector(".clickedProduct");
let userForm = document.querySelector(".clickedProduct .user-form");
let buttons = document.querySelector(".clickedProduct .buttons");
let buy = document.querySelector(".clickedProduct .buttons #buy");
let toCart = document.querySelector(".clickedProduct .buttons #cart");
let back = document.querySelector("#back");//back button

let cartDetails = document.querySelector(".onCart");

//to get the clicked product's additional images
let productImages = document.querySelectorAll(".product-images img ");

discounts.style.display = "none";
clothing.style.display = "none";
gadgets.style.display = "none";
product.style.display = "none";
userForm.style.display = "none";
cartDetails.style.display = "none";

//For Image Slider
let imagecontainer = document.querySelector(".discount-images");
let imageIndex = 1;
let image = document.querySelector(".discount-images img");

let intervalid;//declaring intervalid
//Image slider 
const slide = () => {
  intervalid = setInterval(() => {
    image.src = `discount${imageIndex}.jpg`;
    image.style.transform = "translateX(-${imageIndex * 100}%)";//moving the entire image to left 
    imageIndex++;
     
    if (imageIndex >4) {
      imageIndex = 0;
    }
    
  }, 2000);
};

function Cart(){
  hero.style.display = "none";
  discounts.style.display = "none";
  trending1.style.display = "none";
  trending2.style.display = "none";
  blogs.style.display = "none";
  getDetails.style.display = "none";
  clothing.style.display = "none";
  gadgets.style.display = "none";
  footer.style.display = "none";
  product.style.display = "none";
  cartDetails.style.display = "flex";
};

function shopping(){
  hero.style.display = "none";
  discounts.style.display = "block";//to display 
  getDetails.style.display = "none";
  trending1.style.display = "block";
  trending2.style.display = "block";
  clothing.style.display = "block";
  gadgets.style.display = "block";
  blogs.style.display = "none";
  clothingText1.innerText = "Wishlist...";
  clothingText2.innerText = " Clothings";
  gadgetsText1.innerText = "Wishlist...";
  gadgetsText2.innerText = "Gadgets and Appliances";
  footer.style.display = "flex";
  product.style.display = "none";
  cartDetails.style.display = "none";
  
};

function homepage(){
  hero.style.display = "flex";
  discounts.style.display = "none";
  trending1.style.display = "block";
  trending2.style.display = "block";
  clothing.style.display = "none";
  gadgets.style.display = "none";
  getDetails.style.display = "block";
  blogs.style.display = "block";
  clothingText1.innerText = "Trending...";
  clothingText2.innerText = " Clothing";
  gadgetsText1.innerText = "Trending...";
  gadgetsText2.innerText = "Gadgets and Appliances";
  footer.style.display = "flex";
  product.style.display = "none";
  cartDetails.style.display = "none";

};

function ProductFn(){
  hero.style.display = "none";
  discounts.style.display = "none";
  trending1.style.display = "none";
  trending2.style.display = "none";
  blogs.style.display = "none";
  getDetails.style.display = "none";
  clothing.style.display = "none";
  gadgets.style.display = "none";
  footer.style.display = "flex";
  buttons.style.display = "flex";
  userForm.style.display = "none";
  product.style.height = "80%";
  cartDetails.style.display = "none";

};

//Imgae sliding Function 
slide();

//Event Listeners

//to prevent the default behaviour of the search button
submitButton.addEventListener("clock",()=>{
  submitButton.preventDefault();
});

cart.addEventListener("click",() =>{
  Cart();
});
explore.addEventListener("click",() =>{
  shopping();
});

shops.addEventListener("click", () =>{
  shopping();
});

home.addEventListener("click",()=>{
  homepage();
});

back.addEventListener("click",()=>{
  shopping();
});

toCart.addEventListener("click",()=>{
  alert("Added to Cart");
  location.reload();//to relooad the window(go to the starting page)
});

buy.addEventListener("click",()=>{
  //to remove the buy,cart button
  buttons.style.display = "none";
  back.style.marginLeft = "5%";
  //to display the form to enter the details 
  product.style.height= "auto";
  userForm.style.display = "block";
});


//Adding event listeners to the selected product(the one clicked by user)
let clickedProduct = "";
let clickedImg = "";
let clickedProductName = "";
for(let card of cards){
  card.addEventListener("click",()=>{
    clickedProduct = card;
    clickedProductName = clickedProduct.querySelector("h3");
    clickedImg = clickedProduct.querySelector("img");
    
    let productimg = document.querySelector(".clickedProduct .product-details img");
    productimg.src = clickedImg.src;
    ProductFn();
    product.style.display = "block";
    
    for(let itemDetails in productList){
      let item =productList[itemDetails];
      let itemName = item.name;
      let itemFeatures = item.features;
      let images = item.images;
      let itemRate = item.rate;
      let itemDiscount = item.discount;
      
      let productName = document.querySelector(".clickedProduct .details #name");
      let productFeatures = document.querySelector(".clickedProduct .details #features");
      let productRate = document.querySelector(".clickedProduct .details #price");
      
      if(itemName === clickedProductName.innerText){
        productName.innerText = itemName;
        productFeatures.innerText = itemFeatures;
        productRate.innerText = itemRate + " Rs";
        if(itemDiscount !== 0){
          
          productRate.innerText = `${(itemRate *( 1 - itemDiscount)).toFixed(2)} Rs (MRP ${itemRate} Discount ${itemDiscount * 100}%)`;
        };
        //Adding new images to the product 
        productImages[0].src = images[0];
        productImages[1].src = images[1];
      }
    }
  })
};

//adding event listeners to the clicked product images
for(let productImage of productImages){
  productImage.addEventListener("click",() =>{
    
    //to change the product img
    let clickedProductImg = document.querySelector(".clickedProduct .product-details img");

    let temp = clickedProductImg.src;
    clickedProductImg.src = productImage.src;
    productImage.src = temp;
  })
};
