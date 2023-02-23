const title = document.getElementById("title");
const description = document.getElementById("description");
const input = document.querySelector(".input-form");
const output = document.querySelector(".output");

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
console.log(tasks);
showAllTask();
function showAllTask() {
  tasks.forEach((value, index) => {
    const task = document.createElement("div");
    task.setAttribute("class", "task");

    const ptask = document.createElement("div");
    ptask.setAttribute("class", "part1-task");
    task.append(ptask);

    const p = document.createElement("p");
    p.innerText = value.title;
    ptask.append(p);

    const span = document.createElement("span");
    span.innerText = value.description;
    ptask.append(span);

    const button = document.createElement("button");
    button.innerText = "x";

    button.addEventListener("click", () => {
      removeDiv();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));

      showAllTask();
    });
    task.append(button);

    output.append(task);
  });
}

function removeDiv() {
  tasks.forEach(() => {
    const task = document.querySelector(".task");
    task.remove();
  });
}
input.addEventListener("submit", (e) => {
  e.preventDefault();
  removeDiv();
  tasks.push({
    title: title.value,
    description: description.value,
  });
  console.log(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showAllTask();
});
