"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inverseWeightedHarmonicMean = exports.weightedHarmonicMean = exports.inverseWeightedGeometricMean = exports.weightedGeometricMean = exports.weightedArithmeticMean = void 0;
function weightedArithmeticMean(values, weights) {
    weights = new Array(values.length).fill(1).map((v, i) => { var _a; return (_a = weights === null || weights === void 0 ? void 0 : weights[i]) !== null && _a !== void 0 ? _a : v; });
    return (values.reduce((a, v, i) => a + v * weights[i], 0) /
        Math.max(weights.reduce((a, v) => a + v, 0), 1));
}
exports.weightedArithmeticMean = weightedArithmeticMean;
function weightedGeometricMean(values, weights, min = Number.EPSILON) {
    if (values.length === 0) {
        return 0;
    }
    if (min <= 0 && values.some(v => v <= 0)) {
        return 0;
    }
    min = Math.max(min, Number.EPSILON);
    weights = new Array(values.length).fill(1).map((v, i) => { var _a; return (_a = weights === null || weights === void 0 ? void 0 : weights[i]) !== null && _a !== void 0 ? _a : v; });
    return Math.pow(values.reduce((a, v, i) => a * Math.pow(Math.max(v, min), weights[i]), 1), 1 /
        Math.max(weights.reduce((a, v) => a + v, 0), 1));
}
exports.weightedGeometricMean = weightedGeometricMean;
function inverseWeightedGeometricMean(values, weights, min = Number.EPSILON, max = 1) {
    return (max -
        weightedGeometricMean(values.map(v => max - v), weights, min));
}
exports.inverseWeightedGeometricMean = inverseWeightedGeometricMean;
function weightedHarmonicMean(values, weights) {
    weights = new Array(values.length).fill(1).map((v, i) => { var _a; return (_a = weights === null || weights === void 0 ? void 0 : weights[i]) !== null && _a !== void 0 ? _a : v; });
    return (weights.reduce((a, v) => a + v, 0) /
        Math.max(weights.reduce((a, v, i) => a + v / Math.max(values[i], Number.EPSILON), 0), 1));
}
exports.weightedHarmonicMean = weightedHarmonicMean;
function inverseWeightedHarmonicMean(values, weights, max = 1) {
    return (max -
        weightedHarmonicMean(values.map(v => max - v), weights));
}
exports.inverseWeightedHarmonicMean = inverseWeightedHarmonicMean;
