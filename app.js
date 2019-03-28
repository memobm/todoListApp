const inputEl = document.querySelector('#todo');
const ulEl = document.querySelector('.list');

function todoSubmit(event) {
    let li = document.createElement('li'); // Creating an li html tag
    let inputValue = inputEl.value;
    let value = document.createTextNode(inputValue); // Grabbing tha value from the line above and turnig it into a text node for use

    if (event.keyCode === 13) {
        li.appendChild(value); // Adding the value to the li tag
        ulEl.appendChild(li); // Adding the li tags to the ul list
        li.classList.add('listItem');
        inputEl.value = ''; // clear the input box
    }
}

function main() {
    inputEl.addEventListener('keyup', todoSubmit);
}

main();