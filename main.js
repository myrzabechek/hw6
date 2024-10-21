const inputString = document.getElementById('inputString')
const addButton = document.getElementById('addButton')
const output = document.getElementById('output')

let stringsArray = []; 


addButton.addEventListener('click', function() {
    const newString = inputString.value;
    if (newString) {
        stringsArray.push(newString); 
        displayStrings();
        inputString.value = ''
    }
});


function displayStrings() {
    output.innerHTML = ''; 
    stringsArray.forEach(function() {
        const reversedString = str.split('').reverse().join('');
        output.innerHTML += reversedString + '<br>'
    });
}
