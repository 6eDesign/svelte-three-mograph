export const random = clamp => Math.random() * clamp * (Math.random() > 0.5 ? 1 : -1);
export const addVariance = variance => num => num + random(variance);
