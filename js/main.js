// Mind Reader
// Roger Mullins

let state = 0;
let pages = [
    [
        "I can read your mind",
        "",
        "",
        "Go"
    ],
    [
        "Pick a number from 01 - 99",
        "Next",
        "when you have your number click next",
        "Reset"
    ],
    [
        "Add both digits together to get a new number",
        "Next",
        "Ex: 14 is 1 + 4 = 5 \n click next to proceed",
        "Reset"
    ],
    [
        "Subtract your new number from the original number",
        "Next",
        "Ex: 14 - 5 = 9 \n click next to proceed",
        "Reset"
    ],
    [
        "LIST OF NUMBERS AND SYMBOLS (This gets dynamically replaced)",
        "Reveal",
        "Find your new number \n Note the symbol beside the new number",
        "Reset"
    ],
    [
        "NINE SYMBOL (This gets dynamically replaced)",
        "",
        "Your symbol is: \n NINE SYMBOL (This gets dynamically replaced)",
        "Reset"
    ]
];

let stateObj = {
    headerText : "",
    btn1: "",
    helperText: "",
    btn2: ""
};

function buildUI() {
    // Creates HTML elements
  
    function createElement(parentID, typeOfElement, bootstrapClasses, idString, innerText = "") {
      let target = document.getElementById(parentID);
      let newElement = document.createElement(typeOfElement);
      newElement.classList.add(...bootstrapClasses);
      newElement.setAttribute("id", idString);
      if (innerText != "") {
        newElement.innerText = innerText;
      }
      target.appendChild(newElement);
    };
  
    function createNavToggle() {
      let target = document.getElementById('nav-bar-container');
      let newButton = document.createElement('button');
      newButton.classList.add('navbar-toggler');
      newButton.setAttribute('type', 'button');
      newButton.setAttribute('data-bs-toggle', 'collapse');
      newButton.setAttribute('data-bs-target', '#nav-menu');
      newButton.setAttribute('id', 'hamburger');
      target.appendChild(newButton);
    }
  
    function createInputSection() {
      let target = document.getElementById('input-div');
      let inputBox = document.createElement('input');
      inputBox.classList.add("form-control");
      inputBox.setAttribute("type", "text");
      inputBox.setAttribute("placeholder", "Enter a 5-digit ZIP code");
      inputBox.setAttribute("id", "zip-in");
      target.appendChild(inputBox);
  
      let zipButton = document.createElement('button');
      zipButton.classList.add("btn");
      zipButton.classList.add("btn-dark");
      zipButton.classList.add("btn-lg");
      zipButton.setAttribute("type", "button");
      zipButton.setAttribute("id", "zipButton");
      zipButton.setAttribute("onclick", "getZip()");
      zipButton.innerText = "Submit";
      target.appendChild(zipButton);
    };
  
    function addModalTrigger(elementID, destination) {
      let e = document.getElementById(elementID);
      e.classList.add("btn");
      //e.classList.add("btn-primary");
      e.setAttribute("data-bs-toggle", "modal");
      e.setAttribute("data-bs-target", ("#"+destination));
    };
  
    function addModalCloseButton(divIn) {
      let e = document.getElementById(divIn);
      e.setAttribute("type", "button");
      e.setAttribute("data-bs-dismiss", "modal");
      e.setAttribute("aria-label", "Close");
    };
  
    // Main Application Container
    createElement("main", "div", ["container"], "appContainer");
  
    // Navigation Bar
    createElement("appContainer", "nav", ['navbar', 'navbar-expand-sm', 'py-3'], "navbar");
    createElement("navbar", "div", ["container"], "nav-bar-container");
    createElement("nav-bar-container", "h1", ["navbar-brand", "display-5"], "navbarBrand", "Roger's Mindreader App");
    createNavToggle();
    createElement("hamburger", "span", ["navbar-toggler-icon"], "hamburger-icon");
    createElement("nav-bar-container", "div", ["collapse", "navbar-collapse"], "nav-menu");
    createElement("nav-menu", "ul", ["navbar-nav", "ms-auto"], "nav-list");
    createElement("nav-list", "li", ["nav-item"], "nav-list-item-1");
    createElement("nav-list-item-1", "button", ["btn", "btn-outline-dark"], "about-link", "About");
    addModalTrigger("about-link", "aboutModal");
    createElement("nav-list", "li", ["nav-item"], "nav-list-item-2");
    createElement("nav-list-item-2", "button", ["btn", "btn-outline-dark"], "contact-link", "Contact");
    addModalTrigger("contact-link", "contactModal");

    // Main Page
    // See side notes for div ids for automatic populating

    createElement("main", "div", ["container-flex"], "app-container");
    createElement("app-container", "div", ["row", "symbol-box"], "symbol-box-row");
    createElement("symbol-box-row", "div", ["col", "align-content-center", "display-5", "box-height", "padding-top-5"], "headerText"); // headerText
    createElement("app-container", "div", ["row", "justify-content-center"], "top-button");
    createElement("top-button", "div", ["col", "d-flex", "justify-content-center"], "top-button-col");
    createElement("top-button-col", "button", ["btn", "btn-primary"], "btn1");

        let e = document.getElementById("btn1");
        e.setAttribute("onclick", "updateState(1)");

    createElement("main", "div", ["row", "d-flex", "justify-content-center", "align-items-center"], "helper-text-row");
    createElement("helper-text-row", "div", ["col", "helper-text", "box-height"], "helperText"); // helperText
    createElement("main", "div", ["row", "justify-content-center"], "middle-button-row");
    createElement("middle-button-row", "div", ["col", "d-flex", "justify-content-center"], "middle-button-col");
    createElement("middle-button-col", "button", ["btn", "btn-primary", "justify-content-center"], "btn2");

        e = document.getElementById("btn2");
        e.setAttribute("onclick", "updateState(2)");

    // About Modal
    createElement("appContainer", "div", ["modal", "fade"], "aboutModal");
    createElement("aboutModal", "div", ["modal-dialog"], "aboutDialog");
    createElement("aboutDialog", "div", ["modal-content"], "aboutContent");
    createElement("aboutContent", "div", ["modal-header"], "aboutHeader");
    createElement("aboutHeader", "h5", ["modal-title"], "aboutTitle", "About Roger's Mindreader App");
    createElement("aboutHeader", "button", ["btn-close"], "aboutHeaderBtn");
    addModalCloseButton("aboutHeaderBtn");
    createElement("aboutContent", "div", ["modal-body"], "aboutBody", "Roger's Mindreader App\nAwesome Inc. Web Developer Bootcamp\nFall 2022\nMIT License");
    createElement("aboutContent", "div", ["modal-footer"], "aboutFooter");
    createElement("aboutFooter", "button", ["btn", "btn-secondary"], "aboutFooterCloseButton", "Dismiss");
    addModalCloseButton("aboutFooterCloseButton");
  
    // Contact Modal
    createElement("appContainer", "div", ["modal", "fade"], "contactModal");
    createElement("contactModal", "div", ["modal-dialog"], "contactDialog");
    createElement("contactDialog", "div", ["modal-content"], "contactContent");
    createElement("contactContent", "div", ["modal-header"], "contactHeader");
    createElement("contactHeader", "h5", ["modal-title"], "contactTitle", "Contact the Developer");
    createElement("contactHeader", "button", ["btn-close"], "contactHeaderBtn");
    addModalCloseButton("contactHeaderBtn");
    createElement("contactContent", "div", ["modal-body"], "contactBody", "Roger Mullins\nrogermullins.mba@gmail.com");
    createElement("contactContent", "div", ["modal-footer"], "contactFooter");
    createElement("contactFooter", "button", ["btn", "btn-secondary"], "contactFooterCloseButton", "Dismiss");
    addModalCloseButton("contactFooterCloseButton");
  };


function updateState(buttonID) {
    // updateState is called by either of the two buttons on the page.
    // The parameter identifies WHICH button was clicked, 1 or 2 (or 0, for page load)
    // console.log("Current State: " + state);
    // console.log("Button ID: " + buttonID);

    if (buttonID == 0) {          // First time through - initialize
        state = 0;
    }

    if (buttonID == 1) {          // Top Button - Always moves state forward
        state = state + 1;
    };

    if (buttonID == 2) {          // Bottom Button - On first screen, move forward; otherwise, reset to 0
        if (state == 0) {
            state = state + 1;
        } else {
            state = 0;
            setNumberSymbolList();
        };
    };

    // console.log("State after update: " + state);

    stateObj.headerText = pages[state][0];
    stateObj.btn1 = pages[state][1];
    stateObj.helperText = pages[state][2];
    stateObj.btn2 = pages[state][3];
    updateDisplay();
}; // End updateState()

function updateDisplay() {

    let headerText = document.getElementById('headerText');
    if ((state == 4) || (state == 5)) {                         // innerText vs innerHTML
        headerText.innerHTML = stateObj.headerText;             // For dynamically-generated content
    } else {                                                    // in states 4 and 5, innerHTML is used
        headerText.innerText = stateObj.headerText;             // For static text, innerText works
    };

    if (state == 5) {
        headerText.classList.add('symbol-reveal');              // Increases final font size
    };

    if (state !== 5) {
        headerText.classList.remove('symbol-reveal');           // Resets font size for states other than 5
    };

    let btn1 = document.getElementById('btn1');
    if ((state == 0) || (state == 5)) {                         // Hides first button if state = 0 or 5
        btn1.classList.add("d-none");
    };

    if ((state !== 0) && (state !== 5)) {                                          // Reveals first button otherwise
        btn1.classList.remove("d-none");
    };
    btn1.innerText = stateObj.btn1;

    let helperText = document.getElementById('helperText');     // innerText vs HTML
    if (state == 5) {                                           // See description above
        helperText.innerHTML = stateObj.helperText;
    } else {
        helperText.innerText = stateObj.helperText;
    };

    let btn2 = document.getElementById('btn2');
    
    btn2.innerText = stateObj.btn2;

}; // End updateDisplay()

function setNumberSymbolList () {
// Defines an array of 100 icons
// Performs a faux shuffle
// Builds a DOM element with content for states 4 and 5
// Inserts dynamic element back into pages array for use by updateDisplay()

    let symbols = [
        '<i class="bi bi-smartwatch"></i></p>',
        '<i class="bi bi-snow2"></i></p>',
        '<i class="bi bi-suit-club-fill"></i></p>',
        '<i class="bi bi-fuel-pump-diesel-fill"></i></p>',
        '<i class="bi bi-thermometer-half"></i></p>',
        '<i class="bi bi-trash3-fill"></i></p>',
        '<i class="bi bi-alarm-fill"></i></p>',
        '<i class="bi bi-arrow-left-circle-fill"></i></p>',
        '<i class="bi bi-balloon-heart"></i></p>',
        '<i class="bi bi-flower2"></i></p>',
        '<i class="bi bi-bank"></i></p>',
        '<i class="bi bi-battery-charging"></i></p>',
        '<i class="bi bi-boxes"></i></p>',
        '<i class="bi bi-broadcast"></i></p>',
        '<i class="bi bi-bug-fill"></i></p>',
        '<i class="bi bi-camera"></i></p>',
        '<i class="bi bi-camera-reels-fill"></i></p>',
        '<i class="bi bi-yin-yang"></i></p>',
        '<i class="bi bi-flag-fill"></i></p>',
        '<i class="bi bi-card-image"></i></p>',
        '<i class="bi bi-cart"></i></p>',
        '<i class="bi bi-chat"></i></p>',
        '<i class="bi bi-chat-text-fill"></i></p>',
        '<i class="bi bi-clipboard-pulse"></i></p>',
        '<i class="bi bi-cloud-drizzle"></i></p>',
        '<i class="bi bi-cloud-haze2"></i></p>',
        '<i class="bi bi-cloud-sun"></i></p>',
        '<i class="bi bi-cone-striped"></i></p>',
        '<i class="bi bi-cup-hot-fill"></i></p>',
        '<i class="bi bi-controller"></i></p>',
        '<i class="bi bi-dice-5"></i></p>',
        '<i class="bi bi-dribbble"></i></p>',
        '<i class="bi bi-droplet-half"></i></p>',
        '<i class="bi bi-emoji-sunglasses"></i></p>',
        '<i class="bi bi-eyeglasses"></i></p>',
        '<i class="bi bi-file-earmark-music"></i></p>',
        '<i class="bi bi-wrench-adjustable"></i></p>',
        '<i class="bi bi-file-text-fill"></i></p>',
        '<i class="bi bi-tags-fill"></i></p>',
        '<i class="bi bi-file-zip-fill"></i></p>',
        '<i class="bi bi-film"></i></p>',
        '<i class="bi bi-filter-circle"></i></p>',
        '<i class="bi bi-fingerprint"></i></p>',
        '<i class="bi bi-stoplights-fill"></i></p>',
        '<i class="bi bi-fire"></i></p>',
        '<i class="bi bi-flag"></i></p>',
        '<i class="bi bi-flower1"></i></p>',
        '<i class="bi bi-folder"></i></p>',
        '<i class="bi bi-fuel-pump"></i></p>',
        '<i class="bi bi-funnel"></i></p>',
        '<i class="bi bi-gear"></i></p>',
        '<i class="bi bi-geo-alt-fill"></i></p>',
        '<i class="bi bi-thermometer-snow"></i></p>',
        '<i class="bi bi-gift-fill"></i></p>',
        '<i class="bi bi-globe2"></i></p>',
        '<i class="bi bi-graph-down"></i></p>',
        '<i class="bi bi-sunset"></i></p>',
        '<i class="bi bi-graph-up-arrow"></i></p>',
        '<i class="bi bi-hammer"></i></p>',
        '<i class="bi bi-hand-index-thumb"></i></p>',
        '<i class="bi bi-handbag-fill"></i></p>',
        '<i class="bi bi-star-fill"></i></p>',
        '<i class="bi bi-headphones"></i></p>',
        '<i class="bi bi-heart-arrow"></i></p>',
        '<i class="bi bi-hourglass"></i></p>',
        '<i class="bi bi-house-heart-fill"></i></p>',
        '<i class="bi bi-journal-bookmark-fill"></i></p>',
        '<i class="bi bi-usb-symbol"></i></p>',
        '<i class="bi bi-joystick"></i></p>',
        '<i class="bi bi-key"></i></p>',
        '<i class="bi bi-keyboard-fill"></i></p>',
        '<i class="bi bi-stoplights"></i></p>',
        '<i class="bi bi-lamp"></i></p>',
        '<i class="bi bi-life-preserver"></i></p>',
        '<i class="bi bi-lightbulb-fill"></i></p>',
        '<i class="bi bi-magic"></i></p>',
        '<i class="bi bi-megaphone"></i></p>',
        '<i class="bi bi-magnet"></i></p>',
        '<i class="bi bi-mic-fill"></i></p>',
        '<i class="bi bi-moon-stars-fill"></i></p>',
        '<i class="bi bi-mortarboard-fill"></i></p>',
        '<i class="bi bi-newspaper"></i></p>',
        '<i class="bi bi-palette"></i></p>',
        '<i class="bi bi-peace"></i></p>',
        '<i class="bi bi-triangle-half"></i></p>',
        '<i class="bi bi-piggy-bank"></i></p>',
        '<i class="bi bi-plug-fill"></i></p>',
        '<i class="bi bi-puzzle-fill"></i></p>',
        '<i class="bi bi-rss-fill"></i></p>',
        '<i class="bi bi-scissors"></i></p>',
        '<i class="bi bi-screwdriver"></i></p>',
        '<i class="bi bi-send"></i></p>',
        '<i class="bi bi-sign-stop-fill"></i></p>',
        '<i class="bi bi-suit-spade"></i></p>',
        '<i class="bi bi-tornado"></i></p>',
        '<i class="bi bi-trophy"></i></p>',
        '<i class="bi bi-tree"></i></p>',
        '<i class="bi bi-truck"></i></p>',
        '<i class="bi bi-umbrella"></i></p>',
        '<i class="bi bi-vector-pen"></i></p>',
        '<i class="bi bi-wrench"></i></p>'
    ];

    // Faux Shuffle
    // Takes the symbols array, removes a random element to use for the nines symbol, puts together new array

    let startPoint = (Math.floor(Math.random()*symbols.length));        // Determine random array element start index (also nines symbol)

    let topHalf = symbols.slice(startPoint+1);                          // Slice top half of array (portion beyond startPoint)
    let bottomHalf = symbols.slice(0, startPoint);                      // Slice bottom half of array (portion up to startPoint)
    let fauxShuffledArray = topHalf.concat(bottomHalf);                 // Concatenates two portions, flipped from their original spot

    let newDiv = "";
    
    for (let i=0; i<fauxShuffledArray.length; i++) {

        if (i%9==0) {
            newDiv = (newDiv + "<p>" + i + " : " + fauxShuffledArray[startPoint]);
        } else {
            newDiv = (newDiv + "<p>" + i + " : " + fauxShuffledArray[i]);
        };

    };

    // Insert the dynamically generated content into the pages array

    pages[4][0] = newDiv;
    pages[5][0] = fauxShuffledArray[startPoint];
    pages[5][2] = ("Your symbol is " + fauxShuffledArray[startPoint]);
}; // End setNumberSymbolList()

buildUI();
updateState(0); // Initializes page
setNumberSymbolList(); // Shuffles and sets list