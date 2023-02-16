{
    const calculateResult = (amount, currency) => {
        const EUR = 4.79;
        const USD = 4.47;
        const GBP = 5.42;
    
        switch (currency) {
            case "EUR":
                return amount / EUR;
    
            case "USD":
                return amount / USD;
    
            case "GBP":
                return amount / GBP;
    
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
    
        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");
    
        const amount = +amountElement.value;
        const currency = currencyElement.value;
    
        let result = calculateResult(amount, currency);
    
        resultElement.innerText = result.toFixed(2) + " " + currency;
    };
    
    const init = () => {
        const formElement = document.querySelector(".js-form");
    
        formElement.addEventListener("submit", onFormSubmit);
    };
    
    init();
}