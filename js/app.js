import { setCookie } from "./cookies.js";
import { openModal, closeModal } from "./modal.js";

const addTaskModal = document.getElementById("addTaskModal");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const openAddModal = document.getElementById("openAddModal");
const closeAddModal = document.getElementById("closeAddModal");
const addTaskForm = document.getElementById("addTaskForm");

let tasks = [];

// openAddModal.addEventListener("click", () => {
//   addTaskModal.style.display = "flex";
// });
openAddModal.addEventListener("click", () => {
  openModal(addTaskModal);
});

// closeAddModal.addEventListener("click", () => {
//   addTaskModal.style.display = "none";
// });
closeAddModal.addEventListener("click", () => {
  closeModal(addTaskModal);
});

// handle add task
addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hello");

  const taskText = taskInput.value.trim();

  if (taskText) {
    tasks.push({ id: Date.now(), text: taskText });
    console.log(tasks);
    setCookie("tasks", JSON.stringify(tasks), 7);
    taskInput.value = "";
    closeModal(addTaskModal);
  }
});
