# Weighted averages

Various weighted average functions.

## Installation

```
npm install -g @basementuniverse/weighted-averages
```

## Usage

```ts
import {
  weightedArithmeticMean,
  weightedGeometricMean,
  inverseWeightedGeometricMean,
  weightedHarmonicMean,
  inverseWeightedHarmonicMean,
} from '@basementuniverse/weighted-averages';

console.log(weightedArithmeticMean([1, 2, 3], [1, 1, 1]));
console.log(weightedGeometricMean([1, 2, 3], [1, 1, 1]));
console.log(inverseWeightedGeometricMean([1, 2, 3], [1, 1, 1]));
console.log(weightedHarmonicMean([1, 2, 3], [1, 1, 1]));
console.log(inverseWeightedHarmonicMean([1, 2, 3], [1, 1, 1]));
```

See `demo.html` for a browser-based demo.
