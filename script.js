async function fetchTasks() {
  try {
      const response = await fetch('http://localhost:3000/api/tasks');
      const tasks = await response.json();

      // Display tasks on the webpage
      const taskContainer = document.getElementById('tasks');
      tasks.forEach(task => {
          const taskItem = document.createElement('div');
          taskItem.innerHTML = `<strong>${task.title}</strong> - Reward: $${task.reward}`;
          taskContainer.appendChild(taskItem);
      });
  } catch (error) {
      console.error('Error fetching tasks:', error);
  }
}

// Call the fetchTasks function when the page loads
window.onload = fetchTasks;
