let oneEuroIs = {
    "JPY": 127.9, // Japan yen
    "USD": 1.2,   // US dollar
    "GBP": 0.8    // British pound
};

const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    return valueInDollar;
}

function fromDollarToYen(dollarAmount) {
    return dollarAmount * oneEuroIs["JPY"] / oneEuroIs["USD"];
}

function fromYenToPound(yenAmount) {
    let dollarAmount = yenAmount / oneEuroIs["JPY"];
    return dollarAmount * oneEuroIs["GBP"];
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };