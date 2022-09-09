let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

console.table(activities);
console.log(activities[3][0]); // 🤭

// -----

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
    ]
]

console.table(tilesData);

function tilesLoad(data) {
    removeElementsByClass("tile");
    document.getElementById("test").style.width = 100 * gridColumn + "px";
    document.getElementById("test").style.height = 100 * gridRow + "px";
    for (let row = 0; row < gridRow; row++) {
        for (let column = 0; column < gridColumn; column++) {
            console.log(data[row][column]);
            const div = document.createElement("div");
            div.className = "tile";
            div.style.backgroundImage = "url(/tile/"+data[row][column]+".png)";
            document.getElementById("test").appendChild(div);
        }
    }
}

tilesLoad(tilesData[3]);