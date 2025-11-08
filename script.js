// Query Selectors
const gridContainer = document.querySelector("#gridContainer");
const inputBox = document.querySelector("#sizeInput");
const applyButton = document.querySelector("#applyButton");
const resetButton = document.querySelector("#resetButton");
const dropDown = document.querySelector("#dropDown");

// Custom Events
const drawGrid = new Event("newInput");

// Variables
let mouseDown;
let selectedColor = dropDown.value;
let userInput = 16;
let gridContainerWidth = (0.4*window.innerWidth);
createGrid(userInput);

/* Logic */
// Disable drag
document.addEventListener("dragstart", (e) => {
    e.preventDefault(); 
});

// Enter to submit size
inputBox.addEventListener("keydown", (e) => {
    if (e.key == "Enter"){
        userInput = inputBox.value;
        document.dispatchEvent(drawGrid);
        inputBox.blur();
    }
});

// Click applybutton to change color
applyButton.addEventListener("click", () => {
    userInput = inputBox.value;
    document.dispatchEvent(drawGrid);
    inputBox.blur();
});

// When size is changed
document.addEventListener("newInput", (e) => {
    createGrid(userInput);
});
document.dispatchEvent(drawGrid);

// Reset Button
resetButton.addEventListener("click", () => {
    document.querySelectorAll(".gridDivs").forEach( (div) => {
        div.style.backgroundColor = "white";
    })
});

// Dropdown
dropDown.addEventListener("change", () => {
    selectedColor = dropDown.value;
});


// Functions
function createGrid(gridSize) {
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }

    let gridWidth =  (gridContainerWidth/16) + "px";

    for (let i = 0; i < gridSize; i++){
        let divRow = document.createElement("div");
        divRow.style.flex = `1 1 ${gridWidth}`;
        divRow.style.display = "flex";
        for (let j = 0; j < gridSize; j++){
            let gridDiv = document.createElement("div");
            gridDiv.style.flex = `1 1 ${gridWidth}`;
            gridDiv.classList.add("gridDivs");
            colorWhenClicked(gridDiv, selectedColor);
            divRow.appendChild(gridDiv);
        }
        gridContainer.appendChild(divRow);
    }
}

function colorWhenClicked (element, selectedColor){
    element.addEventListener("mousedown", function(){
        color(element, selectedColor)
        mouseDown = true;
    });

    element.addEventListener("mouseup", () => {
        mouseDown = false;
    })

    element.addEventListener("mousemove", function(e){
        if (mouseDown){
            color(element,selectedColor);
        }
    })
}

function color (element, color){
    element.style.backgroundColor = color;
}

