// simple JS so you can see it's working

const button = document.getElementById("clickMeBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  window.location.href = "contact.html";
  /* message.textContent = "javascript is working 👋🏾"; */
});
