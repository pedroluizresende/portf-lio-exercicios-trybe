let clickCount = 0;

const btn = document.getElementById('btn');
const counter = document.getElementById('counter');

btn.addEventListener('click', () => {
  clickCount +=1
  counter.innerText = clickCount.toString();

}
);
