// Create a 16x16 grid of square divs using js
// Use Flexbox to make these divs to appear as 16x16 grid.
// When clicked, change the div color.
// User can choose their own grid size. Set the limit to 100.
// E.g. When user type/select 20, the grid will become 20x20, without changing the total pixel used.

// Query Selectors
const gridContainer = document.querySelector("#gridContainer");
const inputBox = document.querySelector("#sizeInput");
const applyButton = document.querySelector("#applyButton");

// Custom Events
const drawGrid = new Event("newInput");

// Variables
let userInput = 16;
document.dispatchEvent(drawGrid);
let gridContainerWidth = (0.4*window.innerWidth);


// Styles


// Logic
inputBox.addEventListener("keydown", (e) => {
    if (e.key == "Enter"){
        userInput = inputBox.value;
        document.dispatchEvent(drawGrid);
        inputBox.blur();
    }
});

applyButton.addEventListener("click", () => {
    userInput = inputBox.value;
    document.dispatchEvent(drawGrid);
    inputBox.blur();
});

document.addEventListener("newInput", (e) => {
    createGrid(userInput);
    console.log("Event received");
});
document.dispatchEvent(drawGrid);


// Functions
function createGrid(gridSize) {
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }

    let gridWidth =  (gridContainerWidth/16) + "px";

    for (let i = 0; i < gridSize; i++){
        let divRow = document.createElement("div");
        divRow.style.outline = "1px solid black";
        divRow.style.flex = `1 1 ${gridWidth}`;
        divRow.style.display = "flex";
        for (let j = 0; j < gridSize; j++){
            let gridDiv = document.createElement("div");
            gridDiv.style.outline = "1px solid green";
            gridDiv.style.flex = `1 1 ${gridWidth}`;
            divRow.appendChild(gridDiv);
        }
        gridContainer.appendChild(divRow);
    }
}

/*

Get an input,n from user.
Adjust gridContainer size accordingly.
Loop n times:
    Create a div with same class.
    Append div to gridContainer.
    Add eventListener, when clicked, change colour.


When reset button is clicked:,
When grid size is changed:
    Change all div colour to default.
*/
