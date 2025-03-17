const baseURL = "https://mafradiv.github.io/wdd230/";
const linksURL = "https://mafradiv.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    const container = document.querySelector("#activity-links"); // Fixed ID

    container.innerHTML = ""; // Clear existing content

    weeks.forEach(week => {
        const listItem = document.createElement("li");

        // Week number span
        const weekNumber = document.createElement("span");
        weekNumber.classList.add("number");
        weekNumber.textContent = `W${week.week}`;
        listItem.appendChild(weekNumber);

        // Loop through links
        week.links.forEach((link, index) => {
            const anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.textContent = link.title;
            anchor.target = "_blank";

            listItem.appendChild(anchor);

            // Add a separator unless it's the last link
            if (index < week.links.length - 1) {
                const separator = document.createElement("span");
                separator.classList.add("separator");
                separator.textContent = " | ";
                listItem.appendChild(separator);
            }
        });

        container.appendChild(listItem);
    });
}

// Call function to fetch and display links
getLinks();
