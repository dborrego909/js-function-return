// addEventListener when "Get Value 'button'" is pressed take input and convert to int using parseFloat
// Square the Number
// Spit out number in DOM 

const input = document.querySelector(".myInput");
const para = document.querySelector('p');

function squared(num) {
    return num * num;
}

function cubed (num) {
    return num * num * num;
}

function squRoot (num) {
    return Math.sqrt(num)
}

function factorial (num) {
    if ( num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
      num *= x;
      x--;
    }
    return num;
  }


input.addEventListener("change", () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
        para.textContent = "Please enter a number";
    } else {
        para.textContent = `The sqare of ${num} is ${squared(num)}.`;
        para.textContent += `The cube of ${num} is ${cubed(num)}.`;
        para.textContent += `The square root of ${num} is ${squRoot(num)}.`;
        para.textContent += `The factorial of ${num} is ${factorial(num)}.`;
    }

})

