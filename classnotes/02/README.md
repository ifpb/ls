# Estruturas e Funções

  - [Estruturas de Decisão](#estruturas-de-decisão)
    - [if](#if)
    - [switch](#switch)
  - [Estrutura de Repetição](#estrutura-de-repetição)
    - [while](#while)
    - [do...while](#dowhile)
    - [for](#for)
  - [Funções](#funções)
    - [Declaração de função](#declaração-de-função)
    - [Case Sensitive](#case-sensitive)
    - [Redefinição de Função](#redefinição-de-função)
    - [Parâmetro Default](#parâmetro-default)
    - [Parâmetro Rest](#parâmetro-rest)
  - [Definição de Módulos](#definição-de-módulos)

## Estruturas de Decisão

---

```js
const number1 = 10;
const number2 = 10;
const operator = '+'; // (+, -)

// decision

console.log(result); //=> 20
```

### if

```js
if (operator === '+') {
    result = number1 + number2;
} else if (operator === '-') {
    result = number1 - number2;
} else {
    result = 'Invalid operator';
}
```

### switch

```js
switch (operator) {
  case '+':
    result = number1 + number2;
    break;
  case '-':
    result = number1 - number2;
    break;
  default:
    result = 'Invalid operator';
}
```

## Estrutura de Repetição

---

```
1
2
...
9
10
```

### while

```js
let flag = 1;

while (flag <= 10) {
  console.log(flag);
  flag += 1;
}
```

### do...while
```js
let flag = 1;

do {
  console.log(flag);
  flag += 1;
} while (flag < 10)
```

### for
```js
for (let flag = 1; flag <= 10; flag += 1) {
  console.log(flag);
}
```

## Funções

---

### Declaração de função

```js
function addition(param1, param2) {
  return param1 + param2;
}

console.log(addition(1)); //=> NaN
console.log(addition(1, 2)); //=> 3
console.log(addition(1, 2, 3)); //=> 3
```

```js
const addition = function(param1, param2) {
  return param1 + param2;
}

console.log(addition(1, 2)); //=> 3
```

```js
const addition = (param1, param2) => {
  return param1 + param2;
}

console.log(addition(1, 2)); //=> 3
```

```js
const addition = (param1, param2) => param1 + param2;

console.log(addition(1, 2)); //=> 3
```

### Case Sensitive


```js
function addition(param1, param2) {
  return param1 + param2;
}

function Addition(param) {
  return param + 1;
}

console.log(Addition(1)); //=> 2
console.log(Addition(1, 2)); //=> 2
```

### Redefinição de Função


```js
function addition(param1, param2) {
  return param1 + param2;
}

function addition(param) {
  return param + 1;
}

console.log(addition(1)); //=> 2
console.log(addition(1, 2)); //=> 2
```

### Parâmetro Default


```js
function addition(param1, param2 = 0) {
  return param1 + param2;
}

console.log(addition(1)); //=> 1
console.log(addition(1, 2)); //=> 3
```

### Parâmetro Rest

```js
function addition(...params) {
  let summation = 0;
  for (let value of params) {
    summation += value;
  }
  return summation;
}

console.log(addition(1)); //=> 1 ([1])
console.log(addition(1, 1)); //=> 2 ([1, 1])
console.log(addition(1, 1, 1, 1)); //=> 4 ([1, 1, 1, 1])
```

## [Definição de Módulos](https://ifpb.github.io/javascript-guide/ecma/modules/)

---

```js
{% include_relative codes/function-sum/index.js %}
```

- [Common Javascript - CJS](https://nodejs.org/api/modules.html)
- [ECMAScript Modules - ESM](https://nodejs.org/api/esm.html)

**CENÁRIOS**

```
src
├── lib.js
└── main.js
```

|     | Uma Função | Várias Funções |
| --- | ---------- | -------------- |
| CJS | 1.1        | 2.1            |
| ESM | 1.2        | 2.2            |

**CENÁRIO 1.1 - Uma função no CJS**

src/lib.js:

```js
{% include_relative codes/module-cjs-default/lib.js %}
```

src/main.js:

```js
{% include_relative codes/module-cjs-default/main.js %}
```

**CENÁRIO 1.2 - Uma função no ESM**

src/lib.js:

```js
{% include_relative codes/module-esm-default/lib.js %}
```

src/main.js:

```js
{% include_relative codes/module-esm-default/main.js %}
```

**CENÁRIO 2.1 - Várias funções no CJS**

src/lib.js:

```js
{% include_relative codes/module-cjs-named/lib.js %}
```

src/main.js:

```js
{% include_relative codes/module-cjs-named/main.js %}
```

**CENÁRIO 2.2 - Várias funções no ESM**

src/lib.js:

```js
{% include_relative codes/module-esm-named/lib.js %}
```

src/main.js:

```js
{% include_relative codes/module-esm-named/main.js %}
```

**RESUMO**

|     | Uma Função                                               | Várias Funções                                                                 |
| --- | -------------------------------------------------------- | ------------------------------------------------------------------------------ |
| CJS | `module.exports = sum`<br>`const sum = require('./lib')` | `module.exports = { sum, minus }`<br>`const { sum, minus } = require('./lib')` |
| ESM | `export default sum;`<br>`import sum from './lib'`       | `export { sum, minus }`<br>`import { sum, minus } from './lib'`                |

> **Warning:** To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

```json
{% include_relative codes/module-esm-default/package.json %}
```
