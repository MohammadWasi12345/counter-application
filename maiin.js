const main = document.getElementById('title');
const increment = document.getElementById('btn1');
const reset = document.getElementById('btn2');
const decrement = document.getElementById('btn3');

let count = 0;
increment.addEventListener('click', () => {
    count += 1;
    main.textContent = count;
});
reset.addEventListener('click', () => {
    count = 0;
    main.textContent = count;
});
decrement.addEventListener('click', () => {
    count -= 1;
    main.textContent = count;
});