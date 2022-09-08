const tiles = [];
var uniqueTiles = 4;

var totalTiles = -1;

var rowG = -1;
var column = 0;

function generateTile() {

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

            // document.getElementById(tileId).style.backgroundImage = "url(/tile/0.png)";

        }
    }
}

const gridColumn = 8, gridRow = 4; // 19 x 9 & 8 x 4
generateTile();

// function cycleTile(column, row) {
//     console.log(column + "," + row);
// };

function cycleTile(totalTiles) {
    var div = document.getElementById(tiles[totalTiles]);
    // console.log(div);
    // div.style.backgroundImage = "url(/tile/3.png)";
    var img = div.style.backgroundImage; 
    // console.log(img[11]);
    // console.log("test");
    var newImg = Number(img.slice(11,-6));
    if (newImg >= uniqueTiles) { 
        newImg = 0;
    } else {newImg +=1};
    // console.log("help"+newImg);
    div.style.backgroundImage = "url('/tile/"+ newImg +".png')";

};