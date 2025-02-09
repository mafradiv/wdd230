const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => { 
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton); // Use appendChild here
        list.appendChild(li); // Use appendChild here
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
            input.value = '';
        });
    }
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Fix the event key here
        event.preventDefault();
        button.click();
    }
});