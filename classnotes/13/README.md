# Expressão Regular

  - [Sintaxe](#sintaxe)
  - [Padrões](#padrões)
    - [Byte](#byte)
    - [CPF](#cpf)
    - [CEP](#cep)
  - [Aplicação](#aplicação)
    - [RegExp.prototype.test()](#regexpprototypetest)
    - [String.prototype.split()](#stringprototypesplit)
    - [HTML input pattern](#html-input-pattern)
    - [Busca em aplicativos](#busca-em-aplicativos)

## Sintaxe

---

| Names                        | Regexp                                                                                                          |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| FLAGS                        | `g`, `i`, `m`, `u`, `y`                                                                                         |
| CHARACTER CLASSES            | `.` , `\d`, `\D`, `\w`, `\W`, `\s`, `\S`, `\`                                                                   |
| CHARACTER SET                | `[]`, `[^]`                                                                                                     |
| BOUNDARIES                   | `^`, `$`, `\b`, `\B`                                                                                            |
| ALTERNATION                  | `|`                                                                                                             |
| GROUPING AND BACK REFERENCES | `()`, `\n`, `(?:x)`                                                                                             |
| QUANTIFIERS                  | Greedy (`*`, `+`, `?`, `{n}`, `{n,}`, `{n, m}`), Non-Greedy (`x*?`, `x+?`, `x??`, `x{n}?`, `x{n,}?`, `x{n,m}?`) |
| ASSERTIONS                   | `x(?=y)`, `x(?!y)`                                                                                              |

## Padrões

---

### Byte

> /[01]{8}/

![](assets/byte.png)

```
01010101
11110000
11110002
```

```js
const pattern = /[01]{8}/;
console.log(pattern.test('01010101')); //=> true
console.log(pattern.test('11110000')); //=> true
console.log(pattern.test('11110002')); //=> false
```

### CPF

> /^(\d{11}\|\d{3}\.\d{3}\.\d{3}-\d{2})$/

![](assets/cpf.png)

```
11122233344
111.222.333-44
111x222.333-44
1112223334
111222333440
11122233344X
```

```js
const pattern = /^(\d{11}|\d{3}\.\d{3}\.\d{3}-\d{2})$/;
console.log(pattern.test('11122233344')); //=> true
console.log(pattern.test('111.222.333-44')); //=> true
console.log(pattern.test('111x222.333-44')); //=> false
console.log(pattern.test('1112223334')); //=> false
console.log(pattern.test('111222333440')); //=> false
console.log(pattern.test('11122233344X')); //=> false
```

### CEP

> /^(\d{8}\|\d{2}\\.?\d{3}-\d{3})\$/

![](assets/cep.png)

```
01001000
01001-000
01.001-000
a01001000
01-001.000
01.001000
```

```js
const pattern = /^(\d{8}|\d{2}\.?\d{3}-\d{3})$/;
console.log(pattern.test('01001000')); //=> true
console.log(pattern.test('01001-000')); //=> true
console.log(pattern.test('01.001-000')); //=> true
console.log(pattern.test('a01001000')); //=> false
console.log(pattern.test('01-001.000')); //=> false
console.log(pattern.test('01.001000')); //=> false
```

## Aplicação

---

### RegExp.prototype.test()

```js
let message = 'ifpb';
let pattern = /\w+/;
console.log(pattern.test(message)); //=> true
```

### String.prototype.split()

```js
let message = 'lorem ipsum\ndolor';
let pattern = /\s/g;
console.log(message.split(pattern))[('lorem', 'ipsum', 'dolor')];
```

### HTML input pattern

```html
<input type="text" pattern="\d{5}-\d{3}" />
```

### Busca em aplicativos

- [VSCode - Advanced find and replace options](https://code.visualstudio.com/docs/editor/codebasics#_advanced-find-and-replace-options)
