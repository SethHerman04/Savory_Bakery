"use strict";

// Initialize Variables
let orderTotal = 0.00;
let orderItemsSize = 0;

// Initialize constant arrays
const CART_IMAGES = ["FrenchBaguette.jpg", "ClassicSourdough.jpg", "HoneyOatWheat.jpg", "SeededRye.jpg",
        "Multigrain.jpg", "BraidedChallah.jpg", "ClassicHamantaschen.jpg", "PainAuChocolat.jpg", 
        "AlmondBearClaw.jpg", "BlueberryDanish.jpg", "ChocolateChip.jpg", "OatmealRaisin.jpg", 
        "Snickerdoodle.jpg", "PeanutButter.jpg", "KeyLime.jpg", "AppleCrumble.jpg", "BlueberryLattice.jpg",
        "Pecan.jpg"];
const CART_NAMES = ["French Bread", "Classic Sourdough", "Honey Oat Wheat", "Seeded Rye", "Multigrain",
        "Braided Challah", "Classic Hamantaschen", "Pain Au Chocolat", "Almond Bear Claw", "Blueberry Danish",
        "Chocolate Chip Cookie", "Oatmeal Raisin Cookie", "Snickerdoodle Cookie", "Peanut Butter Cookie",
        "Key Lime Pie", "Apple Crumble Pie", "Blueberry Lattice Pie", "Pecan Pie"];
const CART_PRICES = [3.00, 5.00, 6.00, 6.00, 6.50, 7.50, 2.00, 3.00, 4.00, 4.00, 1.50, 1.50, 1.50, 1.50,
        5.50, 6.00, 6.00, 6.50];
const CART_BUTTONS = ["removeBaguette", "removeSourdough", "removeHoneyOat", "removeRye", "removeMultigrain",
        "removeChallah", "removeHamantaschen", "removeChocolat", "removeBearClaw", "removeDanish", 
        "removeChocolateChip", "removeOatmealRaisin", "removeSnickerdoodle", "removePeanutButter",
        "removeKeyLime", "removeAppleCrumble", "removeBlueberryLattice", "removePecan"]

// Declare arrays
const orderItems = new Array(18);
const orderQuantity = new Array(18);
const orderPrice = new Array(18);

// Cart container declarations
const cartContainer = document.getElementById("cartContainer");
const cart0 = document.getElementById("cart0");
const cart1 = document.getElementById("cart1");
const cart2 = document.getElementById("cart2");
const cart3 = document.getElementById("cart3");
const cart4 = document.getElementById("cart4");
const cart5 = document.getElementById("cart5");
const cart6 = document.getElementById("cart6");
const cart7 = document.getElementById("cart7");
const cart8 = document.getElementById("cart8");
const cart9 = document.getElementById("cart9");
const cart10 = document.getElementById("cart10");
const cart11 = document.getElementById("cart11");
const cart12 = document.getElementById("cart12");
const cart13 = document.getElementById("cart13");
const cart14 = document.getElementById("cart14");
const cart15 = document.getElementById("cart15");
const cart16 = document.getElementById("cart16");
const cart17 = document.getElementById("cart17");
const buttonPlaceOrder = document.getElementById("buttonPlaceOrder");
const total = document.getElementById("total");

// Add button declarations
const buttonBaguette = document.getElementById("buttonBaguette");
const buttonSourdough = document.getElementById("buttonSourdough");
const buttonHoneyOat = document.getElementById("buttonHoneyOat");
const buttonRye = document.getElementById("buttonRye");
const buttonMultigrain = document.getElementById("buttonMultigrain");
const buttonChallah = document.getElementById("buttonChallah");
const buttonHamantaschen = document.getElementById("buttonHamantaschen");
const buttonChocolat = document.getElementById("buttonChocolat");
const buttonBearClaw = document.getElementById("buttonBearClaw");
const buttonDanish = document.getElementById("buttonDanish");
const buttonChocolateChip = document.getElementById("buttonChocolateChip");
const buttonOatmealRaisin = document.getElementById("buttonOatmealRaisin");
const buttonSnickerdoodle = document.getElementById("buttonSnickerdoodle");
const buttonPeanutButter = document.getElementById("buttonPeanutButter");
const buttonKeyLime = document.getElementById("buttonKeyLime");
const buttonAppleCrumble = document.getElementById("buttonAppleCrumble");
const buttonBlueberryLattice = document.getElementById("buttonBlueberryLattice");
const buttonPecan = document.getElementById("buttonPecan");

// Functions
function searchItemsArray (itemName) {
    // Initialize index
    let index = 0;

    // Search array and return index
    if (orderItemsSize == 0) {
        return -1;
    }
    else {
        while (index < orderItemsSize) {
            if (itemName === orderItems[index]) {
                return index;
            }
        index++;
        }
        return -1;
    }
}

// Total quantity of items in cart
function calcTotalQuantity () {
    // Initialize variables
    let index = 0;
    let totalQuantity = 0;

    // Add up all quantities in array and return
    while (index < orderItemsSize) {
        totalQuantity += orderQuantity[index];
        index++;
    }
    return totalQuantity;
}

function calcTotalPrice () {
     // Initialize variables
     let index = 0;
     let totalPrice = 0;
 
     // Add up all quantities in array and return
     while (index < orderItemsSize) {
         totalPrice += orderPrice[index] * orderQuantity[index];
         index++;
     }
     return totalPrice;
}

function addItemsArray (index) {
    // Add item to arrays
    orderItems[orderItemsSize] = CART_NAMES[index];
    orderQuantity[orderItemsSize] = 1;
    orderPrice[orderItemsSize] = CART_PRICES[index];

    // Increment array size indicator
    orderItemsSize += 1;
}

function displayPlaceOrderButton(show) {
    if (show == true) {
        buttonPlaceOrder.style.display = "block";
    }
    else {
        buttonPlaceOrder.style.display = "none";
        cart0.innerHTML = "<p>Nothing currently in your cart</p>";
    }
}

function displayItem (itemsIndex, cartIndex, removeItem) {

    // Declare display
    let display;

    // Assign display
    if (removeItem == true) {
        display = " ";
    }
    else {
        display =   "<div class=\"cart\">" +
                        "<img src=\"Images/Menu/" + CART_IMAGES[cartIndex] + "\" alt=\"" + CART_NAMES[cartIndex] + "\" />" +
                        "<h3>" + CART_NAMES[cartIndex] + "</h3>" +
                        "<p>Price: " + CART_PRICES[cartIndex].toFixed(2) +
                            " Quantity: " + orderQuantity[itemsIndex] + "</p>" +
                        "<button id=\"" + CART_BUTTONS[cartIndex] + "\">Remove From Cart</button>" +
                    "</div>";
    }


    switch (itemsIndex) {
        case 0:
            cart0.innerHTML = display;
            break;
        case 1:
            cart1.innerHTML = display;
            break;
        case 2:
            cart2.innerHTML = display;
            break;
        case 3:
            cart3.innerHTML = display;
            break;
        case 4:
            cart4.innerHTML = display;
            break;
        case 5:
            cart5.innerHTML = display;
            break;
        case 6:
            cart6.innerHTML = display;
            break;
        case 7:
            cart7.innerHTML = display;
            break;
        case 8:
            cart8.innerHTML = display;
            break;
        case 9:
            cart9.innerHTML = display;
            break;
        case 10:
            cart10.innerHTML = display;
            break;
        case 11:
            cart11.innerHTML = display;
            break;
        case 12:
            cart12.innerHTML = display;
            break;
        case 13:
            cart13.innerHTML = display;
            break;
        case 14:
            cart14.innerHTML = display;
            break;
        case 15:
            cart15.innerHTML = display;
            break;
        case 16:
            cart16.innerHTML = display;
            break;
        case 17:
            cart17.innerHTML = display;
            break;
        default:
            console.log("Error in displaying cart.")
            break;
    }
}

function displayTotalPrice(show) {
    // Initialize variables
    let display;

    if (show == true) {
        display = "Total: $" + calcTotalPrice().toFixed(2);
    }
    else {
        display = " "
    }

    total.innerHTML = display;
}

// Menu button functions
function addItem(itemIndex) {
    // Initialize variables
    let index = -1;

    index = searchItemsArray(CART_NAMES[itemIndex]);
    if (calcTotalQuantity() == 0) {
        displayPlaceOrderButton(true);
    }
    if (index == -1) {
        addItemsArray(itemIndex);
        displayItem (orderItemsSize -1, itemIndex, false);
    }
    else {
        orderQuantity[index] += 1;
        displayItem (index, itemIndex, false);
    }
    displayTotalPrice(true);
}

function subItem(cartIndex) {
    // Initialize index
    let index = -1;

    index = searchItemsArray(CART_NAMES[cartIndex]);
    orderQuantity[index] -= 1;
    if (orderQuantity[index] > 0) {
        displayItem(index, cartIndex, false);
    }
    else if (orderQuantity[index] == 0){
        displayItem(index, cartIndex, true);
    }
    displayTotalPrice(true);
    if (calcTotalQuantity() == 0) {
        displayPlaceOrderButton(false);
        displayTotalPrice(false);
    }
}

function addBaguette() {
    addItem(0);
}

function addSourdough() {
    addItem(1);
}

function addHoneyOat() {
    addItem(2);
}

function addRye() {
    addItem(3);   
}

function addMultigrain() {
    addItem(4);
}

function addChallah() {
    addItem(5);
}

function addHamantaschen() {
    addItem(6);  
}   

function addChocolat() {
    addItem(7);
}

function addBearClaw() {
    addItem(8);
}

function addDanish() {
    addItem(9);
}

function addChocolateChip() {
    addItem(10);
}

function addOatmealRaisin() {
    addItem(11);
}

function addSnickerdoodle() {
    addItem(12);
}

function addPeanutButter() {
    addItem(13);
}

function addKeyLime() {
    addItem(14);
}

function addAppleCrumble() {
    addItem(15);
}

function addBlueberryLattice() {
   addItem(16);
}

function addPecan() {
    addItem(17);
}

// Cart button functions
function subItems(event) {
    if (event.target.id === "removeBaguette") {
        subItem(0);
    }
    else if (event.target.id === "removeSourdough") {
        subItem(1);
    }
    else if (event.target.id === "removeHoneyOat") {
        subItem(2);
    }
    else if (event.target.id === "removeRye") {
        subItem(3);
    }
    else if (event.target.id === "removeMultigrain") {
        subItem(4);
    }
    else if (event.target.id === "removeChallah") {
        subItem(5);
    }
    else if (event.target.id === "removeHamantaschen") {
        subItem(6);
    }
    else if (event.target.id === "removeChocolat") {
        subItem(7);
    }
    else if (event.target.id === "removeBearClaw") {
        subItem(8);
    }
    else if (event.target.id === "removeDanish") {
        subItem(9);
    }
    else if (event.target.id === "removeChocolateChip") {
        subItem(10);
    }
    else if (event.target.id === "removeOatmealRaisin") {
        subItem(11);
    }
    else if (event.target.id === "removeSnickerdoodle") {
        subItem(12);
    }
    else if (event.target.id === "removePeanutButter") {
        subItem(13);
    }
    else if (event.target.id === "removeKeyLime") {
        subItem(14);
    }
    else if (event.target.id === "removeAppleCrumble") {
        subItem(15);
    }
    else if (event.target.id === "removeBlueberryLattice") {
        subItem(16);
    }
    else if (event.target.id === "removePecan") {
        subItem(17);
    }
}

// Menu button listeners
buttonBaguette.addEventListener("click", addBaguette);
buttonSourdough.addEventListener("click", addSourdough);
buttonHoneyOat.addEventListener("click", addHoneyOat);
buttonRye.addEventListener("click", addRye);
buttonMultigrain.addEventListener("click", addMultigrain);
buttonChallah.addEventListener("click", addChallah);
buttonHamantaschen.addEventListener("click", addHamantaschen);
buttonChocolat.addEventListener("click", addChocolat);
buttonBearClaw.addEventListener("click", addBearClaw);
buttonDanish.addEventListener("click", addDanish);
buttonChocolateChip.addEventListener("click", addChocolateChip);
buttonOatmealRaisin.addEventListener("click", addOatmealRaisin);
buttonSnickerdoodle.addEventListener("click", addSnickerdoodle);
buttonPeanutButter.addEventListener("click", addPeanutButter);
buttonKeyLime.addEventListener("click", addKeyLime);
buttonAppleCrumble.addEventListener("click", addAppleCrumble);
buttonBlueberryLattice.addEventListener("click", addBlueberryLattice);
buttonPecan.addEventListener("click", addPecan);


// Cart button listeners
cartContainer.addEventListener("click", subItems);
