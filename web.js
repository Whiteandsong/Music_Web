var originalTexts = {
    "button2": "White Noise",
    "button3": "Natural Sound",
    "button4": "Cosmic Sound"
};

function toggleSplitInterface() {
    var splitInterface = document.getElementById('split-interface');
    var button1 = document.getElementById('button1');
    var buttons = document.querySelectorAll('.split-button');
    if (splitInterface.style.left === "-20%") {
        splitInterface.style.left = "0";
        button1.style.transition = "left 0.5s ease";
        button1.style.left = "230px"
        buttons.forEach(function(button) {
            button.style.display = "block";
        });
    } else {
        splitInterface.style.left = "-20%";
        button1.style.left = "5px";
        buttons.forEach(function(button) {
            button.style.display = "none";
        });
    }
}

function toggleButtonText(buttonId) {
    var button = document.getElementById(buttonId);
    if (button.innerHTML === originalTexts[buttonId]) { 
        button.innerHTML = "Play";
    } else {
        button.innerHTML = originalTexts[buttonId];
    }
}