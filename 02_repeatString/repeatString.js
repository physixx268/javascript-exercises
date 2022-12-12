const repeatString = function (string, repetitions) {
    let stringRepeated = "";

    if (Math.sign(repetitions) == 1) {

        for (i = 1; i <= repetitions; i++) {
            stringRepeated = stringRepeated + string;
        }

        return stringRepeated;
    } else if (Math.sign(repetitions) == 0) {

        return "";

    } else {

        return "ERROR";
    }

};

// Do not edit below this line
module.exports = repeatString;
