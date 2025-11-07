// Create a 16x16 grid of square divs using js
// Use Flexbox to make these divs to appear as 16x16 grid.
// When clicked, change the div color.
// User can choose their own grid size. Set the limit to 100.
// E.g. When user type/select 20, the grid will become 20x20, without changing the total pixel used.

const gridContainer = document.querySelector("#gridContainer");


/*

Set gridContainer -> display:flex
    Allow flex-wrap.
    Define a fixed size for each grid.
    Set the width of gridContainer = gridSize*n

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
