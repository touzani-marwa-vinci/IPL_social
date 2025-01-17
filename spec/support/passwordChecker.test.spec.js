
const isValidPassword = require('../../src/passwordChecker');

describe('Validation de mot de passe', () => {
    it('devrait contenir au moins 8 caractères', () => {
        expect(isValidPassword('Short1!')).toBe(false);
        expect(isValidPassword('LongEnough1!')).toBe(true);
    });
});