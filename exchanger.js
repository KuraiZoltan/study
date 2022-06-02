getMenu()

function getMenu() {
    let menu = document.createElement('div')
    let exchangeValue = document.createElement('input');
    let exchangeCurrencyFrom = document.createElement('input');
    let exchangeCurrencyTo = document.createElement('input');
    let exchangeButton = document.createElement('button')


    exchangeButton.type = 'submit'
    exchangeButton.innerText = 'Submit'
    exchangeValue.type = 'number'
    exchangeValue.innerText = 'Value'
    exchangeCurrencyFrom.type = 'text'
    exchangeCurrencyFrom.innerText = 'From'
    exchangeCurrencyTo.type = 'text'
    exchangeCurrencyTo.innerText = 'From'

    document.body.appendChild(menu)
    menu.appendChild(exchangeValue)
    menu.appendChild(exchangeCurrencyFrom)
    menu.appendChild(exchangeCurrencyTo)
    menu.appendChild(exchangeButton)

    exchangeButton.addEventListener('click', () => {
        if (exchangeCurrencyFrom.value === 'HUF' && exchangeCurrencyTo.value === 'USD') {
            let exchangeResult = exchangeValue.value/300
            let result = document.createElement("p")
            menu.appendChild(result)
            result.textContent = exchangeResult.toString()
        } else if (exchangeCurrencyFrom.value === 'USD' && exchangeCurrencyTo.value === 'HUF') {
            let exchangeResult = exchangeValue.value*300
            let result = document.createElement("p")
            menu.appendChild(result)
            result.textContent = exchangeResult.toString()
        }
        if (exchangeCurrencyFrom.value === 'HUF' && exchangeCurrencyTo.value === 'EUR') {
            let exchangeResult = exchangeValue.value/400
            let result = document.createElement("p")
            menu.appendChild(result)
            result.textContent = exchangeResult.toString()

        } else if (exchangeCurrencyFrom.value === 'EUR' && exchangeCurrencyTo.value === 'HUF') {
            let exchangeResult = exchangeValue.value*400
            let result = document.createElement("p")
            menu.appendChild(result)
            result.textContent = exchangeResult.toString()
        }
        if (exchangeCurrencyFrom.value === 'EUR' && exchangeCurrencyTo.value === 'USD') {
            let exchangeResult = exchangeValue.value/2
            let result = document.createElement("p")
            menu.appendChild(result)
            result.textContent = exchangeResult.toString()
        } else if (exchangeCurrencyFrom.value === 'USD' && exchangeCurrencyTo.value === 'HUF') {
            let exchangeResult = exchangeValue.value*2
            let result = document.createElement("p")
            menu.appendChild(result)
            result.textContent = exchangeResult.toString()
        }
    })
}
