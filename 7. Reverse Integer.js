
var reverse = function (x) {
    let i = parseInt(x.toString().split("").reverse().join(""))
    x < 0 ? i = -i : i;
    if (i <= Math.pow(-2, 31) || i >= Math.pow(2, 31) - 1) {
        return 0
    } else {
        return i
    }
};

reverse(1534236469)
console.log(reverse(132));
