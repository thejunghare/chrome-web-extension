document.addEventListener("DOMContentLoaded", function () {
    const result = document.getElementById('result');
    const input = document.getElementById('input');
    const usernameForm = document.getElementById('usernameForm');

    usernameForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        result.textContent = input.value;
    });
});

/* const result = document.getElementById('result')
const name = document.getElementById('input')
const button = document.getElementById('sub_btn')

const print = () => {
    result.innerText = name.value
    console.log(result)
};

button.addEventListener("click", print) */
