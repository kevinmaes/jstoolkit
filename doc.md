# keyMirror

Transform an array or an object with key values into an object with key/value
pairs where the values are string representations of the keys.

**Parameters**

-   `keys` **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object))** An array or object whose elements or keys are key values.

**Examples**

```javascript
const keys = ['one', 'two', 'three']
const mirror = keyMirror(keys)
// => { one: 'one', two: 'two', three: 'three' }
```

```javascript
const keys = { one: null, two: null, three: null }
const mirror = keyMirror(keys)
// => { one: 'one', two: 'two', three: 'three' }
```

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** An object whose key/value pairs match the keys passed in.

# filterMap

A reducer implementation that simultaneously filters and then maps over
an array, only looping over the array once.

**Parameters**

-   `filter` **\[[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)](default identity)** A filter iterator function.
-   `map`   (optional, default `identity`)
-   `array` **\[[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Any>](default \[])** The array to filter and/or map over.
-   `until` **\[[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** An optional number indicating the max number of
    desired array results.

**Examples**

```javascript
const const array = [
  { id: 1, val: '1' },
  { id: 2, val: '2' },
  { id: 3, val: '3' },
  { id: 4, val: '4' },
  { id: 5, val: '5' },
]
const isOdd = arg => !!(arg % 2)
const getVal = arg => arg.val

// Invoke filterMap with filter function, map function, and array data.
const odds = filterMap(isOdd, getVal, array)
// => { '1', '3', '5' }

// Pass optional 'until' param with a value of 2 to limit length of results.
const twoOdds = filterMap(isOdd, getVal, array, 2)
// => { '1', '3' }
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** An array of key values (strings).

# composeFilters

A function that accepts multiple filter functions and returns a function that,
when called, will attempt to invoke all filter functions.
If any filter function returns false then that function will return false,
otherwise, it returns true if all filters return true.

**Parameters**

-   `filters` **...[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Any number of filter functions.

**Examples**

```javascript
// 2 filters, both return true.
const filter1 = () => true
const filter2 = () => true
composition = composeFilter(filter1, filter2)
composition()
// => true
```

```javascript
// 2 filters, both return false.
const filter1 = () => false
const filter2 = () => false
composition = composeFilter(filter1, filter2)
composition()
// => false
```

```javascript
// 2 filters, the first returns false.
const filter1 = () => false
const filter2 = () => true
composition = composeFilter(filter1, filter2)
composition()
// => false

 * @example
// 2 filters, the second returns false.
const filter1 = () => true
const filter2 = () => false
composition = composeFilter(filter1, filter2)
composition()
// => false
```

Returns **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** A wrapper function which will invoke all filter functions
with whatever arguments it is passed.

# toKeys

Get keys from an array or an object

**Parameters**

-   `keys` **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object))** An array or object whose elements or keys are key values.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** An array of key values (strings).
