'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [ 80325, 55275, 8746650, 3000000, 45672375, 225, 54675 ];
		assert.strictEqual(euclid(...[ ...temp, ...temp, ...temp, ...temp, ...temp ]), euclid(...temp));
	});

  QUnit.test('Функция должна правильно работать с отрицательными числами(доп)', function (assert) {
    assert.strictEqual(euclid(-1, -1), 1, 'euclid(-1, -1) === 1');
    assert.strictEqual(euclid(-2, -2), 2, 'euclid(-2, -2) === 2');
    assert.strictEqual(euclid(-13, -13, -26), 13, 'euclid(-13, -13, -26) === 13');
    assert.strictEqual(euclid(-3, -7, -1), 1, 'euclid(-3, -7, -1) === 1');
    assert.strictEqual(euclid(-7, -7, -13), 1, 'euclid(-7, -7, -13) === 1');
    assert.strictEqual(euclid(-2, -14, -16), 2, 'euclid(-2, -14, -16) === 2');
    assert.strictEqual(euclid(-7, -14, -21), 7, 'euclid(-7, -14, -21) === 7');
    assert.strictEqual(euclid(-6006, -3738735, -51051), 3003, 'euclid(-6006, -3738735, -51051) === 3003');
  });

  QUnit.test('Функция должна правильно обрабатывать нулевые аргументы(доп)', function (assert) {
    assert.strictEqual(euclid(0, 0), 0, 'euclid(0, 0) === 0');
    assert.strictEqual(euclid(0, 5), 5, 'euclid(0, 5) === 5');
    assert.strictEqual(euclid(5, 0), 5, 'euclid(5, 0) === 5');
    assert.strictEqual(euclid(0, 0, 0), 0, 'euclid(0, 0, 0) === 0');
    assert.strictEqual(euclid(0, 0, 5), 5, 'euclid(0, 0, 5) === 5');
    assert.strictEqual(euclid(0, 5, 0), 5, 'euclid(0, 5, 0) === 5');
    assert.strictEqual(euclid(5, 0, 0), 5, 'euclid(5, 0, 0) === 5');
  });

  QUnit.test('Функция должна правильно обрабатывать одинаковые числа(доп)', function (assert) {
    assert.strictEqual(euclid(5, 5), 5, 'euclid(5, 5) === 5');
    assert.strictEqual(euclid(13, 13, 13), 13, 'euclid(13, 13, 13) === 13');
    assert.strictEqual(euclid(2, 2, 2, 2), 2, 'euclid(2, 2, 2, 2) === 2');
  });

  QUnit.test('Функция должна правильно находить НОД десятичных дробей(доп)', function (assert) {
    assert.strictEqual(euclid(1.5, 0.5), 0.5, 'euclid(1.5, 0.5) === 0.5');
    assert.strictEqual(euclid(0.3, 0.6), 0.3, 'euclid(0.3, 0.6) === 0.3');
    assert.strictEqual(euclid(2.5, 1.5, 7.5, 8.5), 0.5, 'euclid(2.5, 1.5, 7.5, 8.5) === 0.5');
    assert.strictEqual(euclid(0.25, 0.5, 0.75), 0.25, 'euclid(0.25, 0.5, 0.75) === 0.25');
  });

  QUnit.test('Функция должна правильно обрабатывать некорректные данные(доп)', function (assert) {
    assert.strictEqual(euclid(1, 1.5, "abc"), null, 'euclid(1, 1.5, "abc") должна вернуть null');
    assert.strictEqual(euclid(1, "123", "abc"), null, 'euclid(1, "123", "abc") должна вернуть null');
    assert.strictEqual(euclid(1, "123", 1), null, 'euclid(1, "123", 1) должна вернуть null');
  });

});