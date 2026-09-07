const change1 = document.querySelector('#change1');
const calculator = document.querySelector('.main1');
const change2 = document.querySelector('#change2');
const clock = document.querySelector('.main2');
const change3 = document.querySelector('#change3');
const calendar = document.querySelector('.main3');
const change4 = document.querySelector('#change4');
const clock2change = document.querySelector('.main4')
const change5 = document.querySelector('#change5');
const ok = document.querySelector('#ok');
const card = document.querySelector('.card');

change1.addEventListener('click', () => {
  if(calculator.style.display === 'none') {
    calculator.style.display = 'flex';
    clock.style.display = 'none';
    calendar.style.display = 'none';
    clock2change.style.display = 'none';
  }  else{
    calculator.style.display = 'flex';
  }
}
);
change2.addEventListener('click', () => {
  if(clock.style.display === 'none') {
    calculator.style.display = 'none';
    clock.style.display = 'flex';
    calendar.style.display = 'none';    
    clock2change.style.display = 'none';
  }  else{
    clock.style.display = 'flex';
    calculator.style.display = 'none';
    calendar.style.display = 'none';
    clock2change.style.display = 'none';
  }
}
);
change3.addEventListener('click', () => {
  if(calendar.style.display === 'none') {
    calendar.style.display = 'flex';
    calculator.style.display = 'none';
    clock.style.display = 'none';
    clock2change.style.display = 'none';
  }  else{
    calendar.style.display = 'flex';
    calculator.style.display = 'none';
    clock.style.display = 'none';
    clock2change.style.display = 'none';
}
}
);
change4.addEventListener('click', () => {
    if(clock2change.style.display === 'none') {
        clock2change.style.display = 'flex';
        calendar.style.display = 'none';
        calculator.style.display = 'none';
        clock.style.display = 'none';
    } else{
        clock2change.style.display = 'flex';
        calendar.style.display = 'none';
        calculator.style.display = 'none';
        clock.style.display = 'none';
        
    }
})
change5.addEventListener('click', () => {
    if(clock2change.style.display === 'flex') {
        clock2change.style.display = 'none';
        calendar.style.display = 'none';
        calculator.style.display = 'none';
        clock.style.display = 'flex';
    } else{
        clock2change.style.display = 'none';
        calendar.style.display = 'none';
        calculator.style.display = 'none';
        clock.style.display = 'flex';
        
    }
})


ok.addEventListener('click', () => {
  if(card.style.display === 'grid') {
    card.style.display = 'none';
  } else{
    card.style.display = 'none';
  }
})

// alert('Please turn on desktop mode');
