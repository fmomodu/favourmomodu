// homepage button
const button = document.getElementById("clickMeBtn");
const message = document.getElementById("message");

if (button) {
  button.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
}

// radio buttons: click again to deselect
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("click", function () {
    if (this.dataset.wasChecked === "true") {
      this.checked = false;
      this.dataset.wasChecked = "false";
    } else {
      document
        .querySelectorAll(`input[name="${this.name}"]`)
        .forEach((r) => (r.dataset.wasChecked = "false"));

      this.dataset.wasChecked = "true";
    }
  });
});

// contact form
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form && status) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzvnppa", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        status.textContent = "message sent ♡";
        form.reset();

        document
          .querySelectorAll('input[type="radio"]')
          .forEach((radio) => (radio.dataset.wasChecked = "false"));
      } else {
        status.textContent = "something went wrong… try again";
      }
    } catch (error) {
      status.textContent = "error sending message";
    }
  });
}