function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultElement = document.getElementById("result");

    // Example conversion rates (In a real application, you would get these from an API)
    const exchangeRates = {
        "USD": { "TRY": 27.50, "INR": 82.50, "JPY": 110.00 },
        "EUR": { "TRY": 30.00, "INR": 88.00, "JPY": 120.00 },
        "GBP": { "TRY": 35.00, "INR": 100.00, "JPY": 130.00 },
    };

    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        const conversionRate = exchangeRates[fromCurrency][toCurrency];
        const convertedAmount = (amount * conversionRate).toFixed(2);
        resultElement.innerText = `Converted Amount: ${convertedAmount} ${toCurrency}`;
    } else {
        resultElement.innerText = "Conversion rate not available.";
    }
}
