const Modified = new Date(document.lastModified);
document.querySelector("#lastModified").innerHTML = Modified;
const Year = new Date().getFullYear();
document.querySelector('#current-year').innerHTML = Year + " ";