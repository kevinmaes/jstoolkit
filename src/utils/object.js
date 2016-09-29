// Identity function to use as a default iterator.
export const identity = x => x;

// A generic object property getter function.
export const property = (prop = '', obj) => obj[prop]

// A function that takes the name of a property and either returns its value
// or attempts to invoke a function with that name on the object passed in.
export const result = (name, obj) => {
  const prop = obj[name]
  return (typeof prop === 'function') ? prop() : prop
}
