const { add, subtract, multiply } = require('../math');

describe('simple arithmetic', () => {
  test('addition', () => {
    expect(add(5, 3)).toBe(8); // ทดสอบการบวก
  });

  test('subtract', () => {
    expect(subtract(5, 1)).toBe(4); // ทดสอบการลบ
  });

  test('multiply', () => {
    expect(multiply(2, 3)).toBe(6); // ทดสอบการคูณ
  });
});

