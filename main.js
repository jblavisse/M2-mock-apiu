let tasks = document.getElementById("tasks");
console.log(tasks);

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((task) => {
      let li = document.createElement("li");
      li.textContent = task.title;
      tasks.appendChild(li);
    });
  });
