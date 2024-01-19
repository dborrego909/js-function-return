// addEventListener when "Get Value 'button'" is pressed take input and convert to int using parseFloat
// Square the Number
// Spit out number in DOM 

const input = document.querySelector(".myInput");
const para = document.querySelector('p');

function squared(num) {
    return num * num;
}

input.addEventListener("change", () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
        para.textContent = "Please enter a number";
    } else {
        para.textContent = `The sqare of ${num} is ${squared(num)}.`
    }

})

