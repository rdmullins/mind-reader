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
    }

    let btn1 = document.getElementById('btn1');
    if (state == 0) {                                           // Hides first button if state = 0
        btn1.classList.add("d-none");
    };

    if (state !== 0) {                                          // Reveals first button otherwise
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

updateState(0); // Initializes page
setNumberSymbolList(); // Shuffles and sets list