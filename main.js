const tiles = [];
var uniqueTiles = 9; // number of images in /tile/
console.log(tiles);

var totalTiles = -1;

var rowG = -1;
var column = 0;

// https://stackoverflow.com/a/14066534
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    totalTiles = -1;
}

function generateTiles() {
    gridVisible = 1;
    gridColumn = document.getElementById("column").value
    gridRow = document.getElementById("row").value
    removeElementsByClass("tile");
    // console.log("help" + '\n' + gridColumn + '\n' + gridRow);

    document.getElementById("test").style.width = 100 * gridColumn + "px";
    document.getElementById("test").style.height = 100 * gridRow + "px";

    for (let row = 0; row < gridRow; row++) {
        rowG++;
        for (let column = 0; column < gridColumn; column++) {
            const div = document.createElement("div");
            totalTiles++;
            div.setAttribute("onclick", "cycleTile("+totalTiles+");");

            var tileId = "tile(" + column + "," + row + ")";
            // console.log("tileId:" + tileId);
            div.id = tileId; 

            
            // tiles[totalTiles] = totalTiles;
            tiles[totalTiles] = tileId;
            tiles[column][row] = tileId;
            // console.log("c,r:" + tiles[column,row]);
            
            // console.log("tiles[totalTiles]:"+tiles[totalTiles]);
            
            div.className = "tile";

            document.getElementById("test").appendChild(div);

            // document.getElementById(tileId).style.backgroundImage = "url(tile/0.png)";

        }
    }
}

// let over const cuz i want users to be able to change this in console
let gridColumn = 8, gridRow = 4; 

// generateTiles();

// function cycleTile(column, row) {
//     console.log(column + "," + row);
// };

function cycleTile(totalTiles) {
    var div = document.getElementById(tiles[totalTiles]);
    // console.log(div);
    // div.style.backgroundImage = "url(tile/3.png)";
    var img = div.style.backgroundImage; 
    // console.log(img[11]);
    // console.log("test");
    var newImg = Number(img.slice(10,-6));
    if (newImg >= uniqueTiles) { 
        newImg = 0;
    } else {newImg +=1};
    // console.log("help"+newImg);
    div.style.backgroundImage = "url(tile/"+ newImg +".png)";

};

// get rid of most of this, consolidate with array.js and make size of canvas responsive 
// (19x9 tiles but the tiles are smaller/larger)

let gridVisible = 1; 
function toggleGridlines() {
    if (gridVisible == 1) {
        gridVisible = 0;
        let gridTile = document.querySelectorAll('.tile');

        for (const tile of gridTile) {
            tile.classList.add('nogrid');
        }
    }
    else {
        gridVisible++;
        let gridTile = document.querySelectorAll('.tile');

        for (const tile of gridTile) {
            tile.classList.remove('nogrid');
        }
    }
    console.log(gridVisible);
};