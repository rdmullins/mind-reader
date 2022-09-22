# Mind Reader
### Roger Mullins
---

## SECTIONS
- [Description of Project](#description)
- [Project Requirements](#requirements)
- [Pseudocode](#pseudocode)

## DESCRIPTION
For this project, we will be implementing state management with JavaScript to create a single page web app that plays a game with the user to read their mind.

The focus is to use state management to progress forward to the next view, backward to the previous view, and reset to the first view on the page.

By default, the app should prompt the user to click through the single-page app and see a new view for every step.

You need to be able to scroll through the numbers to find your symbol (page 5 on the wireframe).

The mind reader also happens to have a fun math gimmick based on the factors of 9. This is not something you need to program, people will do the math in their heads.

## REQUIREMENTS
To complete the assignment, you must complete the following:
1. Pseudocode the problem in its entirety before you start coding
1. Use JavaScript to successfully show the transition from one view to the next view
1. Successfully show state management for each step of the single page app ("view" 1, 2, 3, ...)
1. Only create a single index.html
1. No need to refresh the page (manually or using JS)
1. Update state using a variable that tells the computer what 'view' it is
1. Use functions to move forward a view, backward, reset to the first view, and display the correct view on load / after every state change
1. Use Icons of your choice, we recommend either Bootstrap Icons (best) or Font Awesome (second best) but feel free to find your own
1. All multiples of 9 should be the same symbol (this is important for the math gimmick to work)

## Pseudocode

### Global Variables
- state (int)
- pages[]
    - Holds all 6 possible states (0-5)

### Objects
- stateObj
    - Holds current state
    - Used to populate DOM

### Event Listeners
- buttonOne
    - Always going to progress state forward
    - Increments state
    - Calls updateDisplay()
- buttonTwo
    - Moves state forward if state=0 (beginning of project)
    - Otherwise resets state to 0 (call function initialize())
    - Calls updateDisplay()

### Functions
- updateState()
    - Increment or Decrement state
    - Set values -> reads through pages array to get current values based on updated state
    - Calls updateDisplay()
- updateDisplay()
    - Actually changes DOM based on state
- symbols()
    - Holds array of available symbols
    - Assigns the same symbol to all multiples of 9
    - Assigns random symbols to all other numbers
    - Essentially provides card title element for state 4

---
### HTML Definition
(Bootstrap Card Element)

- CARD TITLE
- BUTTON
- SECONDARY TEXT
- BOTTOM BUTTON
---


### Initialize Page
1. BEGIN
1. SET state = 0
1. CALL initialize(state) function WITH state as parameter
    1. BEGIN
    1. ACCESS pageObj
    1. RETRIEVE values for given state
    1. UPDATE stateObj with retrieved values
        1. **If possible figure out how to make this immutable with spread op**
    1. END
1. CALL updateDisplay()
    1. BEGIN
    1. ACCESS stateObj
    1. POPULATE page elements with values
    1. END
1. END

Page is now in state 0, awaiting user action.

### buttonOne Event Listener = click
1. BEGIN
1. INCREMENT state
1. UPDATE stateObj
1. CALL updateDisplay()
1. END

### buttonTwo Event Listener = click
1. BEGIN
1. IF state=0
    1. INCREMENT state
    1. UPDATE stateObj
    1. CALL updateDisplay()
1. IF state > 0
    1. CALL initalize(0)
1. END

### updateState() Definition
1. BEGIN
1. ACCESS pages[state]
1. STEP through array, populating values to each key
1. END

### updateDisplay() Definition
1. BEGIN
1. ACCESS stateObj
1. GET values for each DOM element
1. SET display = values
1. END




