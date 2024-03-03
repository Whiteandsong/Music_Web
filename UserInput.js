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
            recordMessage(message, false); // 默认为未完成状态
            messageInput.value = "";
            inputContainer.style.display = "none";
            updateLocalStorage(); // 更新本地存储
        }
    });

    clearBtn.addEventListener("click", function() {
        messageContainer.innerHTML = ""; // 清除任务列表中的所有内容
        messageCount = 0;
        localStorage.removeItem("tasks"); // 清除本地存储中的任务数据
    });

    // 页面加载时从本地存储中获取数据并渲染到页面上
    function loadTasksFromLocalStorage() {
        var tasks = localStorage.getItem("tasks");
        if (tasks) {
            tasks = JSON.parse(tasks);
            tasks.forEach(function(task) {
                var completed = task.completed || false;
                recordMessage(task.text, completed); // 根据任务完成状态渲染任务
            });
        }
    }

    // 将任务信息保存到本地存储中
    function updateLocalStorage() {
        var tasks = [];
        var taskButtons = document.querySelectorAll(".task");
        taskButtons.forEach(function(button) {
            var task = {
                text: button.textContent.replace(/^\d+:/, "").trim(),
                completed: button.classList.contains("completed") // 记录任务的完成状态
            };
            tasks.push(task);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function recordMessage(message, completed) {
        if (messageCount < 8) {
            messageCount++;
            var taskDiv = document.createElement("div"); // 创建一个新的 <div> 元素
            var taskButton = document.createElement("button");
            taskButton.classList.add("task");
            taskButton.textContent = messageCount + ": " + message;
            if (completed) {
                taskButton.classList.add("completed"); // 如果任务为已完成状态，则添加 completed 类
            }
            taskButton.addEventListener("click", function() {
                // 切换任务的完成状态
                this.classList.toggle("completed");
                updateLocalStorage(); // 更新本地存储
            });
            taskDiv.appendChild(taskButton); // 将按钮添加到新创建的 <div> 元素中
            messageContainer.appendChild(taskDiv); // 将整个 <div> 元素添加到容器中
        } else {
            alert("8 Tasks At Most!");
        }
    }

    // 页面加载时从本地存储中加载数据
    loadTasksFromLocalStorage();
});
