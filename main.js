function asTabs(node) {
  // Your code here.

  var tabs = document.querySelectorAll('div[data-tabname]');
  var buttonsContainer = document.createElement('div');

  for (var i = 0; i < tabs.length; i++) {
    var tab = tabs[i];

    var button = document.createElement('button');
    button.addEventListener('click', displayTab, false);

    var buttonName = tab.getAttribute("data-tabname");
    button.innerHTML = buttonName;
    button.setAttribute("data-tabname", buttonName);


    buttonsContainer.appendChild(button);

  }

  node.insertBefore(buttonsContainer, tabs[0]);

}

function displayTab(event) {
  var tabs = document.querySelectorAll('div[data-tabname]');
  for (var i = 0; i < tabs.length; i++) {
    var tab = tabs[i];
    tab.className = "hide";

  }
  console.log(event.target);
  var selected = event.target.getAttribute("data-tabname");
  console.log(selected);
  var theTab = document.querySelector("div[data-tabname='" + selected + "']");
  theTab.className = "";

}

// Test code
asTabs(document.querySelector("#wrapper"));