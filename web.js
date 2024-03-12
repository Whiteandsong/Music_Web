var currentBackgroundIndex = 0;

var backgroundImages = {
    'main-interface': ['background-images/main\ interface.day.png', 'background-images/main\ interface-dark.png'],
    'main-interface4': ['background-images/tree.day.png', 'background-images/tree-dark.png'],
    'main-interface2': ['background-images/day-day.png', 'background-images/day-dark.png'],
    'main-interface3': ['background-images/city-day.jpg', 'background-images/city-dark.jpg'],
    'main-interface1': ['background-images/sky-day.png', 'background-images/sky-dark.png'],
};

var currentImageIndex = 0;
var statusImages= [
    'icons/Reading.png',
    'icons/Enjoy.png',
    'icons/Sleep.png',];

var messageArray = [
    "Congratulations! You've learned",
    "It's time for work! You've enjoyed",
    "Welcome back! You've slept for",];

// Move SplitInterface
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

//change status
function statustoggleImage() {
    var toggleButton = document.getElementById('statusIconButton');

    currentImageIndex = (currentImageIndex + 1) % statusImages.length;
    
    toggleButton.style.backgroundImage = 'url("' + statusImages[currentImageIndex] + '")';
    
    toggleButtonText(currentImageIndex)
}

//text change
function toggleButtonText(currentImageIndex) {
    var button = document.getElementById('congratsMessage');
    button.innerHTML = messageArray[currentImageIndex]
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
    var timerDisplay = document.getElementById('timerDisplay')
    var congratsMessage = document.getElementById("congratsMessage");

    if (toggleButton.style.backgroundImage === 'url("icons/dark.png")') { 
        toggleButton.style.backgroundImage = 'url("icons/light.png")';
        if (timerDisplay){
            timerDisplay.style.color = 'black'
            congratsMessage.style.color = 'black'
        }
    } else {
        toggleButton.style.backgroundImage = 'url("icons/dark.png")';
        if (timerDisplay){
            timerDisplay.style.color = 'white'
            congratsMessage.style.color = 'white'
        }
    }

    toggleBackgroundImage()
}

// Change Backgrounimage
function toggleBackgroundImage() {
    var currentInterface = document.getElementById('currentInterfaceValue').value;
    var mainInterface = document.getElementById('main-interface');
    var mainInterface1 = document.getElementById('main-interface1');
    var mainInterface2 = document.getElementById('main-interface2');
    var mainInterface3 = document.getElementById('main-interface3');
    var mainInterface4 = document.getElementById('main-interface4');

    currentBackgroundIndex = (currentBackgroundIndex + 1) % 2
    // According to the currentInterface to change background
    if (currentInterface === 'main-interface') {
        mainInterface.style.backgroundImage = 'url("' + backgroundImages['main-interface'][currentBackgroundIndex] + '")';
    } 
    else if (currentInterface === 'main-interface1') {
        mainInterface1.style.backgroundImage = 'url("' + backgroundImages['main-interface1'][currentBackgroundIndex] + '")'; 
    }
    else if (currentInterface === 'main-interface2') {
        mainInterface2.style.backgroundImage = 'url("' + backgroundImages['main-interface2'][currentBackgroundIndex] + '")'; 
    }
    else if (currentInterface === 'main-interface3') {
        mainInterface3.style.backgroundImage = 'url("' + backgroundImages['main-interface3'][currentBackgroundIndex] + '")'; 
    }
    else if (currentInterface === 'main-interface4') {
        mainInterface4.style.backgroundImage = 'url("' + backgroundImages['main-interface4'][currentBackgroundIndex] + '")'; 
    }
}


document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.music-button');
    var audioPlayer = document.getElementById('audioPlayer');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var musicFile = button.getAttribute('data-music');
            // alert('Button clicked: ' + button.id);
            if (musicFile) {
                audioPlayer.src = musicFile;
                audioPlayer.play();
            }
        });
    });
});


let currentGuide = 1;
const totalGuides = 4; 

const guidePositions = {
    1: { top: '8%', left: '15%' },
    2: { top: '80%', left: '28%' },
    3: { top: '80%', left: '52%' },
    4: { top: '80%', left: '75%' },
  };

function showConfirmation() {
    document.getElementById('confirmation').style.display = 'block';
}

function acceptGuide() {
    document.getElementById('confirmation').style.display = 'none';
    showGuide();
}

function rejectGuide() {
    document.getElementById('confirmation').style.display = 'none';
}

function showGuide() {
    const nextGuideElement = document.getElementById('guide' + currentGuide);
    nextGuideElement.classList.add('active');

    if (guidePositions[currentGuide]) {
      nextGuideElement.style.top = guidePositions[currentGuide].top;
      nextGuideElement.style.left = guidePositions[currentGuide].left;
    }
}

function nextGuide() {
    if (currentGuide < totalGuides) {
      document.getElementById('guide' + currentGuide).classList.remove('active');
      currentGuide++;
      showGuide();
    } else {
      alert('Instructions Finished');
      document.getElementById('guide' + currentGuide).classList.remove('active');
    }
}