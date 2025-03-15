const input = document.querySelector('#favchap');// Select the input element with the ID 'favchap'
const button = document.querySelector('button');// Select the first button element in the document
const list = document.querySelector('#list');// Select the element with the ID 'list'

// Step 1: Declare an array named Chapters Array
let chaptersArray = getChapterList() || [];

// Step 2: Add a compound OR condition to assign and empty array
chaptersArray = chaptersArray || [];

//Define
// Step 4: Modify the button click event listener to perform specific task 
// Add a click event listener to the button element
button.addEventListener('click', () => {

    // Check if the input value is not empty
    if (input.value !== '') {

        // Call displayList with the input.value argument
        displayList(input.value);

        // Push the input.value into chaptersArray
        chaptersArray.push(input.value);

        // Update the localStorage with the new array
        setChapterList();

        // Set the input.value to an empty string
        input.value = '';

        // Set the focus back to the input element
        input.focus();


        // Create a new list item (li element)
        //const li = document.createElement('li');

        // Create a delete button element
        //const deleteButton = document.createElement('button');

        // Set the text content of the list item to the input value
        //li.textContent = input.value;

        // Set the text content of the delete button to '❌'
        //deleteButton.textContent = '❌';

        // Append the delete button to the list item
        //li.appendChild(deleteButton); // Use appendChild here

        // Append the list item to the 'list' element
        //list.appendChild(li); // Use appendChild here

        // Add a click event listener to the delete button
        //deleteButton.addEventListener('click', () => {
             // Remove the list item (li) when the delete button is clicked

            //list.removeChild(li);

            // Set focus back to the input element
            //input.focus();

            // Clear the input value
            //input.value = '';
        //});
    }
});
// Add a keydown event listener to the input element
input.addEventListener('keydown', (event) => {

    // Check if the pressed key is Enter
    if (event.key === 'Enter') { // Fix the event key here

        // Prevent the default Enter key behavior (e.g., form submission)
        event.preventDefault();

        // Trigger a click event on the button element
        button.click();
    }
});

// Step 3: Populate the displayed list of chapters
//chaptersArray.forEach((chapter) => {
    //displayList(chapter);    
//});

// Step 1: Define a function to get the chapter list from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Step 5: Create the displayList function that receives an item parameter
//  Step 3: Define a function to display a chapter
function displayList(item) {

    // Create a new list item (li element)
    const li = document.createElement('li');

    // Create a delete button element
    const deleteButton = document.createElement('button');

    // Set the text content of the list item to the input value
    li.textContent = item;

    // Set the text content of the delete button to '❌'
    deleteButton.textContent = '❌';

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the 'list' element
    list.appendChild(li);

    // Add a click event listener to the delete button
    deleteButton.addEventListener('click', () => {

        // Remove the list item (li) when the delete button is clicked
        list.removeChild(li);

        // Set focus back to the input element
        input.focus();

        // Clear the input value
            input.value = '';
    })
}
// Step 6: Define a function to delete a chapter from the array and localStorage
function deleteChapter(chapter) {
    // Reformat the chapter parameter to remove the '❌' character
    chapter = chapter.slice(0, chapter.length - 1);

    // Call the setChapterList function to update the localStorage item
    setChapterList();
}
// Step 4: Define a function to update teh  localStorage with the chapter list
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray))
}
