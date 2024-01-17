function getInputValue () {
    let inputVal = document.getElementById("myInput").value;

    // alert(inputVal);
}

const para = document.querySelector('ouput');

para.textContent = `Does this ${inputVal}work now?`;

document.getElementById('output').innerHTML = `why isnt this working${inputVal}`