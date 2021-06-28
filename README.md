# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @ricardowgomes/lotide`

**Require it:**

`const lotide = require('@ricardowgomes/lotide');`

**Call it:**

`const results = lotide.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `countLetters(str)`: Receives a `string` as an argument and return an `object` with the letter[**key**] and number of times counted as **value**, that can be easily accessed with dot notation.

- `countOnly(arr)`: Receives an array of `strings` and returns an `object` with the `string`[**key**] and the number of times counted as **value**, that can be easily accessed with dot notation.

- `findKey(obj, callback)`: Receives an `object` and a `callback-function` define a criteria to return the first **key** based on the **value** of the `object`.

- `findKeyByValue(obj, str)`: Receives an `object` and a `string` that returns the first **key** based on the **value** of the argument `string`. If the value is not in the object, it returns `undefined`.

- `flatten(arr)`: Receives an `array` and if this `array` is nested (2D array), it returns a flatten `array`, in other words, an 1D `array`.

- `head(arr)`: Receives an `array` and returns the head element of that `array`.

- `map(arr, callback)`: Receives an `array` and a `callback-function`, the `function` returns the `array` with each element transformed based on `function` logic provided.

- `middle(arr)`: Receives an `array`, if the `array.length` is even, it returns an `array` with the two middle elements, if is odd, it returns the single middle element.

- `letterPositions(str)`: Receives a `string` as an argument and return an `object` with each letter as **key** and the index of each letter as **value**, that can be easily accessed with dot notation. If there is more than one of the same letter, the **value** of that letter is an `array` with all indexes.

- `takeUntil(arr, callback)`: Receives an `array` and a `callback-function`, that returns the `array` with the elements until specific logic of the `function`.

- `tail(arr)`: Receives an `array` as argument and returns the tail element of that `array`.
