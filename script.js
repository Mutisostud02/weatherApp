const weatherSearch = document.querySelector('.weather');
const input = document.querySelector('input');
input.setAttribute('placeholder','enter location...');
const button = document.querySelector('button');
const img = document.querySelector('img');
const html = document.querySelector('html');
const loader = document.getElementById('loader');
const first = document.getElementById('first');
const third = document.getElementById('third');

async function fetchData() {
   try {
    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=504c5cfb26384fae8fe93859240602&q=${input.value}`);
    const response = await data.json();
    const result = response.current.condition.text;
    weatherSearch.value = result;
    weatherSearch.innerHTML = `The weather at ${input.value} is ${result}`;
   } catch(err) {
    alert(err);
   }
}
async function weatherGifs() {
    if(weatherSearch.value != undefined){
    const data = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=MVyTaUBIpcZn7pon7F7ZDUgZDNS6XHxW&s=${weatherSearch.value}&limit=1`);
    const response = await data.json();
    const result = response.data.images.original.url
    img.src = result;
    }    
}
loader.classList.toggle('loading');
first.classList.toggle('first');
third.classList.toggle('third')

button.addEventListener('click', function (event) {
    event.preventDefault();
    html.setAttribute('style','opacity:0.5;')
    loader.classList.toggle('loading');
    first.classList.toggle('first');
    third.classList.toggle('third')
    setTimeout(() => {
        loader.classList.toggle('loading');
        first.classList.toggle('first');
        third.classList.toggle('third')
        fetchData()
        weatherGifs()
        html.removeAttribute('style','opacity:0.5;');
    }, 3000);
})
