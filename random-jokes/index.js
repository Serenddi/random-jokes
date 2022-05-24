const button = document.querySelector('.go');
const url = 'https://type.fit/api/quotes/';

button.addEventListener('click', getData);
button.addEventListener('click', playMusic);

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    const data1 = data[Math.floor(Math.random() * data.length)];
    getQuote(data1.text);
  }
  getData();

  function getQuote(quote) {
    const text = document.querySelector('.text');
      text.textContent = quote;
  }

  function playMusic() {
    const song = document.querySelector('audio');
    song.play();
   }


