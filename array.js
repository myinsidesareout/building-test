let tilesData = [
    [
    [0,1,0,0,0,1,0,0],
    [1,1,1,1,1,1,1,1],
    [0,1,0,0,0,1,2,4],
    [0,1,0,0,0,1,3,4]
    ],
    [
    [0,0,1,0,0,1,0,0],
    [0,1,1,1,1,1,1,0],
    [1,0,2,4,4,2,0,1],
    [1,0,3,4,4,3,0,1]
    ],
    [
    [0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,0,2],
    [0,1,4,4,4,1,0,3]
    ],
    [
    [0,0,0,0,0,5,0,5],
    [0,0,0,0,0,0,5,0],
    [0,4,0,0,0,5,2,5],
    [1,4,1,1,1,1,3,1]
    ],
    [
    [5,5,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5],
    [0,2,4,2,0,2,0,2],
    [0,3,4,3,0,3,0,3]
    ],
    [
    [4,4,4,4,4,4,4,4,4,4,4],
    [4,4,4,4,4,4,4,4,4,4,4],
    [4,4,8,4,4,4,4,5,4,4,4],
    [4,4,8,8,4,4,4,5,5,4,4],
    [4,4,8,8,4,4,4,5,5,4,4],
    [4,4,8,8,4,4,4,5,5,4,4],
    [6,6,6,6,6,6,6,6,6,6,6]
    ]
]

console.table(tilesData);
console.table(tilesData[3]);

function tilesLoad(data) {
    // console.log("data");
    // console.log(data);
    // console.log(data.length);
    // console.log(data[length].length);
    // console.log("end data");
    removeElementsByClass("tile");
    let localGridColumn = data[length].length; // takes length of last internal array
    let localGridRow = data.length; // takes length of array
    document.getElementById("test").style.width = 100 * localGridColumn + "px";
    document.getElementById("test").style.height = 100 * localGridRow + "px";
    for (let row = 0; row < localGridRow; row++) {
        for (let column = 0; column < localGridColumn; column++) {
            // console.log(data[row][column]);
            const div = document.createElement("div");
            div.className = "tile nogrid";
            gridVisible = 0;
            // if (gridVisible = 1) {
            //     div.className = "tile grid"
            // }
            div.style.backgroundImage = "url(tile/"+data[row][column]+".png)";
            document.getElementById("test").appendChild(div);
        }
    }
}

tilesLoad(tilesData[3]);

//https://www.javascripttutorial.net/javascript-multidimensional-array/
// loop the outer array
for (let i = 0; i < tilesData.length; i++) {
    // get the size of the inner array
    var innerArrayLength = tilesData[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + tilesData[i][j]);
        var innerArrayLength2 = tilesData[i][j].length;
        for (let k = 0; k < innerArrayLength2; k++) {
            // console.log('[' + i + ',' + j + ',' + k + '] = ' + tilesData[i][j][k]);
        }
    }
    console.log("-----");
}