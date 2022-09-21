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
        "Ex: 14 is 1 + 4 = 5 /n click next to proceed",
        "Reset"
    ],
    [
        "Subtract your new number from the original number",
        "Next",
        "Ex: 14 - 5 = 9 /n click next to proceed",
        "Reset"
    ],
    [
        "LIST OF NUMBERS AND SYMBOLS",
        "Reveal",
        "Find your new number /n Note the symbol beside the new number",
        "Reset"
    ],
    [
        "NINE SYMBOL",
        "",
        "Your symbol is: /n NINE SYMBOL",
        "Reset"
    ]
];

let stateObj = {
    headerText : "",
    btn1: "",
    helperText: "",
    btn2: ""
};



//console.log(pages[state][0]);

