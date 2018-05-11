// 5 (expect 4)
// 6 (expect 3)
// 12 (expect 6)
// 342 (expect 23)
// 115 (expect 20)
// 1000 (expect 11) 
// 999 (expect 24) nine hundred and ninety-nine
describe(`return the number of letters in a number`, () => {
    it(`the function numberOfLetters exists`, () => {
        expect(numberOfLetters).toBeDefined();
    })
    it(`if the number is 5 return 4`, () => {
        expect(numberOfLetters(5)).toBe(4);
    })
    it(`if the number is 6 return 3`, () => {
        expect(numberOfLetters(6)).toBe(3);
    })
    it(`if the number is 10 return 3`, () => {
        expect(numberOfLetters(10)).toBe(3);
    })
    it(`if the number is 12 return 6`, () => {
        expect(numberOfLetters(12)).toBe(6);
    })
    it(`if the number is 45 return 11`, () => {
        expect(numberOfLetters(45)).toBe(11);
    })
      it(`if the number is 100 return 7`, () => {
        expect(numberOfLetters(100)).toBe(7);
    })
    it(`if the number is 342 return 23`, () => {
        expect(numberOfLetters(342)).toBe(24);
    })
    it(`if the number is 1000 return 12`, () => {
        expect(numberOfLetters(1000)).toBe(12);
    })
    it(`if the number is 999 return 24`, () => {
        expect(numberOfLetters(999)).toBe(24);
    })
})
