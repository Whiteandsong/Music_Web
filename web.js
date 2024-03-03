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

var currentBackgroundIndex = 0
var backgroundImages = {
    'main-interface': ['background-images/main\ interface.day.png', 'background-images/main\ interface-dark.png'],
    'main-interface1': ['background-images/tree-day.png', 'background-images/tree-dark.png']
};

// 分屏移动
function toggleSplitInterface() {
    var splitInterface = document.getElementById('split-interface');
    var button1 = document.getElementById('button1');
    var buttons = document.querySelectorAll('.split-button');
    if (splitInterface.style.left === "-20%") {
        splitInterface.style.left = "0";
        button1.style.transition = "left 0.5s ease";
        button1.style.left = "20%"
        buttons.forEach(function(button) {
            button.style.display = "block";
        });
    } else {
        splitInterface.style.left = "-20%";
        button1.style.left = "0.5%";
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

// Icon change
function toggleIconImage() {
    var toggleButton = document.getElementById('modeIconButton');
    if (toggleButton.style.backgroundImage === 'url("icons/dark.png")') { 
        toggleButton.style.backgroundImage = 'url("icons/light.png")';
    } else {
        toggleButton.style.backgroundImage = 'url("icons/dark.png")';
    }

    toggleBackgroundImage()
}

// 根据当前界面接口切换背景图片
function toggleBackgroundImage() {
    var currentInterface = document.getElementById('currentInterfaceValue').value;
    var mainInterface = document.getElementById('main-interface');
    var mainInterface1 = document.getElementById('main-interface1');

    currentBackgroundIndex = (currentBackgroundIndex + 1) % 2
    // 根据当前界面接口修改背景图片
    if (currentInterface === 'main-interface') {
        mainInterface.style.backgroundImage = 'url("' + backgroundImages['main-interface'][currentBackgroundIndex] + '")';
    } 
    else if (currentInterface === 'main-interface1') {
        mainInterface.style.backgroundImage = 'url("' + backgroundImages['main-interface1'][currentBackgroundIndex] + '")'; 
    }
}


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
