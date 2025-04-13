// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  document.body.classList.toggle("bg-gray-900");
  document.body.classList.toggle("bg-white");
  document.body.classList.toggle("text-white");
  document.body.classList.toggle("text-gray-900");
});

// Modal Logic
window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("termsModal");
  const acceptBtn = document.getElementById("acceptTerms");
  const declineBtn = document.getElementById("declineTerms");

  if (!localStorage.getItem("termsAccepted")) {
    modal.style.display = "flex";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("termsAccepted", "true");
    modal.style.display = "none";
  });

  declineBtn.addEventListener("click", () => {
    alert("You must accept the terms to continue using the site.");
  });

  // Charts
  const progressCtx = document.getElementById("progressChart")?.getContext("2d");
  const costCtx = document.getElementById("costChart")?.getContext("2d");

  if (progressCtx) {
    new Chart(progressCtx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "Remaining"],
        datasets: [{
          data: [90, 10],
          backgroundColor: ["#8b5cf6", "#1f2937"],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom", labels: { color: "#fff" } }
        },
        animation: {
          animateRotate: true,
          animateScale: true
        }
      }
    });
  }

  if (costCtx) {
    new Chart(costCtx, {
      type: "doughnut",
      data: {
        labels: ["Hardware", "Assembly", "Shipping", "Other"],
        datasets: [{
          data: [40, 25, 20, 15],
          backgroundColor: ["#34d399", "#818cf8", "#fbbf24", "#f87171"],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom", labels: { color: "#fff" } }
        },
        animation: {
          animateRotate: true,
          animateScale: true
        }
      }
    });
  }
});

// Form Submission (EmailJS)
function handleSubmit(event) {
  event.preventDefault();

  // Gather form data
  var formData = new FormData(event.target);

  // Send the form data via EmailJS
  emailjs.sendForm('service_jum20ja', 'template_4unn1ck', formData)
    .then(function(response) {
      alert("Thank you for contacting us! We'll get back to you shortly.");
    }, function(error) {
      alert("Failed to send the message. Please try again.");
    });

  event.target.reset();
  return false;
}
