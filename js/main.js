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
        "LIST OF NUMBERS AND SYMBOLS",
        "Reveal",
        "Find your new number \n Note the symbol beside the new number",
        "Reset"
    ],
    [
        "NINE SYMBOL",
        "",
        "Your symbol is: \n NINE SYMBOL",
        "Reset"
    ]
];

let stateObj = {
    headerText : "",
    btn1: "",
    helperText: "",
    btn2: ""
};

// updateState is called by either of the two buttons on the page.
// The parameter identifies WHICH button was clicked, 1 or 2.
function updateState(buttonID) {
    console.log("Current State: " + state);
    console.log("Button ID: " + buttonID);

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
        };
    };

//    switch (buttonID) {
//        case 1: 
//            state = state + 1;
//            break;
//        case 2:
//            if (state = 0) {
//                state = state + 1;
//            } else {
//                state = 0;
//            };
//    }; // End Switch Case

    console.log("State after update: " + state);

    stateObj.headerText = pages[state][0];
    stateObj.btn1 = pages[state][1];
    stateObj.helperText = pages[state][2];
    stateObj.btn2 = pages[state][3];
    updateDisplay();
};

function updateDisplay() {

    let headerText = document.getElementById('headerText');
    headerText.innerText = stateObj.headerText;

    let btn1 = document.getElementById('btn1');
    btn1.innerText = stateObj.btn1;
//    if (state > 0) {
//        btn1.addEventListener("click", function() { updateState(state+1)});
//    };

    let helperText = document.getElementById('helperText');
    helperText.innerText = stateObj.helperText;

    let btn2 = document.getElementById('btn2');
    btn2.innerText = stateObj.btn2;
//    if (state==0) {
//        btn2.addEventListener("click", function() { updateState(1)});
//    };

};

function setNumberSymbolList () {

    let symbols = [
        '<i class="bi bi-smartwatch"></i></p>',
        '<i class="bi bi-snow2"></i></p>',
        '<i class="bi bi-suit-club-fill"></i></p>',
        '<i class="bi bi-thermometer-half"></i></p>',
        '<i class="bi bi-trash3-fill"></i></p>',
        '<i class="bi bi-alarm-fill"></i></p>',
        '<i class="bi bi-arrow-left-circle-fill"></i></p>',
        '<i class="bi bi-balloon-heart"></i></p>',
        '<i class="bi bi-bank"></i></p>',
        '<i class="bi bi-battery-charging"></i></p>',
        '<i class="bi bi-boxes"></i></p>',
        '<i class="bi bi-broadcast"></i></p>',
        '<i class="bi bi-bug-fill"></i></p>',
        '<i class="bi bi-camera"></i></p>',
        '<i class="bi bi-camera-reels-fill"></i></p>',
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
        '<i class="bi bi-eyeglasses"></i></p>'
    ];

    // let shuffled = [];

    // Shuffle
    // Modified Fisher-Yates (Knuth) algorithm

    // for (let i=0; i<=symbols.length; i++) {
    //     let randElement = (Math.floor(Math.random()*symbols.length));

    // }

    // Faux Shuffle

    let startPoint = (Math.floor(Math.random()*symbols.length));
    // console.log("Start Point for Traversing Array: " + startPoint);
    // console.log("Nines Symbol: " + symbols[startPoint]);
    // console.log("Others:");
    
    let topHalf = symbols.slice(startPoint+1);
    let bottomHalf = symbols.slice(0, startPoint);
    let fauxShuffledArray = topHalf.concat(bottomHalf);
    // console.log("Start point: " + startPoint);
    // console.log(topHalf);
    // console.log(bottomHalf);
    // console.log(fauxShuffledArray);

    // for (let i=0; i<=fauxShuffledArray.length; i++) {
    //     //console.log(i + " : " + fauxShuffledArray[i]);
    // }


    let iconTest = document.getElementById("testBoxForIcons");
    let newDiv = "";
    let newLine = "";

    for (let i=0; i<fauxShuffledArray.length; i++) {
        newLine = (newLine + "<p>" + i + " : " + fauxShuffledArray[i]);
        //iconTest.innerHTML(newLine);
        //console.log(newLine);
    };
    newDiv = newDiv + newLine;
    console.log(newDiv);
    iconTest.innerHTML=newDiv;
};

// Need to move incrementer?

updateState(0); // Initializes page

//console.log(pages[state][0]);

// for (let i=0; i<=5; i++) {
//     updateState(i);
//     console.log(stateObj);
// };

