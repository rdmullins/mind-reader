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

    if (buttonID = 1) {
        state = state + 1;
    };

    if (buttonID = 2) {
        if (state = 0) {
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

    console.log(state);

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

// Need to move incrementer?

updateState(0); // Initializes page

//console.log(pages[state][0]);

// for (let i=0; i<=5; i++) {
//     updateState(i);
//     console.log(stateObj);
// };

