// Creates a new list item when clicking on the "Add" button
function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputValue));
        document.getElementById("myUL").appendChild(li);
        document.getElementById("myInput").value = "";

        // Add the checkElement function to the newly created li element
        li.onclick = checkElement;
    }
}

// Checks off a list element
function checkElement() {
    this.classList.toggle("checked");
}