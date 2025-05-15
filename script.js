window.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      document.body.classList.toggle("bg-gray-900");
      document.body.classList.toggle("bg-white");
      document.body.classList.toggle("text-white");
      document.body.classList.toggle("text-gray-900");
    });
  }

  const progressCtx = document.getElementById("progressChart")?.getContext("2d");
  const costCtx = document.getElementById("costChart")?.getContext("2d");
  const distributionCtx = document.getElementById("distributionChart")?.getContext("2d");

  const productionGoalCtx = document.getElementById("productionGoalChart")?.getContext("2d");

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

  if (productionGoalCtx) {
    new Chart(productionGoalCtx, {
      type: "doughnut",
      data: {
        labels: ["Produced", "Goal Remaining"],
        datasets: [{
          data: [0, 400],
          backgroundColor: ["#3b82f6", "#9ca3af"],
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

  if (distributionCtx) {
    new Chart(distributionCtx, {
      type: 'bar', // or 'doughnut' or any type you prefer
      data: {
        labels: ['Device A', 'Device B', 'Device C', 'Device D'], // update as needed
        datasets: [{
          label: 'Device Distribution',
          data: [30, 20, 25, 25], // example data - replace with your actual values
          backgroundColor: ['#f87171', '#34d399', '#3b82f6', '#fbbf24']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom', labels: { color: '#fff' } }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#fff' }
          },
          x: {
            ticks: { color: '#fff' }
          }
        }
      }
    });
  }
  

  // Form Submission (EmailJS)
  function handleSubmit(event) {
    event.preventDefault();

    var form = event.target;

    emailjs.sendForm('service_5k6he59', 'template_esy9qcj', form)
      .then(function(response) {
        alert("Thank you for contacting us! We'll get back to you shortly.");
      }, function(error) {
        alert("Failed to send the message. Please try again.");
      });

    form.reset();
    return false;
  }

  // Attach form submit event if form exists
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleSubmit);
  }
});
