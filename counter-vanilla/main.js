function main() {    
    const counterElem = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    let counter = 0;

    function handleCounter(type = "increment") {
        type === "increment" ? counter++ : counter--;
        counterElem.innerText = counter; 
    }

    incrementBtn.addEventListener('click', () => handleCounter("increment"));
    decrementBtn.addEventListener('click', () => handleCounter("decrement"));
}

document.addEventListener('DOMContentLoaded', main);
