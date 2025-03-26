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