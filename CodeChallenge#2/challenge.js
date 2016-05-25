// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.
var thePlanet = document.createElement("div");
thePlanet.setAttribute("class", "planet" );
// Add some text
thePlanet.appendChild( document.createTextNode("here is the planet") );
// Change backgroundColor
thePlanet.style.backgroundColor='red';
// Add it to the document body
document.body.appendChild( thePlanet );

// Part 2: Create a new div of class "moon" and append it to the planet
//in the DOM.
var theMoon = document.createElement("div");
theMoon.setAttribute("class", "moon" );
// Add some text
theMoon.appendChild( document.createTextNode("Moon") );
// Change backgroundColor
theMoon.style.backgroundColor='green';

// Add moon to the planet
thePlanet.appendChild(theMoon);
