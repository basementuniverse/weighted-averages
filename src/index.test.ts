import {
  weightedArithmeticMean,
  weightedGeometricMean,
  inverseWeightedGeometricMean,
  weightedHarmonicMean,
  inverseWeightedHarmonicMean,
} from '.';

test('weightedArithmeticMean', () => {
  expect(weightedArithmeticMean([])).toBe(0);
  expect(weightedArithmeticMean([], [])).toBe(0);
  expect(weightedArithmeticMean([1])).toBe(1);
  expect(weightedArithmeticMean([1], [])).toBe(1);
  expect(weightedArithmeticMean([1], [0])).toBe(0);
  expect(weightedArithmeticMean([1], [1])).toBe(1);
  expect(weightedArithmeticMean([1], [2])).toBe(1);
  expect(weightedArithmeticMean([1], [1, 1])).toBe(1);
  expect(weightedArithmeticMean([1], [1, 2])).toBe(1);
  expect(weightedArithmeticMean([1, 1, 1])).toBe(1);
  expect(weightedArithmeticMean([1, 2, 3])).toBe(2);
  expect(weightedArithmeticMean([1, 2, 3], [1, 1, 1])).toBe(2);
  expect(weightedArithmeticMean([1, 2, 3], [1, 2, 3])).toBeCloseTo(2.333, 2);
  expect(weightedArithmeticMean([1, 2, 3], [3, 2, 1])).toBeCloseTo(1.666, 2);
  expect(weightedArithmeticMean([1, 2, 3], [3, 2])).toBeCloseTo(1.666, 2);
  expect(weightedArithmeticMean([1, 2, 3], [3, 2, 1, 4])).toBeCloseTo(1.666, 2);
});

test('weightedGeometricMean', () => {
  expect(weightedGeometricMean([])).toBe(0);
  expect(weightedGeometricMean([], [])).toBe(0);
  expect(weightedGeometricMean([1])).toBe(1);
  expect(weightedGeometricMean([1], [])).toBe(1);
  expect(weightedGeometricMean([1], [0])).toBe(1);
  expect(weightedGeometricMean([1], [1])).toBe(1);
  expect(weightedGeometricMean([1], [2])).toBe(1);
  expect(weightedGeometricMean([1], [1, 1])).toBe(1);
  expect(weightedGeometricMean([1], [1, 2])).toBe(1);
  expect(weightedGeometricMean([1, 1, 1])).toBe(1);
  expect(weightedGeometricMean([1, 2, 3])).toBeCloseTo(1.817, 2);
  expect(weightedGeometricMean([1, 2, 3], [1, 1, 1])).toBeCloseTo(1.817, 2);
  expect(weightedGeometricMean([1, 2, 3], [1, 2, 3])).toBeCloseTo(2.182, 2);
  expect(weightedGeometricMean([1, 2, 3], [3, 2, 1])).toBeCloseTo(1.513, 2);
  expect(weightedGeometricMean([1, 2, 3], [3, 2])).toBeCloseTo(1.513, 2);
  expect(weightedGeometricMean([1, 2, 3], [3, 2, 1, 4])).toBeCloseTo(1.513, 2);
});

test('inverseWeightedGeometricMean', () => {
  expect(inverseWeightedGeometricMean([], undefined, undefined, 3)).toBe(3);
  expect(inverseWeightedGeometricMean([], [], undefined, 3)).toBe(3);
  expect(inverseWeightedGeometricMean([1], undefined, undefined, 3)).toBe(1);
  expect(inverseWeightedGeometricMean([1], [], undefined, 3)).toBe(1);
  expect(inverseWeightedGeometricMean([1], [0], undefined, 3)).toBe(2);
  expect(inverseWeightedGeometricMean([1], [1], undefined, 3)).toBe(1);
  expect(inverseWeightedGeometricMean([1], [2], undefined, 3)).toBe(1);
  expect(inverseWeightedGeometricMean([1], [1, 1], undefined, 3)).toBe(1);
  expect(inverseWeightedGeometricMean([1], [1, 2], undefined, 3)).toBe(1);
  expect(inverseWeightedGeometricMean([1, 1, 1], undefined, undefined, 3)).toBe(1);
  expect(inverseWeightedGeometricMean([1, 2, 3], undefined, undefined, 3)).toBeCloseTo(2.999, 2);
  expect(inverseWeightedGeometricMean([1, 2, 3], [1, 1, 1], undefined, 3)).toBeCloseTo(2.999, 2);
  expect(inverseWeightedGeometricMean([1, 2, 3], [1, 2, 3], undefined, 3)).toBeCloseTo(2.999, 2);
  expect(inverseWeightedGeometricMean([1, 2, 3], [3, 2, 1], undefined, 3)).toBeCloseTo(2.996, 2);
  expect(inverseWeightedGeometricMean([1, 2, 3], [3, 2], undefined, 3)).toBeCloseTo(2.996, 2);
  expect(inverseWeightedGeometricMean([1, 2, 3], [3, 2, 1, 4], undefined, 3)).toBeCloseTo(2.996, 2);
});

test('weightedHarmonicMean', () => {
  expect(weightedHarmonicMean([])).toBe(0);
  expect(weightedHarmonicMean([], [])).toBe(0);
  expect(weightedHarmonicMean([1])).toBe(1);
  expect(weightedHarmonicMean([1], [])).toBe(1);
  expect(weightedHarmonicMean([1], [0])).toBe(0);
  expect(weightedHarmonicMean([1], [1])).toBe(1);
  expect(weightedHarmonicMean([1], [2])).toBe(1);
  expect(weightedHarmonicMean([1], [1, 1])).toBe(1);
  expect(weightedHarmonicMean([1], [1, 2])).toBe(1);
  expect(weightedHarmonicMean([1, 1, 1])).toBe(1);
  expect(weightedHarmonicMean([1, 2, 3])).toBeCloseTo(1.636, 2);
  expect(weightedHarmonicMean([1, 2, 3], [1, 1, 1])).toBeCloseTo(1.636, 2);
  expect(weightedHarmonicMean([1, 2, 3], [1, 2, 3])).toBe(2);
  expect(weightedHarmonicMean([1, 2, 3], [3, 2, 1])).toBeCloseTo(1.384, 2);
  expect(weightedHarmonicMean([1, 2, 3], [3, 2])).toBeCloseTo(1.384, 2);
  expect(weightedHarmonicMean([1, 2, 3], [3, 2, 1, 4])).toBeCloseTo(1.384, 2);
});

test('inverseWeightedHarmonicMean', () => {
  expect(inverseWeightedHarmonicMean([], undefined, 3)).toBe(3);
  expect(inverseWeightedHarmonicMean([], [], 3)).toBe(3);
  expect(inverseWeightedHarmonicMean([1], undefined, 3)).toBe(2);
  expect(inverseWeightedHarmonicMean([1], [], 3)).toBe(2);
  expect(inverseWeightedHarmonicMean([1], [0], 3)).toBe(3);
  expect(inverseWeightedHarmonicMean([1], [1], 3)).toBe(2);
  expect(inverseWeightedHarmonicMean([1], [2], 3)).toBe(1);
  expect(inverseWeightedHarmonicMean([1], [1, 1], 3)).toBe(2);
  expect(inverseWeightedHarmonicMean([1], [1, 2], 3)).toBe(2);
  expect(inverseWeightedHarmonicMean([1, 1, 1], undefined, 3)).toBe(1);
  expect(inverseWeightedHarmonicMean([1, 2, 3], undefined, 3)).toBeCloseTo(2.999, 2);
  expect(inverseWeightedHarmonicMean([1, 2, 3], [1, 1, 1], 3)).toBeCloseTo(2.999, 2);
  expect(inverseWeightedHarmonicMean([1, 2, 3], [1, 2, 3], 3)).toBeCloseTo(2.999, 2);
  expect(inverseWeightedHarmonicMean([1, 2, 3], [3, 2, 1], 3)).toBeCloseTo(2.999, 2);
  expect(inverseWeightedHarmonicMean([1, 2, 3], [3, 2], 3)).toBeCloseTo(2.999, 2);
  expect(inverseWeightedHarmonicMean([1, 2, 3], [3, 2, 1, 4], 3)).toBeCloseTo(2.999, 2);
});
