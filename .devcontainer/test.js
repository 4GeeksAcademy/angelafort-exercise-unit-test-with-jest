const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.2 dollars", function () {
    const dollars = fromEuroToDollar(1);
    const expected = 1.2;
    expect(dollars).toBe(expected);
});

test("100 dollars should be 10,760 yen", function () {
    const yen = fromDollarToYen(100);
    const expected = 100 * 127.9 / 1.2;
    expect(yen).toBe(expected);
});

test("5000 yen should be 31.25 pounds", function () {
    const pounds = fromYenToPound(5000);
    const dollarAmount = 5000 / 127.9;
    const expected = dollarAmount * 0.8;
    expect(pounds).toBe(expected);
});

