// for smooth scrolling, so when i click buttons it moves down to correct element
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    // safety check to avoid crashes
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// toggles skill list in experience section by clicking course title
document.querySelectorAll(".class-card h3").forEach((title) => {
  title.addEventListener("click", () => {
    const ul = title.nextElementSibling;
    ul.classList.toggle("hidden");
  });
});

// toggles details on and off in project cards
function toggleDetails(button) {
  const details = button.nextElementSibling;
  details.classList.toggle("hidden");
}

// for pop up when submitting contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  alert("Thanks " + name + "! Your contact form has been submitted.");
});
