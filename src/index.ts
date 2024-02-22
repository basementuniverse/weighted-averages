/**
 * Return the weighted arithmetic mean of an array of numbers.
 *
 * Same as ordinary arithmetic mean, but each value contributes a
 * different amount to the final value, depending on weight.
 *
 * If no weights are defined, or if all weights are equal, this is
 * equivalent to ordinary arithmetic mean.
 *
 * ```asciimath
 * bar x = (sum_(i=1)^n w_i x_i) / (sum_(i=1)^n w_i)
 * ```
 *
 * @see https://en.wikipedia.org/wiki/Weighted_arithmetic_mean
 *
 * @param {number[]} values An array of numbers
 * @param {number[]} [weights] An array of weights, default weight is 1
 */
export function weightedArithmeticMean(
  values: number[],
  weights?: number[]
): number {
  weights = new Array(values.length).fill(1).map((v, i) => weights?.[i] ?? v);
  return (
    values.reduce((a, v, i) => a + v * weights![i], 0) /
    Math.max(
      weights.reduce((a, v) => a + v, 0),
      1
    )
  );
}

/**
 * Return the weighted geometric mean of an array of numbers.
 *
 * Generally results in small values being more of a limiting factor, so
 * for example if one of the values is close to 0, the final weighted mean
 * will also be close to 0.
 *
 * ```asciimath
 * bar x = (prod_(i=1)^n x_i ^ (w_i)) ^ (1 // {: sum_(i=1)^n w_i :})
 * ```
 *
 * @see https://en.wikipedia.org/wiki/Weighted_geometric_mean
 *
 * @param {number[]} values An array of numbers
 * @param {number[]} [weights] An array of weights, default weight is 1
 * @param {number} [min=Number.EPSILON] Any 0-values will be clamped above this
 */
export function weightedGeometricMean(
  values: number[],
  weights?: number[],
  min: number = Number.EPSILON
): number {
  if (values.length === 0) {
    return 0;
  }
  if (min <= 0 && values.some(v => v <= 0)) {
    return 0;
  }

  min = Math.max(min, Number.EPSILON);
  weights = new Array(values.length).fill(1).map((v, i) => weights?.[i] ?? v);
  return Math.pow(
    values.reduce(
      (a, v, i) => a * Math.pow(Math.max(v, min), weights![i]),
      1
    ),
    1 /
      Math.max(
        weights.reduce((a, v) => a + v, 0),
        1
      )
  );
}

/**
 * Return the inverse weighted geometric mean of an array of numbers.
 *
 * Same as weighted geometric mean, except large values push the resulting
 * average up instead of small values pushing the resulting average down.
 *
 * @param {number[]} values An array of numbers
 * @param {number[]} [weights] An array of weights, default weight is 1
 * @param {number} [min=Number.EPSILON] Any 0-values will be clamped above this
 * @param {number} [max=1] The maximum possible value in the array of numbers
 */
export function inverseWeightedGeometricMean(
  values: number[],
  weights?: number[],
  min: number = Number.EPSILON,
  max: number = 1
): number {
  return (
    max -
    weightedGeometricMean(
      values.map(v => max - v),
      weights,
      min
    )
  );
}

/**
 * Return the weighted harmonic mean of an array of numbers.
 *
 * Generally results in small values being even more of a limiting factor
 * than geometric mean. Often used to calculate the average of rates, where
 * small rates are more important.
 *
 * ```asciimath
 * bar x = (sum_(i=1)^n w_i) / (sum_(i=1)^n w_i / x_i)
 * ```
 *
 * @see https://en.wikipedia.org/wiki/Harmonic_mean
 *
 * @param {number[]} values An array of numbers
 * @param {number[]} [weights] An array of weights, default weight is 1
 */
export function weightedHarmonicMean(
  values: number[],
  weights?: number[]
): number {
  weights = new Array(values.length).fill(1).map((v, i) => weights?.[i] ?? v);
  return (
    weights.reduce((a, v) => a + v, 0) /
    Math.max(
      weights.reduce(
        (a, v, i) => a + v / Math.max(values[i], Number.EPSILON),
        0
      ),
      1
    )
  );
}

/**
 * Return the inverse weighted harmonic mean of an array of numbers.
 *
 * Same as weighted harmonic mean, except large values push the resulting
 * average up instead of small values pushing the resulting average down.
 *
 * @param {number[]} values An array of numbers
 * @param {number[]} [weights] An array of weights, default weight is 1
 * @param {number} [max=1] The maximum possible value in the array of numbers
 */
export function inverseWeightedHarmonicMean(
  values: number[],
  weights?: number[],
  max: number = 1
): number {
  return (
    max -
    weightedHarmonicMean(
      values.map(v => max - v),
      weights
    )
  );
}
