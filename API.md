<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

# toKeys

Get keys from an array or an object

**Parameters**

-   `keys`  

Returns **[array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** An array of key values (strings).

# keyMirror

Get keys from an array or an object

**Properties**

-   `key` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The original key passed in.
-   `value` **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The string version of the key passed in.

**Examples**

```javascript
const keys = ['one', 'two', 'three']
const mirror = keyMirror(keys)
console.log(mirror) // { one: 'one', two: 'two', three: 'three' }
```

```javascript
const keys = { one: null, two: null, three: null }
const mirror = keyMirror(keys)
console.log(mirror) // { one: 'one', two: 'two', three: 'three' }
```

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** An object whose key/value pairs match the keys passed in.
