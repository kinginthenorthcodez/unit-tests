const stringLength = require('./stringcount');
const reverseString = require('./reverse');
const Calculator = require('./calculator');
const capitalize = require('./iscapital');

test('return string count', () => {
  let data = 'SouthNorth';
  expect(stringLength(data)).toBe(10);
})

test('return count > 1 ', () => {
  let data = 'South';

  expect(stringLength(data)).toBeGreaterThanOrEqual(1);
  // expect(() => stringLength(data)).toThrow('Wrong !');
});

test('return count  < 10', () => {
  let data = 'SouthNort';
  // expect(stringLength(data)).toThrow(Error);
  expect(stringLength(data)).toBeLessThanOrEqual(10);
});

test('reverse string Hello to olleH', () => {
  let data = 'hello';
 expect(reverseString(data)).toMatch(/olleH/i);
});

describe('Calculator', () => {
  const cal = new Calculator(5,2);

  test('Add 5 + 2 = 7 ', () => {
    expect(cal.add()).toBe(7);
  });

  test('subtract 5 - 2 = 3 ', () => {
    expect(cal.sub()).toBe(3);
  });

  test('mult 5 * 2 = 10 ', () => {
    expect(cal.mult()).toBe(10);
  });

  test('Add 5 / 2 = 2.5 ', () =>{
    expect(cal.div()).toBeCloseTo(2.5);
  });

});


test('Capitalise string', () => {
  let data ='Hello';
  expect(capitalize(data)).toBeTruthy();
})

