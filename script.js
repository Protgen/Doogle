// Function to add a button
function addbuttonside() {
  var url = prompt("Enter the URL:"); // Prompt the user for the URL
  var buttonText = prompt("Enter the button text:"); // Prompt the user for the button text

  if (url && buttonText) {
    var container = document.getElementById("menutest"); // Get the container element where the new buttons should be added

    var newButton = document.createElement("button"); // Create a new button element
    newButton.innerHTML = buttonText; // Set the button text

    newButton.onclick = function() {
      window.location.href = url; // Navigate to the specified URL when the button is clicked
    };

    newButton.classList.add("custombuttonside"); // Add the "custombuttonside" class to the new button

    var ul = container.querySelector("ul"); // Get the <ul> element inside the container
    ul.insertBefore(newButton, ul.firstChild); // Insert the new button at the beginning of the <ul> element

    // Save the added button in local storage
    var buttons = JSON.parse(localStorage.getItem("addedButtonsside")) || [];
    buttons.push({ url: url, text: buttonText });
    localStorage.setItem("addedButtonsside", JSON.stringify(buttons));
  }
}

// Function to load the buttons from local storage
function loadButtonsside() {
  var container = document.getElementById("menutest"); // Get the container element
  var buttons = JSON.parse(localStorage.getItem("addedButtonsside")) || [];

  var ul = container.querySelector("ul"); // Get the <ul> element inside the container

  for (var i = 0; i < buttons.length; i++) {
    var buttonData = buttons[i];

    var newButton = document.createElement("button"); // Create a new button element
    newButton.innerHTML = buttonData.text; // Set the button text

    newButton.onclick = (function(data) {
      return function() {
        window.location.href = data.url; // Navigate to the specified URL when the button is clicked
      };
    })(buttonData);

    newButton.classList.add("custombuttonside"); // Add the "custombuttonside" class to the new button

    ul.appendChild(newButton); // Append the new button to the <ul> element
  }
}

// Load the buttons when the page is ready
document.addEventListener("DOMContentLoaded", function() {
  loadButtonsside();
});

// Function to add a button
function addbutton() {
  var url = prompt("Enter the URL:"); // Prompt the user for the URL
  var buttonText = prompt("Enter the button text:"); // Prompt the user for the button text

  if (url && buttonText) {
    var container = document.getElementById("buttonmenu"); // Get the container element where the new buttons should be added

    var newButton = document.createElement("button"); // Create a new button element
    newButton.innerHTML = buttonText; // Set the button text

    newButton.onclick = function() {
      window.location.href = url; // Navigate to the specified URL when the button is clicked
    };

    newButton.classList.add("custombutton"); // Add the "custombutton" class to the new button

    container.appendChild(newButton); // Append the new button to the container

    // Save the added button in local storage
    var buttons = JSON.parse(localStorage.getItem("addedButtons")) || [];
    buttons.push({ url: url, text: buttonText });
    localStorage.setItem("addedButtons", JSON.stringify(buttons));
  }
}

// Function to load the buttons from local storage
function loadButtons() {
  var container = document.getElementById("buttonmenu"); // Get the container element
  var buttons = JSON.parse(localStorage.getItem("addedButtons")) || [];

  for (var i = 0; i < buttons.length; i++) {
    var buttonData = buttons[i];

    var newButton = document.createElement("button"); // Create a new button element
    newButton.innerHTML = buttonData.text; // Set the button text

    newButton.onclick = (function(data) {
      return function() {
        window.location.href = data.url; // Navigate to the specified URL when the button is clicked
      };
    })(buttonData);

    newButton.classList.add("custombutton"); // Add the "custombutton" class to the new button

    container.appendChild(newButton); // Append the new button to the container
  }
}

// Load the buttons when the page is ready
document.addEventListener("DOMContentLoaded", function() {
  loadButtons();
});

function game(){
  window.location.replace("index2.html")
}