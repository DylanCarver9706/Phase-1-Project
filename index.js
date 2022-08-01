const apiLink = 'https://api.coingecko.com/api/v3/exchange_rates';

document.addEventListener('DOMContentLoaded',() => {
    fetch(apiLink)
    .then(res => res.json())
    .then(data => addCurrenciesToDropdown(data.rates))
})

// add a dropdown
const dropdown = document.createElement('select');
const body = document.querySelector('body');

function addCurrenciesToDropdown(currencies){
    let currencyKeys = Object.keys(currencies);
    currencyKeys.forEach(key => {
        let currency = currencies[key];
        const option = document.createElement("option");
        option.value = currency.unit;
        option.text = currency.name;
        dropdown.append(option);
    })
}

body.append(dropdown);
