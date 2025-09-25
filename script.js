// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let msg = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    msg.textContent = "⚠️ All fields are required!";
    msg.style.color = "red";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg.textContent = "⚠️ Please enter a valid email address!";
    msg.style.color = "red";
  } else {
    msg.textContent = "✅ Form submitted successfully!";
    msg.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});

// To-Do List Functionality
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("deleteBtn");

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});
