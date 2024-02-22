export function weightedArithmeticMean(values, weights) {
    weights = new Array(values.length).fill(1).map(function (v, i) { var _a; return (_a = weights === null || weights === void 0 ? void 0 : weights[i]) !== null && _a !== void 0 ? _a : v; });
    return (values.reduce(function (a, v, i) { return a + v * weights[i]; }, 0) /
        Math.max(weights.reduce(function (a, v) { return a + v; }, 0), 1));
}
export function weightedGeometricMean(values, weights, min) {
    if (min === void 0) { min = Number.EPSILON; }
    if (values.length === 0) {
        return 0;
    }
    if (min <= 0 && values.some(function (v) { return v <= 0; })) {
        return 0;
    }
    min = Math.max(min, Number.EPSILON);
    weights = new Array(values.length).fill(1).map(function (v, i) { var _a; return (_a = weights === null || weights === void 0 ? void 0 : weights[i]) !== null && _a !== void 0 ? _a : v; });
    return Math.pow(values.reduce(function (a, v, i) { return a * Math.pow(Math.max(v, min), weights[i]); }, 1), 1 /
        Math.max(weights.reduce(function (a, v) { return a + v; }, 0), 1));
}
export function inverseWeightedGeometricMean(values, weights, min, max) {
    if (min === void 0) { min = Number.EPSILON; }
    if (max === void 0) { max = 1; }
    return (max -
        weightedGeometricMean(values.map(function (v) { return max - v; }), weights, min));
}
export function weightedHarmonicMean(values, weights) {
    weights = new Array(values.length).fill(1).map(function (v, i) { var _a; return (_a = weights === null || weights === void 0 ? void 0 : weights[i]) !== null && _a !== void 0 ? _a : v; });
    return (weights.reduce(function (a, v) { return a + v; }, 0) /
        Math.max(weights.reduce(function (a, v, i) { return a + v / Math.max(values[i], Number.EPSILON); }, 0), 1));
}
export function inverseWeightedHarmonicMean(values, weights, max) {
    if (max === void 0) { max = 1; }
    return (max -
        weightedHarmonicMean(values.map(function (v) { return max - v; }), weights));
}
