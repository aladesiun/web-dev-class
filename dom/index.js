// basics
// Dom 
// DSA/problem solving

// DOM
// document Object Model

// Accessing The Dom
// Manipulation
// Event listeners

EV => (EVENTTYPE, CALLBACKH)


// Accessing The Dom
// Selecting  elements=> examples
// TAG NAME, BY ID, CLASS, ATTRIBUTES
const divs = document.querySelectorAll("#note");

for (let i = 0; i < divs.length; i++) {
    let singleDiv = divs[i]
    singleDiv.addEventListener("mouseenter", divEvent)
    singleDiv.addEventListener("mouseleave", divRemoveEvent)
}

function divEvent(div) {
    div.srcElement.classList.add("eventAdded");
}

function divRemoveEvent(div) {
    div.srcElement.classList.remove("eventAdded");
}


