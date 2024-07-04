const capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const reverseString = function (str) {
    return str.split('').reverse().join('');
}

module.exports = {
    capitalize,
    reverseString
}