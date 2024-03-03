let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.textContent = `${index + 1}. ${task}`;
    taskItem.classList.add('taskItem');
    if (localStorage.getItem('task_' + index) === 'completed') {
      taskItem.classList.add('completed');
    }
    taskItem.addEventListener('click', () => {
      taskItem.classList.toggle('completed');
      if (taskItem.classList.contains('completed')) {
        localStorage.setItem('task_' + index, 'completed');
      } else {
        localStorage.removeItem('task_' + index);
      }
    });
    taskList.appendChild(taskItem);
  });
}

function openInput() {
  document.getElementById('inputContainer').style.display = 'block';
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  if (task !== '') {
    if (tasks.length < 8) { // add tasks limit
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
      taskInput.value = '';
      document.getElementById('inputContainer').style.display = 'none';
    } else {
      alert("Don't stress yourself, 8 tasks is enough!");
      document.getElementById('inputContainer').style.display = 'none'
    }
  }
}

function clearTasks() {
  localStorage.clear();
  tasks = [];
  renderTasks();
}

renderTasks();
