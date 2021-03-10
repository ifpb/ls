# Array

  - [Criação](#criação)
  - [Acesso e Alteração](#acesso-e-alteração)
  - [Tipos Múltiplos](#tipos-múltiplos)
  - [Spread Operator](#spread-operator)
  - [Iteração](#iteração)
  - [Objeto Array](#objeto-array)

## Criação

---

```js
const numbers = [1, 2, 4, 7];

console.log(numbers); //=> [ 1, 2, 4, 7 ]
```

```js
const numbers = [];

numbers[0] = 10;
numbers[1] = 20;
numbers[10] = 100;

console.log(numbers); //=> [ 10, 20, , , , , , , , , 100 ]
```

## Acesso e Alteração

---

```js
const numbers = [1, 2, 4, 7];

console.log(numbers[0]); //=> 1
console.log(numbers[3]); //=> 7
console.log(numbers[4]); //=> undefined
console.log(numbers); //=> [ 1, 2, 4, 7 ]
```

```js
const numbers = [1, 2, 4, 7];

// change value
numbers[2] = 5;

// add value
numbers[4] = 10;
console.log(numbers); //=> [ 1, 2, 5, 7, 10 ]

// delete value
delete numbers[4];
console.log(numbers); //=> [ 1, 2, 5, 7,  ]
```

## Tipos Múltiplos

---

```js
const values = [1, 'John', true, null, [1, 2]];
console.log(values[1]); //=> "John"
console.log(values[4]); //=> [1, 2]
console.log(values[4][1]); //=> 2
```

## Spread Operator

---

```js
const numbers = [1, 2, 3];
console.log([...numbers, 4, 5]); //=> [ 1, 2, 3, 4, 5 ]
```

## Iteração

---

for

```js
const numbers = [1, 2, 4];
let result = '';

for (let flag = 0; flag < numbers.length; flag++) {
  result += numbers[flag] + ' ';
}

console.log(result); //=> "1 2 4 "
```

for..in

```js
const numbers = [1, 2, 4];
let result = '';

for (const index in numbers) {
  result += numbers[index] + ' ';
}

console.log(result); //=> "1 2 4 "
```

for..of

```js
const numbers = [1, 2, 4];
let result = '';

for (const value of numbers) {
  result += value + ' ';
}

console.log(result); //=> "1 2 4 "
```

## Objeto Array

---

Property: `length`

```js
const numbers = [1, 2, 3];
console.log(numbers.length); //=> 3
```

Mutator: `push()`, `unshift()`, `pop()`, `shift()`, `reverse()`, `sort()`, `splice()`

```js
const numbers = [1, 2, 3];
console.log(numbers.push(4)); //=> 4
console.log(numbers); //=> [ 1, 2, 3, 4 ]
```

```js
const numbers = [1, 2, 3];
console.log(numbers.unshift(0)); //=> 4
console.log(numbers); //=> [ 0, 1, 2, 3 ]
```

```js
const numbers = [1, 2, 3];
console.log(numbers.pop()); //=> 3
console.log(numbers); //=> [ 1, 2 ]
```

```js
const numbers = [1, 2, 3];
console.log(numbers.shift()); //=> 1
console.log(numbers); //=> [ 2, 3 ]
```

```js
const numbers = [1, 2, 3];
console.log(numbers.reverse()); //=> [ 3, 2, 1 ]
console.log(numbers); //=> [ 3, 2, 1 ]
```

```js
const numbers = [3, 1, 2];
console.log(numbers.sort()); //=> [ 1, 2, 3 ]
console.log(numbers); //=> [ 1, 2, 3 ]
```

```js
const numbers = [1, 2, 3];
console.log(numbers.splice(1, 2)); //=> [ 2, 3 ]
console.log(numbers); //=> [1]
```

Accessor: `includes()`, `join()`, `slice()`

```js
console.log([1, 2, 3].includes(1)); //=> true
```

```js
console.log([1, 2, 3].join(' ')); //=> "1 2 3"
```

```js
console.log([1, 2, 3].slice(1, 2)); //=> 2
```

Iteration: `map()`, `filter()`, `reduce()`, `every()`, `some()`

```js
const array = [1, 2, 3, 4, 5, 6];
console.log(array.map((value) => value * 2)); //=> [ 2, 4, 6, 8, 10, 12 ]
```

```js
const array = [1, 2, 3, 4, 5, 6];
console.log(array.filter((value) => value % 2 !== 0)); //=> [ 1, 3, 5 ]
```

```js
const array = [1, 2, 3, 4, 5, 6];
console.log(array.reduce((addition, value) => addition + value, 0)); //=> 21
```

```js
const array = [2, 4, 6];
console.log(array.every((value) => value % 2 == 0)); //=> true
```

```js
const array = [1, 2, 3, 4, 5, 6];
console.log(array.some((value) => value % 2 == 0)); //=> true
```
