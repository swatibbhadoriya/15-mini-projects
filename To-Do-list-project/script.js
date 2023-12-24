const todoList = document.getElementById('todo-list');
const progressBar = new ProgressBar.Circle('#progress-bar', {
  color: '#3D0C11',
  strokeWidth: 16,
  trailWidth: 14,
  duration: 1500,
  text: {
    autoStyleContainer: false
  },
  step: function(state, circle) {
    const value = Math.round(circle.value() * 100);
    circle.setText(value + '%');
    if (value === 100) {
      showAppreciation();
    }
  }
});
const todoInput = document.getElementById('todo-input');
const appreciationMessage = document.getElementById('appreciation-message');

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === '') {
    return;
  }

  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', updateProgress);

  const todoTextElement = document.createElement('span');
  todoTextElement.textContent = todoText;

  todoItem.appendChild(todoTextElement);
  todoItem.appendChild(checkbox);

  todoList.appendChild(todoItem);

  todoInput.value = '';
  updateProgress();
}

function updateProgress() {
  const totalTasks = document.querySelectorAll('.todo-item').length;
  const completedTasks = document.querySelectorAll('.todo-item input:checked').length;
  const progressPercentage = (completedTasks / totalTasks) || 0;

  progressBar.animate(progressPercentage);
}

function showAppreciation() {
  appreciationMessage.style.display = 'block';
}
