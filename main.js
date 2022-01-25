function threedee() {
    console.log("yay");
}

function cycleTile() {
    console.log("d");
}

/* 
things that need to be done, not necessarily in order:

provide a count of columns and rows that will generate
divs to fill
eg: generateTile(12, 7);

initialize array for all generated divs that contains 
either tile number or tile name. need to decide, you could
iterate by name if the png are enumerated. but you can just
iterate through an array with tile names associated to png
so i think it makes more sense to go by descriptive tile name.
wow this is just like minecraft :^)



*/

const column = 12, row = 7;

function generateTile(column,row) {
    /* 
    i assume this is how you are able to pass variables?
    do i initialize those in or outside of scope?
    do i allow user to change the dimensions of their
       building or hardcode?
    */
}