const reverseString = function(string) {
    let charsOfString = string.split('');
    let arrayReversed = charsOfString.reverse(charsOfString);
    let stringReversed = arrayReversed.join("");

    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
