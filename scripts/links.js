const baseURL = "https://yourgithubusername.github.io/wdd230/";
const linksURL = "data/links.json"; // Local JSON file

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data); // Call displayLinks and pass the data
}

function displayLinks(data) {
    console.log("Data inside displayLinks:", data); // Debugging
    
    const weeks = data.lessons; // Fix: Access the correct array inside the JSON object

    if (!Array.isArray(weeks)) {
      console.error("Expected an array but got:", weeks);
      return;
    }

    const listContainer = document.querySelector("#activity-links");
    listContainer.innerHTML = ""; // Clear existing content

    weeks.forEach((week) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Week ${week.week}: `;

      week.links.forEach((link, index) => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.title;
        anchor.target = "_blank";

        listItem.appendChild(anchor);

        if (index < week.links.length - 1) {
          listItem.appendChild(document.createTextNode(" | "));
        }
      });

      listContainer.appendChild(listItem);
    });
}
