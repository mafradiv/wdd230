const toggleSwitch = document.getElementById("theme-toggle");

  // Check localStorage for saved theme
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  }

  // Toggle dark mode on checkbox change
  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled"); // Save preference
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled"); // Save preference
    }
  });



  //Banner
  document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("banner");
    const closeButton = document.getElementById("close-banner");

    // Get the current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const today = new Date().getDay();

    // Show banner only on Monday (1), Tuesday (2), or Wednesday (3)
    if (today >= 1 && today <= 3) {
        banner.style.display = "block";
    }

    // Close button functionality
    closeButton.addEventListener("click", () => {
        banner.style.display = "none";
    });
});