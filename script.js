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

// for pop up when submitting contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  alert("Thanks " + name + "! Your contact form has been submitted.");
});
