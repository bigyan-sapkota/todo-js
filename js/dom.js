const createTaskElement = (task) => {
  console.log(task);
  // <li></li>
  const liTag = document.createElement("li");

  // <li>Read Java</li>
  liTag.textContent = task.text;

  //   <button></button>
  const deleteBtn = document.createElement("button");

  //   <button class='delete-btn'></button>
  deleteBtn.classList.add("delete-btn");

  //   <button class='delete-btn'><i class="fa-solid fa-trash delete-btn"></i></button>
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash delete-btn"></i>';

  //  <button class='delete-btn'><i class="fa-solid fa-trash delete-btn"></i></button>
  //  while clicking this button a task will be deleted with given id
  deleteBtn.addEventListener("click", () => console.log("hello"));

  //   <li>Read Java <button class='delete-btn'><i class="fa-solid fa-trash delete-btn"></i></button></li>;
  //   the button is added and when clicked on it handleDeleteTask will run
  liTag.append(deleteBtn);

  return liTag;
};

export const renderTasks = (tasks, taskList) => {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement);
  });
};
