// Query Selectors
const gridContainer = document.querySelector("#gridContainer");
const inputBox = document.querySelector("#sizeInput");
const applyButton = document.querySelector("#applyButton");
const resetButton = document.querySelector("#resetButton");

// Custom Events
const drawGrid = new Event("newInput");

// Variables
let mouseDown;
let userInput = 16;
let gridContainerWidth = (0.4*window.innerWidth);
createGrid(userInput);

// Logic
document.addEventListener("dragstart", (e) => {
    e.preventDefault(); 
});

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
});
document.dispatchEvent(drawGrid);

resetButton.addEventListener("click", () => {
    document.querySelectorAll(".gridDivs").forEach( (div) => {
        div.style.backgroundColor = "white";
    })
});


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
            gridDiv.classList.add("gridDivs");
            colorWhenClicked(gridDiv);
            divRow.appendChild(gridDiv);
        }
        gridContainer.appendChild(divRow);
    }
}

function colorWhenClicked (element){
    element.addEventListener("mousedown", function(){
        color(element,"black")
        mouseDown = true;
    });

    element.addEventListener("mouseup", () => {
        mouseDown = false;
    })

    element.addEventListener("mousemove", function(e){
        if (mouseDown){
            color(element,"black");
        }
    })
}

function color (element, color){
    element.style.backgroundColor = color;
}


/*

When reset button is clicked:,
When grid size is changed:
    Change all div colour to default.
*/
