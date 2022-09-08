/* 
things that need to be done, not necessarily in order:

initialize array for all generated divs that contains 
either tile number or tile name. need to decide, you could
iterate by name if the png are enumerated. but you can just
iterate through an array with tile names associated to png
so i think it makes more sense to go by descriptive tile name.
wow this is just like minecraft :^)



*/

function addElement() {
    var div = document.createElement("div");
    //div.innerHTML = "Hello";
    div.className = "tile";

document.getElementById("test").appendChild(div);
  }

//const column = 1, row = 4;

function generateTile(column,row) {

    document.getElementById("test").style.width = 100 * column + "px";
    document.getElementById("test").style.height = 100 * row + "px";

    for (let tileCount = 0; tileCount < column * row; tileCount++) {
        addElement();
    }
    
}

generateTile(12,9)