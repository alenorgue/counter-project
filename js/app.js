// Tu código aquí.

let count = 0;

const btnLowerCount = document.querySelector('.prevBtn');
const btnAddCount = document.querySelector('.nextBtn');

btnLowerCount.addEventListener('click', function() {
count-console.log('menos 1');
count--;
counter.textContent = count;

if (count < 0 ){
    counter.style.color = 'red'
  } else if (count > 0){
    counter.style.color = 'green'
  } else {
    counter.style.color = '#333333'
  }
});


btnAddCount.addEventListener('click', function() {
    count-console.log('mas 1');
count++;
counter.textContent = count;

if (count < 0 ){
    counter.style.color = 'red'
  } else if (count > 0){
    counter.style.color = 'green'
  } else {
    counter.style.color = '#333333'
  }
});

const counter = document.querySelector('#counter')
counter.textContent = count


