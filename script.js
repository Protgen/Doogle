function addbuttonside() {
    var url = prompt("Enter the website URL:");
    if (url) {
      var buttonText = prompt("Enter the button text:");
      if (buttonText) {
        var newButton = document.createElement("button");
        newButton.textContent = buttonText;
        newButton.addEventListener("click", function() {
          window.location.href = url;
        });
        newButton.classList.add("custombuttonside");
  
        var addButtonElement = document.getElementById("addstuffside");
        addButtonElement.insertAdjacentElement("beforebegin", newButton);
      }
    }
  }

  function addbutton() {
    var url = prompt("Enter the website URL:");
    if (url) {
      var buttonText = prompt("Enter the button text:");
      if (buttonText) {
        var newButton = document.createElement("button");
        newButton.textContent = buttonText;
        newButton.addEventListener("click", function() {
          window.location.href = url;
        });
        newButton.classList.add("custombutton");
  
        var addButtonElement = document.getElementById("addstuff");
        addButtonElement.insertAdjacentElement("beforebegin", newButton);
      }
    }
  }