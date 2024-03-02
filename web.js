var originalTexts = {
    "button2": "White Noise",
    "button3": "Natural Sound",
    "button4": "Cosmic Sound",
    "button5": "Sound",
    "main": "Main",
    "1": "Sound 1",
    "2": "Sound 2",
    "3": "Sound 3"

};

// 分屏移动
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
        button1.style.left = "13px";
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

// Change Mode
function toggleIconImage() {
    var iconImage = document.getElementById('iconImage');
    if (iconImage.src === "icon1.png") { 
        iconImage.src = ".png";
    } else {
        iconImage.src = "icon1.png";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.split-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetPage = button.getAttribute('data-target');
            if (targetPage) {
                window.location.href = targetPage;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.music-button');
    var audioPlayer = document.getElementById('audioPlayer');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var musicFile = button.getAttribute('data-music');
            if (musicFile) {
                audioPlayer.src = musicFile;
                audioPlayer.play();
            }
        });
    });
});
