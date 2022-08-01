const apiLink = 'https://api.coingecko.com/api/v3/exchange_rates';

document.addEventListener('DOMContentLoaded',() => {
    fetch(apiLink)
    .then(res => res.json())
    .then(data => console.log(data))
})

