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

// Cart container declarations
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

// Add button declarations
const buttonBaguette = document.getElementById("buttonBaguette");

// Functions
function searchItemsArray (itemName) {
    // Initialize index
    let index = 0;

    // Search array and return index
    if (orderItemsSize == 0) {
        return -1
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

function addItemsArray (index) {
    // Add item to arrays
    orderItems[orderItemsSize] = CART_NAMES[0];
    orderQuantity[orderItemsSize] = 1;

    // Increment array size indicator
    orderItemsSize += 1;
}

function displayItem (itemsIndex, cartIndex) {

    // Declare display
    let display =   "<div class=\"cart\">" +
                        "<img src=\"Images/Menu/" + CART_IMAGES[cartIndex] + "\" alt=\"" + CART_NAMES[cartIndex] + "\" />" +
                        "<h3>" + CART_NAMES[cartIndex] + "</h3>" +
                        "<p>Price: " + CART_PRICES[cartIndex].toFixed(2) +
                            " Quantity: " + orderQuantity[itemsIndex] + "</p>" +
                        "<button id=\"" + CART_BUTTONS[cartIndex] + "\">Remove From Cart</button>" +
                    "</div>";


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

// Menu button functions
function addBaguette() {
    // Initialize variables
    let index = -1;

    index = searchItemsArray(CART_NAMES[0]);
    if (index == -1) {
        addItemsArray(0);
        displayItem (orderItemsSize -1, 0);
    }
    else {
        orderQuantity[index] += 1;
        displayItem (index, 0);
    }
}


// Cart button functions
function subBaguette() {
    // Initialize variables
    let index = -1;

    index = searchItemsArray(CART_NAMES[0]);
    orderQuantity[index] -= 1;
}

// Menu button listeners
buttonBaguette.addEventListener("click", addBaguette);

// Cart button listeners

