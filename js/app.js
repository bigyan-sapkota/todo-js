import { getCookie, setCookie } from "./cookies.js";
import { renderTasks } from "./dom.js";
import { openModal, closeModal } from "./modal.js";

const addTaskModal = document.getElementById("addTaskModal");
const deleteTaskModal = document.getElementById("deleteTaskModal");

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

const openAddModal = document.getElementById("openAddModal");
const closeAddModal = document.getElementById("closeAddModal");
const closeDeleteModal = document.getElementById("closeDeleteModal");

const addTaskForm = document.getElementById("addTaskForm");

const confirmDelete = document.getElementById("confirmDelete");
const cancelDelete = document.getElementById("cancelDelete");

let tasks = JSON.parse(getCookie("tasks")) || [];
let taskToDelete = null;

const saveTasks = () => {
  setCookie("tasks", JSON.stringify(tasks), 7);
  renderTasks(tasks, taskList, handleDeleteTask);
};

// handle Delete Task
const handleDeleteTask = (id) => {
  taskToDelete = id;
  openModal(deleteTaskModal);
};

// confirm delete task
const confirmDeleteTask = () => {
  tasks = tasks.filter((task) => task.id !== taskToDelete);
  saveTasks();
  closeModal(deleteTaskModal);
};

const cancelDeleteTask = () => {
  taskToDelete = null;
  closeModal(deleteTaskModal);
};

// handle add task
const handleAddTask = (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText) {
    tasks.push({ id: Date.now(), text: taskText });
    saveTasks();
    taskInput.value = "";
    closeModal(addTaskModal);
  }
};

// handle add task
addTaskForm.addEventListener("submit", handleAddTask);

openAddModal.addEventListener("click", () => {
  openModal(addTaskModal);
});
closeAddModal.addEventListener("click", () => {
  closeModal(addTaskModal);
});

confirmDelete.addEventListener("click", confirmDeleteTask);
cancelDelete.addEventListener("click", cancelDeleteTask);

closeDeleteModal.addEventListener("click", () => closeModal(deleteTaskModal));

saveTasks();
