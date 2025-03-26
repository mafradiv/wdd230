const visitsDisplay = document.querySelector(".visits");

// Get stored values from localStorage
let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;
let lastVisit = localStorage.getItem("lastVisit-ls");

// Get the current timestamp
const now = Date.now();

// Check if last visit exists and is within the last 24 hours (86400000ms)
if (lastVisit) {
    const timeSinceLastVisit = now - Number(lastVisit);

    if (timeSinceLastVisit < 86400000) {
        visitsDisplay.textContent = "Back so soon! Awesome!";
    } else {
        visitsDisplay.textContent = `Number of Visits: ${numVisits}`;
    }
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// Increment visits and update last visit timestamp
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisit-ls", now);
