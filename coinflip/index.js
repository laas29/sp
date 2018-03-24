(function() {

    function flip() {
        return Math.random() >= 0.5;
    }

    function throwErr(errMsg) {
        alert(errMsg);
        throw new Error(errMsg);
    }

    function randomNumber(n) {
        if (isNaN(n))
            throwErr("Provided value must be a number.");
        n = parseInt(n);
        if (n > 0 && n < 1000000) {
            var max = n - 1;
            var numBits = max.toString(2).length;
            var base2string = "";
            var res = 0;
            while (numBits--) {
                base2string += flip() ? "1" : "0";
            }
            res = parseInt(base2string, 2);
            return res > max ? max : res;
        } else {
            throwErr("Provided number must be a number greater than 0 and less than 1,000,000");
        }
    }

    alert("Random number: " + randomNumber(prompt("Provide a number greater than 0 and less than 1,000,000")));

})();