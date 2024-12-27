import { setCookie } from "./cookies.js";
import { renderTasks } from "./dom.js";
import { openModal, closeModal } from "./modal.js";

const addTaskModal = document.getElementById("addTaskModal");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const openAddModal = document.getElementById("openAddModal");
const closeAddModal = document.getElementById("closeAddModal");
const addTaskForm = document.getElementById("addTaskForm");

let tasks = [];

openAddModal.addEventListener("click", () => {
  openModal(addTaskModal);
});

closeAddModal.addEventListener("click", () => {
  closeModal(addTaskModal);
});

// handle add task
const handleAddTask = (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText) {
    tasks.push({ id: Date.now(), text: taskText });
    setCookie("tasks", JSON.stringify(tasks), 7);
    console.log(tasks);
    renderTasks(tasks, taskList);
    taskInput.value = "";
    closeModal(addTaskModal);
  }
};

// handle add task
addTaskForm.addEventListener("submit", handleAddTask);
