function passwordChecker(password) {
    const minLength = 8;
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    const containsNumber = /\d/;
    const containsIPL = /IPL/i;

    if (
        password.length >= minLength &&
        specialChars.test(password) &&
        containsNumber.test(password) &&
        !containsIPL.test(password)
    ) {
        return true;
    }
    return false;
}

module.exports = passwordChecker;