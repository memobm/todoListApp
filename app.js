const inputEl = document.querySelector('#todo');
const ulEl = document.querySelector('.todo-list');

function todoSubmit(event) {
    if (event.keyCode === 13) {
        let newLiEl = createListItem(inputEl.value);
        // Inserts the li tags before the first node
        ulEl.insertBefore(newLiEl, ulEl.childNodes[0]);
        inputEl.value = ''; // clear the input box
    }
}

function createListItem(text) {
    // Creating an li html tag
    const liEl = document.createElement('li');

    // Set to add the input value later on
    liEl.innerHTML = `${text}<span class='delete'>&times</span>`;
    liEl.classList.add('todo-item');

    return liEl;
}

function doneToggle() {
    ulEl.addEventListener('click', function(event) {

        // Checks to see if the target contains a todo-item class
        if (event.target.classList.contains('todo-item')) {
            event.target.classList.toggle('done');
            // Removes the items
            ulEl.removeChild(event.target);
        }
    })
}

function main() {
    inputEl.addEventListener('keypress', todoSubmit);
}

main();
doneToggle();
