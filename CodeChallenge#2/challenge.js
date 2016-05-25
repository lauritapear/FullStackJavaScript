// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.
var new_row = document.createElement("div");
new_row.setAttribute("class", "planet" );
// Add some text
new_row.appendChild( document.createTextNode("here is the planet") );
// Change backgroundColor
new_row.style.backgroundColor='red';
// Add it to the document body
document.body.appendChild( new_row );


// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.
