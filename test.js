function palindrome(inputString) {
    var reverseOfInputString = ""
    for (var i = inputString.length - 1; i >= 0; i--) {
        reverseOfInputString =+ inputString.charAt(i)
    }
    return inputString === reverseOfInputString
}

console.log(palindrome("abcdcba"))
console.log(palindrome("abcd"))
