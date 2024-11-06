function convertCurrency() {
    const amt = document.getElementById("amount").value;
    const fromCurr = document.getElementById("fromCurrency").value;
    const toCurr = document.getElementById("toCurrency").value;
    const result = document.getElementById("result");
    const exR = {
        "USD": { "TRY": 27.50, "INR": 82.50, "JPY": 110.00 },
        "EUR": { "TRY": 30.00, "INR": 88.00, "JPY": 120.00 },
        "GBP": { "TRY": 35.00, "INR": 100.00, "JPY": 130.00 },
    };

    if (exR[fromCurr] && exR[fromCurr][toCurr]) {
        const CR = exR[fromCurr][toCurr];
        const CA = (amt *   CR).toFixed(2);
        result.innerText = `Converted Amount: ${CA} ${toCurr}`;
    } else {
        result.innerText = "Conversion rate not available.";
    }
}
