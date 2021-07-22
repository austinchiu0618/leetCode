
var isPalindrome = function (x) {
    var y = x.toString().split("").reverse().join("");

    if (x < 0) {
        return false;
    } else if (x == y) {
        return true;
    } else {
        return false;
    }
};

isPalindrome(10);
console.log(isPalindrome(10));