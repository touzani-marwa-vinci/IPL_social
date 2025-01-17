
const isValidPassword = require('../../src/passwordChecker');

describe('Validation de mot de passe', () => {
    it('devrait contenir au moins 8 caractères', () => {
        expect(isValidPassword('Short1!')).toBe(false);
        expect(isValidPassword('LongEnough1!')).toBe(true);
    });

    it('should return false for password with less than 8 characters', () => {
        expect(isValidPassword('Short1!')).toBe(false);
    });

    it('should return false for password without special character', () => {
        expect(isValidPassword('NoSpecial123')).toBe(false);
    });
});
