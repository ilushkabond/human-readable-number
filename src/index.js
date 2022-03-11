module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    const digits = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 10) {
        return digits[number];
    } else if (number < 20) {
        return tens[number - 10];
    } else {
        const numberAsString = number.toString();
        const [hundred, ten, digit] = [...numberAsString.padStart(3, "0")].map(
            (e) => +e
        );
        const digitsDigit = digits[digit];
        const dozensTen = dozens[ten];
        const hundredString = `${digits[hundred]} hundred`;
        const remainder = +numberAsString.slice(1);
        switch (numberAsString.length) {
            case 2:
                return digit === 0 ? dozensTen : `${dozensTen} ${digitsDigit}`;
            case 3:
                return ten === 0 && digit === 0
                    ? hundredString
                    : ten === 0
                    ? `${hundredString} ${digitsDigit}`
                    : digit === 0
                    ? `${hundredString} ${ten === 1 ? tens[0] : dozensTen}`
                    : remainder <= 20
                    ? `${hundredString} ${tens[remainder - 10]}`
                    : `${hundredString} ${dozensTen} ${digitsDigit}`;
            default:
                return "Given number should be less than 999";
        }
    }
};
