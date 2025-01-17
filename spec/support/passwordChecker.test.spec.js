
const isValidPassword = require('../../src/passwordChecker');

describe('Validation de mot de passe', () => {
    it('devrait contenir au moins 8 caractères', () => {
        const password = 'Short1!';
        const result = isValidPassword(password);

        console.log(`Test password: ${password}  Result: ${result}`);

        expect(result).toBe(false, `Expected ${password} to be invalid`);

        const validPassword = 'LongEnough1!';
        const validResult = isValidPassword(validPassword);

        console.log(`Test password: ${validPassword} -Result: ${validResult}`);

        expect(validResult).toBe(true, `Expected ${validPassword} to be valid`);
    });

    it('should return false for password with less than 8 characters', () => {
        const password = 'Short1!';
        const result = isValidPassword(password);

        console.log(`Test password: ${password}  Result: ${result}`);

        expect(result).toBe(false, `Expected ${password} to be invalid`);
    });

    it('should return false for password without special character', () => {
        const password = 'NoSpecial123';
        const result = isValidPassword(password);

        console.log(`Test password: ${password} Result: ${result}`);

        expect(result).toBe(false, `Expected ${password} to be invalid`);
    });

    it('should return false for password without a number', () => {
        const password = 'NoNumber!';
        const result = isValidPassword(password);

        console.log(`Test password: ${password}  Result: ${result}`);

        expect(result).toBe(false, `Expected ${password} to be invalid`);
    });

    it('should return false for password containing "IPL"', () => {
        const password = 'IPLSecure123';
        const result = isValidPassword(password);

        console.log(`Test password: ${password}  Result: ${result}`);

        expect(result).toBe(false, `Expected ${password} to be invalid`);
    });

    it('should return false for password with "ipl" in any case', () => {
        const password = 'IpLTest123!';
        const result = isValidPassword(password);

        console.log(`Test password: ${password} Result: ${result}`);

        expect(result).toBe(false, `Expected ${password} to be invalid`);
    });

    it('should return true for another valid password', () => {
        const password = 'AnotherValid1!';
        const result = isValidPassword(password);

        console.log(`Test password: ${password} Result: ${result}`);

        expect(result).toBe(true, `Expected ${password} to be valid`);
    });
});
