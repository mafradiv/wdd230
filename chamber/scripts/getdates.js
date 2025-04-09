const modified = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = `Last modified: ${modified.toLocaleString()}`;

const year = new Date().getFullYear();
document.querySelector("#current-year").textContent = `© ${year}`;

// Visits Tracking
const visitsDisplay = document.querySelector(".visits");

if (visitsDisplay) {
    let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;
    let lastVisit = localStorage.getItem("lastVisit-ls");

    const now = Date.now();

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

    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);
    localStorage.setItem("lastVisit-ls", now);
}