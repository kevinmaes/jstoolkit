// Identity function to use as a default iterator.
export const identity = x => x;

// A generic object property getter function.
export const property = (prop = '', obj) => obj[prop]
