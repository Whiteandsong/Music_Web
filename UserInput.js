document.addEventListener("DOMContentLoaded", function() {
    var openInputBtn = document.getElementById("openInputBtn");
    var inputContainer = document.getElementById("inputContainer");
    var messageInput = document.getElementById("messageInput");
    var submitBtn = document.getElementById("submitBtn");
    var messageContainer = document.getElementById("messageContainer");
    var messageCount = 0;

    openInputBtn.addEventListener("click", function() {
        inputContainer.style.display = "block";
    });

    submitBtn.addEventListener("click", function() {
        var message = messageInput.value.trim();
        if (message !== "") {
            recordMessage(message);
            messageInput.value = "";
            inputContainer.style.display = "none";
        }
    });

    function recordMessage(message) {
        if (messageCount < 5) {
            messageCount++;
            var messageElement = document.createElement("div");
            messageElement.textContent = messageCount + ": " + message;
            messageContainer.appendChild(messageElement);
        } else {
            alert("5 Tasks At Most!");
        }
    }
});
