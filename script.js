const weatherSearch = document.querySelector('.weather');
const input = document.querySelector('input');
input.setAttribute('placeholder','enter location...');
const svg = document.querySelector('svg');


async function fetchData() {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=504c5cfb26384fae8fe93859240602&q=${input.value}`);
    const response = await data.json();
    const result = response.current.condition.text;
    weatherSearch.textContent = result
}
// async function weatherGifs() {
//     console.log(weatherSearch.textContent)
    // const data = await fetch(`api.giphy.com/v1/gifs/${weatherSearch.value}?api_key=MVyTaUBIpcZn7pon7F7ZDUgZDNS6XHxW`);
    // const response = await data.json();
    // console.log(response);
// }
svg.addEventListener('click', function (event) {
    fetchData()
    weatherGifs()
    console.log(fetchData())
})

