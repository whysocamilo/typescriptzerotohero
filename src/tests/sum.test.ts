import {sum} from "../sum";
describe('sumProducts', () => {
  it('should return the correct sum for a string with products', () => {
    expect(sum("32 Pencils, 15 Pens, 2 notebooks")).toBe(49);
  });

  it('should return 0 for a string with no numbers', () => {
    expect(sum("Nothing")).toBe(0);
  });

  it('should return the number for a string with just a number', () => {
    expect(sum("23567")).toBe(23567);
  });

  it('should return the correct sum for a string with random text and numbers', () => {
    expect(sum("adafgrgrgr56, adfddf2")).toBe(58);
  });
});
