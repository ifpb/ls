# Roteiro das Aulas

## \# 01 - Apresentação da Disciplina

---

**Conteúdo:**

- Apresentação da disciplina:
  - Objetivo, conteúdo, avaliação, comunicação, bibliografia e ferramentas
  - [O que você vai aprender em LS?](http://slides.com/luizcarlos/o-que-vou-aprender-em-ls#/)
- Linguagem Javascript:
  - História e o Padrão [ECMA](https://www.ecma-international.org/publications/standards/Ecma-262.htm)
  - ECMA ([MDN](https://developer.mozilla.org/bm/docs/Web/JavaScript/Reference)), W3C ([MDN](https://developer.mozilla.org/bm/docs/Web/API)) e Biblioteca/Frameworks ([npm](https://www.npmjs.com), [javascripting](https://www.javascripting.com), [bestof.js](https://bestof.js.org))

**Reflexão:**

- O que você vai aprender em LS?
- Como podemos dividir a linguagem Javascript?

**Exercício:**

- Analise o [site da disciplina](https://ifpb.github.io/ls/) e se inscreva no [telegram da disciplina](https://t.me/joinchat/ifpbls20201).
- Configure seu computador com essas [ferramentas](TOOLS.html).
- Pesquise sobre a evolução do Javascript.
- Veja os [projetos](https://ifpb.github.io/projects/) já realizados nesta disciplina.

## \# 02 - Primeiros passos com Javascript

---

**Conteúdo:**

- [Executando Javascript](https://ifpb.github.io/javascript-exercises/ecma/running-javascript.html): prompt do Node.js
- Editando Javascript com [Visual Studio Code (vscode)](http://code.visualstudio.com) e executando com o [Node.js](https://nodejs.org/en/)
- [Sintaxe do Javascript](https://ifpb.github.io/javascript-guide/ecma/)
  - [Declaração de variáveis](https://ifpb.github.io/javascript-guide/ecma/variable/): var, let e const
  - [Valores e Tipos](https://ifpb.github.io/javascript-guide/ecma/values-and-types/): Number, String e Boolean
  - [Expressões e Operadores](https://ifpb.github.io/javascript-guide/ecma/expression-and-operator/)
  - [Tabela de Precedência](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

**Reflexão:**

- Como executamos código Javascript? Que ferramentas podemos usar para programar em Javascript?
- Como declaramos variáveis no Javascript?
- Quais são os tipos primitivos e objetos do Javascript?
- Quais são os operadores do Javascript? Como podemos montar expressões?
- Como saber se um operador é unário, binário ou ternário?

**Exercício:**

- Compare a sintaxe de declaração de variáveis, expressões e operadores do Javascript com alguma outra linguagem. Detalhe, utilize o prompt do node para testar a sintaxe do Javascript.
- Crie um exemplo de [Hello World em JS (ecma/basic-hello/)](https://ifpb.github.io/exercises/problems/algorithms/basic-hello/) para rodar no node usando o vscode.
- Através de `x = 10` crie um script para as seguintes expressões:

| Expressão   | Resultado |
| ----------- | --------- |
| `x+2`       | 12        |
| `x²`        | 100       |
| `3x²+12x-4` | 416       |
| `x+3 > √x`  | true      |

- Verificar se `const x = 8` é par usando operadores binários.
- Qual é a diferença entre `1 == "1a"`, `1 == "1"` e `1 === "1"`?
- Qual é o resultado data expressão `10 > x < 20` para `const x = 15`? Explique.
- Considerando que cor no formato ARGB (8 bits para Alfa, Vermelho, Verde e Azul, nessa ordem) seja guardado em `const color = 0x74C365`, então qual seria a intensidade da cor vermelha?

## \# 03 - Algoritmos básicos no Javascript

---

**Conteúdo:**

- Sintaxe do Javascript
  - [Expressões e Operadores](https://ifpb.github.io/javascript-guide/ecma/expression-and-operator/)
  - [Estruturas de Decisão e Repetição](https://ifpb.github.io/javascript-guide/ecma/statements-and-declarations/): if, switch, for, while, do-while

**Reflexão:**

- Quais são as estruturas de decisão do Javascript?
- Quais são as estruturas de repetição do Javascript?

**Exercício:**

- Crie o algoritmo de [Body Mass Index (BMI) (ecma/basic-bmi)](https://ifpb.github.io/exercises/problems/algorithms/basic-bmi/) usando `if` e `switch`;
- Crie o algoritmo para exibir a séria de [00 até 99 (ecma/basic-numbers-series)](https://ifpb.github.io/javascript-exercises/ecma/basic/numbers/) de dez em dez usando `for`, `while` e `do-while`;
- Crie os algoritmos:
  - [IRRF 2017 (ecma/basic-irrf/)](https://ifpb.github.io/exercises/problems/algorithms/basic-irrf/)
  - [Numbers series (ecma/basic-numbers-series/)](https://ifpb.github.io/exercises/problems/algorithms/basic-numbers-series/)
  - [Harmonic series (ecma/basic-harmonic-series/)](https://ifpb.github.io/exercises/problems/algorithms/basic-harmonic-series/)

## \# 04 - Funções no Javascript

---

**Conteúdo:**

- [Função em Javascript](https://ifpb.github.io/javascript-guide/ecma/function/)
  - [Definição e chamada](https://ifpb.github.io/javascript-guide/ecma/function/#defining-functions--function-statement)
  - [Escopo](https://ifpb.github.io/javascript-guide/ecma/function/#scope)
  - [Case sensitive](https://ifpb.github.io/javascript-guide/ecma/function/#case-sensitive)
  - [Parâmetro Default](https://ifpb.github.io/javascript-guide/ecma/function/#default-parameters)
- [CommonJS (CJS) Modules](https://ifpb.github.io/javascript-guide/ecma/modules/#node-modules---cjs)
- [ECMAScript Modules (ESM): Named uniq exports](https://ifpb.github.io/javascript-guide/ecma/modules/#named-uniq-export)

**Reflexão:**

- Como declaramos e chamamos uma função em JS?
- O que acontece quando passamos uma quantidade de argumentos diferente do total de parâmetros?
- Para chamar uma função é necessário declará-la antes de sua chamada?
- É possível declarar uma variável dentro da função com o mesmo nome de uma variável fora da função?
- O que são parâmetros default?

**Exercício:**

- Crie um script para:
  - [Somar (ecma/function-sum)](https://ifpb.github.io/exercises/problems/algorithms/function-sum/)
  - [Calcular a área do círculo (ecma/function-area-of-circle)](https://ifpb.github.io/exercises/problems/algorithms/function-area-of-circle/)
  - [Calcular operações aritméticas básicas (ecma/function-calc)](https://ifpb.github.io/exercises/problems/algorithms/function-calc/)
- Crie estes outros [scritps (ecma/function-\*)](https://ifpb.github.io/exercises/problems/algorithms/).

## \# 05 - Testes Unitários no Javascript

---

**Conteúdo:**

- Testes unitários de Javascript com [Jest](https://facebook.github.io/jest/):
  - [Node Package Manager (NPM)](https://ifpb.github.io/javascript-guide/packages/npm/)
  - Executando [Jest com ESM](https://ifpb.github.io/javascript-guide/packages/test/jest/)
  - Executando [teste no Jest](https://ifpb.github.io/javascript-exercises/ecma/running-javascript.html#unit-test-jest) nos [desafios sobre ECMAScript](https://ifpb.github.io/javascript-exercises/ecma/)

**Reflexão:**

- Qual é o benefício de utilizar testes unitários?
- Como se configura e executa testes unitários usando o [Jest](https://facebook.github.io/jest/)?
- Qual é a importância do NPM para o Javascript?

**Exercício:**

- Crie um script para:
  - [Gerar um Fatorial (ecma/function-factorial/)](https://ifpb.github.io/exercises/problems/algorithms/function-factorial/)
  - [Triangle Checker (ecma/function-triangle-checker/)](https://ifpb.github.io/exercises/problems/algorithms/function-triangle-checker/)
  - [Prime numbers (ecma/function-prime/)](https://ifpb.github.io/exercises/problems/algorithms/function-prime/)
  - [Calendar (ecma/function-calendar/)](https://ifpb.github.io/exercises/problems/algorithms/function-calendar/)
- Crie estes outros [scritps envolvendo função (ecma/function-\*)](https://ifpb.github.io/exercises/problems/algorithms/).

## \# 06 - Trabalhando com Arrays

---

**Conteúdo:**

- [Array](https://ifpb.github.io/javascript-guide/ecma/array/syntax.html)
  - [Criação](https://ifpb.github.io/javascript-guide/ecma/array/syntax.html#create-an-array--) e [manipulação](https://ifpb.github.io/javascript-guide/ecma/array/syntax.html#changing-array)
  - [Tipos dinâmicos](https://ifpb.github.io/javascript-guide/ecma/array/syntax.html#multiple-types)
  - [Índice nominal](https://ifpb.github.io/javascript-guide/ecma/array/syntax.html#string-index)
  - Loops:
    - [`for..of`](https://ifpb.github.io/javascript-guide/ecma/array/syntax.html#interaction-for-forof-forin-forkey-value-of-entries)
    - [`for..in`](https://ifpb.github.io/javascript-guide/ecma/array/syntax.html#interaction-for-forof-forin-forkey-value-of-entries)
  - [Objeto Array](https://ifpb.github.io/javascript-guide/ecma/array/object.html#object)
    - Característica: [`length`](https://ifpb.github.io/javascript-guide/ecma/array/object.html#arrayprototypelength)
    - Ações:
      - [`push()`](https://ifpb.github.io/javascript-guide/ecma/array/object.html#arrayprototypepush)
      - [`pop()`](https://ifpb.github.io/javascript-guide/ecma/array/object.html#arrayprototypepop)

**Reflexão:**

- Que tipo de dados permite armazenar vários valores em uma variável, e em várias dimensões?
- Como criarmos e manipulamos Arrays no Javascript?
- Qual é a implicação dos índices poderem ser do tipo String?
- Como comparamos dois Arrays?
- Como sabemos se um Array está vazio?
- Depois que criamos uma Array, como fazemos para inserir e remover elementos dele?

**Exercício:**

- Crie um script para:
  - [Array Util: Min, Max, Range (ecma/array-util)](https://ifpb.github.io/exercises/problems/algorithms/array-util/)
  - [Array Operations (ecma/array-operations)](https://ifpb.github.io/exercises/problems/algorithms/array-operations/)
  - [Fibonacci Sequence Array (ecma/array-fibonacci-sequence)](https://ifpb.github.io/exercises/problems/algorithms/array-fibonacci-sequence/)
  - [Prime Numbers (ecma/array-prime-numbers)](https://ifpb.github.io/exercises/problems/algorithms/array-prime-numbers/)
- Crie estes outros [scritps envolvendo array (ecma/array-\*)](https://ifpb.github.io/exercises/problems/algorithms/)

## \# 07 - Trabalhando com Arrays

---

**Conteúdo:**

- [Array](https://ifpb.github.io/javascript-guide/ecma/array/object.html#array)
  - [Objeto Array](https://ifpb.github.io/javascript-cheat-sheet/ecma/#Array)
    - Ações:
      - [`includes()`](https://ifpb.github.io/javascript-guide/ecma/array/object.html#arrayprototypeincludes)
- Manipulações especiais do Array:
  - [Destructuring Assignment](https://ifpb.github.io/javascript-guide/ecma/expression-and-operator/destructuring-assignment.html) ([Assignment Operator](https://ifpb.github.io/javascript-guide/ecma/expression-and-operator/#assignment-operators))
  - [Spread Operator](https://ifpb.github.io/javascript-guide/ecma/array/syntax.html#spread-operator) (Array concat)
  - [Destructuring Assignment](https://ifpb.github.io/javascript-guide/ecma/function/#destructuring-assignment) (Function Params)
  - [Rest param](https://ifpb.github.io/javascript-guide/ecma/function/#rest-parameters-spread-operator-es6) (Function Params)

**Reflexão:**

- Como sabemos se um Array já possui algum elemento?
- Como passamos os valores de um Array como sendo argumentos em uma chamada de função?
- Qual a relação entre Array, Spread Operator e Destructuring Assignment?
- Como definimos uma função que possa receber inúmeros argumentos?

**Exercício:**

- Crie um script para:
  - [Array Util: Zip, Uniq (ecma/array-util)](https://ifpb.github.io/exercises/problems/algorithms/array-util/)
  - [Minimum Withdraw (ecma/array-min-withdraw)](https://ifpb.github.io/exercises/problems/algorithms/array-min-withdraw/)
  - [Roman Number (ecma/array-roman-number)](https://ifpb.github.io/exercises/problems/algorithms/array-roman-number/)
  - [Prime Factors (ecma/array-prime-factors)](https://ifpb.github.io/exercises/problems/algorithms/array-prime-factors/)
- Crie estes outros [scritps envolvendo array (ecma/array-\*)](https://ifpb.github.io/exercises/problems/algorithms/)

## \# 08 - Loop em Array com map, filter, reduce

---

**Conteúdo:**

- [Função](https://ifpb.github.io/javascript-guide/ecma/function/)
  - [Function Expression / Anonymous Function](https://ifpb.github.io/javascript-guide/ecma/function/#function-expression--anonymous-function)
  - [ES6 Arrow Function `=>`](https://ifpb.github.io/javascript-guide/ecma/function/#es6-arrow-function-)
  - [Callback](https://ifpb.github.io/javascript-guide/ecma/function/#callback)
- [Array](https://ifpb.github.io/javascript-guide/ecma/array/object.html)
  - [Objeto Array](https://ifpb.github.io/javascript-cheat-sheet/ecma/#Array) ([Array Iteration](https://ifpb.github.io/javascript-guide/ecma/array/object.html#iteration-foreach-reduce-filter-map-every-some-find-reduceright-entries-keys-values)):
    - [`map`](https://ifpb.github.io/javascript-guide/ecma/array/object.html#arrayprototypemap)
    - [`filter`](https://ifpb.github.io/javascript-guide/ecma/array/object.html#arrayprototypefilter)
    - [`reduce`](https://ifpb.github.io/javascript-guide/ecma/array/object.html#arrayprototypereduce)

**Reflexão:**

- O que é uma função anônima?
- O que é uma Arrow function?
- O que é um callback? Qual é a finalidade de passar uma função para um parâmetro de função?
- Como funciona as ações de iteração do Array?
- É possível filtrar elementos de um Array?
- É possível encandear vários métodos de interação em um Array?

**Exercício:**

- Através do `const array = [1, 2, 3, 4, 5, 6]` crie um script para gerar:
  - Um novo Array com os valores dobrados de `array` usando `map` <br><span style="color:#fff">array.map(e => 2 \* e)</span>
  - Um novo Array com a metade dos valores de `array` usando `map` <br><span style="color:#fff">array.map(e => e / 2)</span>
  - Um novo Array contendo apenas números pares de `array` usando `filter` <br><span style="color:#fff">array.filter(e => !(e & 1))</span>
  - Um novo Array contendo apenas números de índice par de `array` usando `filter` <br><span style="color:#fff">array.filter((e, i) => !(i & 1))</span>
  - A soma e o produtório dos valores de `array` usando o `reduce` <br><span style="color:#fff">array.reduce((s, v) => s + v)<br>array.reduce((s, v) => s \* v)</span>
- Através do `const array = [1, 22, 3, 14, 5, 36]` crie um script para gerar:
  - A soma dos valores pares de `array` usando o `reduce` e o `filter` <br><span style="color:#fff">array.filter(e => !(i & 1)).reduce((s, v) => s + v)</span>
  - A soma dos valores pares dobrados de `array` usando o `map`, `reduce` e o `filter` <br><span style="color:#fff">array.filter(e => !(i & 1)).map(e => 2 \* e).reduce((s, v) => s + v)</span>

## \# 09 - Loop em Array com map, filter, reduce

---

**Conteúdo:**

- [Função](https://ifpb.github.io/javascript-guide/ecma/function/)
  - [Function Expression / Anonymous Function](https://ifpb.github.io/javascript-guide/ecma/function/#function-expression--anonymous-function)
  - [ES6 Arrow Function `=>`](https://ifpb.github.io/javascript-guide/ecma/function/#es6-arrow-function-)
  - [Callback](https://ifpb.github.io/javascript-guide/ecma/function/#callback)
- [Array](https://ifpb.github.io/javascript-guide/ecma/array/object.html)
  - [Objeto Array](https://ifpb.github.io/javascript-cheat-sheet/ecma/#Array)
    - [`map()`](https://ifpb.github.io/javascript-guide/ecma/array/object.html#arrayprototypemap)
    - [`filter()`](https://ifpb.github.io/javascript-guide/ecma/array/object.html#arrayprototypefilter)
    - [`reduce()`](https://ifpb.github.io/javascript-guide/ecma/array/object.html#arrayprototypereduce)

**Reflexão:**

- Quais são os argumentos passados no `callback` dentro do `map`, `filter` e `reduce`?
- Além do `map`, `filter` e `reduce`, existem outros métodos de iteração de Array?
- Os métodos de iteração em um Array, normalmente, alteram os seus valores originais?

**Exercício:**

- Crie um script para:
  - [Array Operations: sum, product, sumOdds (ecma/array-operations)](https://ifpb.github.io/exercises/problems/algorithms/array-operations/)
  - [Array Util: sort (ecma/array-util)](https://ifpb.github.io/exercises/problems/algorithms/array-util/)
  - [Products Array (ecma/array-products)](https://ifpb.github.io/exercises/problems/algorithms/array-products/)
  - [Products Array with Quantity (ecma/array-products-qtd)](https://ifpb.github.io/exercises/problems/algorithms/array-products-qtd/)
- Crie estes outros [scritps envolvendo array (ecma/array-\*)](https://ifpb.github.io/exercises/problems/algorithms/)

## \# 10 - Trabalhando com Strings

---

**Conteúdo:**

- [String](https://ifpb.github.io/javascript-guide/ecma/string/syntax.html)
  - [String Literal](https://ifpb.github.io/javascript-guide/ecma/string/syntax.html#string-literal)
  - [Template String](https://ifpb.github.io/javascript-guide/ecma/string/syntax.html#template-string-ecma6)
  - [Objeto String](https://ifpb.github.io/javascript-cheat-sheet/ecma/#String)
    - Característica:
      - [`length`](https://ifpb.github.io/javascript-guide/ecma/string/object.html#stringprototypelength)
    - Ações:
      - [`toUpperCase()`](https://ifpb.github.io/javascript-guide/ecma/string/object.html#stringprototypetouppercase)
      - [`toLowerCase()`](https://ifpb.github.io/javascript-guide/ecma/string/object.html#stringprototypetolowercase)
      - [`split()`](https://ifpb.github.io/javascript-guide/ecma/string/object.html#stringprototypesplit)
      - [`slice()`](https://ifpb.github.io/javascript-guide/ecma/string/object.html#stringprototypeslice)
- [Array](https://ifpb.github.io/javascript-guide/ecma/array/object.html)
  - [Objeto Array](https://ifpb.github.io/javascript-cheat-sheet/ecma/#Array)
    - Ações:
      - [`join()`](https://ifpb.github.io/javascript-guide/ecma/array/object.html#arrayprototypejoin)
      - [`reverse()`](https://ifpb.github.io/javascript-guide/ecma/array/object.html#arrayprototypereverse)
      - [`slice()`](https://ifpb.github.io/javascript-guide/ecma/array/object.html#arrayprototypeslice)

**Reflexão:**

- Como se cria uma String em JS?
- Qual é a forma mais adequada de concatenação de String desde o ES6?
- Como acessar um caracter da String?
- Quais são as características e ações do objeto String?
- Um Array pode se transformar em uma String? E vice-versa?
- Como trabalhar a String como um Array de palavras ou de caracteres?
- Como criar um Javascript para através da String `Lorem ipsum` gerar `muspi meroL`?

**Exercício:**

- Crie um script para:
  - [List Generator (ecma/string-list-generator)](https://ifpb.github.io/javascript-exercises/ecma/string/list-generator)
  - [Table Generator (ecma/string-table-generator)](https://ifpb.github.io/javascript-exercises/ecma/string/table-generator)
  - [Hamming (ecma/string-hamming)](https://ifpb.github.io/javascript-exercises/ecma/string/hamming)
  - [Rna Transcription (ecma/string-rna-transcription)](https://ifpb.github.io/javascript-exercises/ecma/string/rna-transcription)
- Crie estes outros [scritps envolvendo string (ecma/string-\*)](https://ifpb.github.io/javascript-exercises/ecma/#string)

## \# 11 - Trabalhando com Strings

---

**Conteúdo:**

- [String](https://ifpb.github.io/javascript-guide/ecma/string/object.html)
  - [Objeto String](https://ifpb.github.io/javascript-cheat-sheet/ecma/#String)
    - Ações:
      - [`replace()`](https://ifpb.github.io/javascript-guide/ecma/string/object.html#stringprototypereplace)
      - [`substr()`](https://ifpb.github.io/javascript-guide/ecma/string/object.html#stringprototypesubstr)
      - [`substring()`](https://ifpb.github.io/javascript-guide/ecma/string/object.html#stringprototypesubstring)
      - [`search()`](https://ifpb.github.io/javascript-guide/ecma/string/object.html#stringprototypesearch)
      - [`includes()`](https://ifpb.github.io/javascript-guide/ecma/string/object.html#stringprototypeincludes)

**Reflexão:**

- Quais são as características e ações do objeto String?
- Como se coleta um pedaço da String?
- Como se substitui um pedaço da String por outro?
- Ao consultar uma palavra com `search`, o que acontece se a palavra não for encontrada?
- É possível fazer uma substituição global usando `split` e `join` em vez de usar múltiplos `replace`?

**Exercício:**

- Na variável `name` a seguir tente exibir a String contento apenas o nome e o email:

```js
const name = `student: Alice; email: alice@email.com`;
```

```
Alice; alice@email.com
```

- Na variável `name` tente substituir toda ocorrência de `Javascript` por `JS`:

```js
const name = `The JavaScript is executed by the browser's JavaScript engine, after the HTML and CSS have been assembled and put together into a web page. This ensures that the structure and style of the page are already in place by the time the JavaScript starts to run.`;
```

```
The JS is executed by the browser's JS engine, after the HTML and CSS have been assembled and put together into a web page. This ensures that the structure and style of the page are already in place by the time the JS starts to run.
```

- Na variável `names` a seguir tente exibir a String contento apenas os nomes e o emails:

```js
const names = `student: Alice; email: alice@email.com
student: Bob; email: bobbob@email.com
student: Charlie; email: charlie@email.com`;
```

```
Alice; alice@email.com
Bob; bobbob@email.com
Charlie; charlie@email.com
```

- Crie um script para:
  - [String Util (ecma/string-string-util)](https://ifpb.github.io/javascript-exercises/ecma/string/string-util)
  - [Citation (ecma/string-citation)](https://ifpb.github.io/javascript-exercises/ecma/string/citation)
  - [Lorem ipsum generator (ecma/string-lorem-ipsum-generator)](https://ifpb.github.io/javascript-exercises/ecma/string/lorem-ipsum-generator)
  - [Simple substitution (ecma/string-simple-substitution)](https://ifpb.github.io/javascript-exercises/ecma/string/simple-substitution)
- Crie estes outros [scritps envolvendo string (ecma/string-\*)](https://ifpb.github.io/javascript-exercises/ecma/#string)

## \# 12 - Atividades de EcmaScript

---

**Conteúdo:**

- [ECMA Guide](https://ifpb.github.io/javascript-guide/ecma/)

**Reflexão:**

- O que o EcmaScript permite fazer no Javascript?

**Exercício:**

- [Javascript Exercises](https://ifpb.github.io/javascript-exercises/)

## \# 13 - Simulado ECMA

---

**Conteúdo:**

- [ECMA Guide](https://ifpb.github.io/javascript-guide/ecma/)

**Reflexão:**

- O que o EcmaScript permite fazer no Javascript?

**Exercício:**

- [Javascript Exercises](https://ifpb.github.io/javascript-exercises/)

## \# 14 - Prova de ECMA

---

**Avaliação**

> Todos os detalhes da avaliação estão disponíveis nesta [página](../exams/prova-ecma.html)

## \# 15 - JavaScript Object Notation (JSON)

---

**Conteúdo:**

- [Função](https://ifpb.github.io/javascript-guide/ecma/function/)
  - [Higher Order Function](https://ifpb.github.io/javascript-guide/ecma/function/#higher-order-function)

**Reflexão:**

- É possível utilizar `map`, `filter` e `reduce` em coleções de objetos?

**Exercício:**

- Considerando a variável `companies`, como sendo a mesma estrutura da aula anterior, declare as funções:

```js
const companies = [
  {
    name: "Amazon",
    founded: 1994,
    industry: "E-Commerce, Cloud"
  },
  {
    name: "Alphabet Inc.",
    founded: 2015,
    industry: "Search, Cloud, Advertising"
  }
];

addCompany({
  name: "Facebook",
  founded: 2004,
  industry: "Social"
});

console.lof(foundedAfter(2000)); //=> ['Alphabet Inc.', 'Facebook']
console.lof(foundedBefore(2000)); //=> ['Amazon']

console.lof(show());
//=>
// Amazon.........1994
// Alphabet Inc...2015
// Facebook.......2004
```

- Considere que a variável `characters` possui as alturas de alguns personagens em quadrinhos, então tente criar as funções:

```js
const characters = [
  {
    comics: "Marvel",
    height: 1.78,
    name: "Spider-Man"
  },
  {
    comics: "Marvel",
    height: 2.44,
    name: "Hulk"
  },
  {
    comics: "DC",
    height: 1.91,
    name: "Superman"
  },
  {
    comics: "DC",
    height: 1.88,
    name: "batman"
  }
];

console.log(namesByComics(characters)); //=> ['batman', 'Hulk', 'Spider-Man', 'Superman']
console.log(namesByComics(characters, "Marvel")); //=> ['Hulk', 'Spider-Man']
console.log(heightAvg(characters)); //=> 2.0025
console.log(heightAvg(characters, "DC")); //=> 1.895
```

- Crie um script para:
  - [Comics](https://ifpb.github.io/javascript-exercises/ecma/object/comics)
  - [Exam](https://ifpb.github.io/javascript-exercises/ecma/object/exam)
  - [Outros](https://ifpb.github.io/javascript-exercises/ecma/#object)

## \# 16 - Symbol, Prototype e objetos (encapsulamento)

---

**Conteúdo:**

- [JavaScript Object Notation (JSON)](https://ifpb.github.io/javascript-guide/ecma/json/syntax.html)
  - [Syntax](https://ifpb.github.io/javascript-guide/ecma/json/syntax.html#json)
  - [Web API](https://ifpb.github.io/javascript-guide/ecma/json/syntax.html#web-api)
- [Object](https://ifpb.github.io/javascript-guide/ecma/object/syntax.html)
  - [Changing Object](https://ifpb.github.io/javascript-guide/ecma/object/syntax.html#changing-object)
  - [Object Array Interaction](https://ifpb.github.io/javascript-guide/ecma/object/syntax.html#object-array-interaction)
  - [Object Interaction](https://ifpb.github.io/javascript-guide/ecma/object/syntax.html#object-interaction)

**Reflexão:**

- Como estruturamos dados no Javascript com JSON?
- Como armazenamos e ler uma coleção de objetos JSON?
- É possível indexar dados com JSON?
- Como manipulamos um JSON?
- É possível obter JSON na Web?

**Exercício:**

- Crie um JSON desse dado:

| Char | Entity   | Decimal  | Hexa     | Description    |
| ---- | -------- | -------- | -------- | -------------- |
| &    | `&amp;`  | `&#38;`  | `&#x26;` | ampersand      |
| <    | `&lt;`   | `&#60;`  | `&#x3C;` | less than      |
| >    | `&gt;`   | `&#62;`  | `&#x3E;` | greater than   |
| ©    | `&copy;` | `&#169;` | `&#xA9;` | copyright sign |

<img src="https://ifpb.github.io/javascript-guide/ecma/object/assets/object-html-entity.svg" alt="HTML Entity" width="200">

- Considerando a variável `companies`, adicione a propriedade `kind` em seus objetos com o valor `Internet company`.

```js
// https://en.wikipedia.org/wiki/List_of_largest_Internet_companies
const companies = [
  {
    name: "Amazon",
    founded: 1994,
    industry: "E-Commerce, Cloud"
  },
  {
    name: "Alphabet Inc.",
    founded: 2015,
    industry: "Search, Cloud, Advertising"
  },
  {
    name: "Facebook",
    founded: 2004,
    industry: "Social"
  }
];
```

<img src="https://ifpb.github.io/javascript-guide/ecma/object/assets/object-company.svg" alt="Company" width="200">

- Considerando a variável `companies`, tente gerar o seguinte output com a função `show(companies)`:

```
Amazon.........1994
Alphabet Inc...2015
Facebook.......2004
```

- Crie a função `total(produtos)` que ao receber um array de produtos no formato da variável `produtos` gere o preço total ([Fonte](https://ifpb.github.io/javascript-exercises/ecma/object/products)):

```js
const produtos = [
  {
    nome: "Bicicleta",
    preco: 1200.0
  },
  {
    nome: "Capacete",
    preco: 450.0
  }
];

console.log(total(produtos)); //=> 1650
```

- Faça a transcrição de uma cadeia de DNA para RNA usando JSON indexado, contudo lembre que na cadeia de DNA as bases `C`, `G`, `A` e `T` são transcritas respectivamente no RNA por `G`, `C`, `U` e `A` ([Fonte](https://ifpb.github.io/javascript-exercises/ecma/string/rna-transcription)):

```js
const dna = "ACGTGGTCTTAA";
console.log(toRna(dna)); //=> 'UGCACCAGAAUU'
```

- Crie um script para:
  - [CEP](https://ifpb.github.io/javascript-exercises/ecma/object/cep)
  - [Products with Quantity](https://ifpb.github.io/javascript-exercises/ecma/object/products-qtd)
  - [Outros](https://ifpb.github.io/javascript-exercises/ecma/#object)

## \# 17 - Orientação a Objetos

---

**Conteúdo:**

- [JavaScript Object Notation (JSON)](https://ifpb.github.io/javascript-guide/ecma/json/syntax.html)
  - [Syntax](https://ifpb.github.io/javascript-guide/ecma/json/syntax.html#json)
  - [Web API](https://ifpb.github.io/javascript-guide/ecma/json/syntax.html#web-api)
- [Object](https://ifpb.github.io/javascript-guide/ecma/object/syntax.html)
  - [Changing Object](https://ifpb.github.io/javascript-guide/ecma/object/syntax.html#changing-object)
  - [Object Array Interaction](https://ifpb.github.io/javascript-guide/ecma/object/syntax.html#object-array-interaction)
  - [Object Interaction](https://ifpb.github.io/javascript-guide/ecma/object/syntax.html#object-interaction)

## \# 18 - Exercício de Json e Orientação a Objetos

---

**Conteúdo:**

- [JavaScript Object Notation (JSON)](https://ifpb.github.io/javascript-guide/ecma/json/syntax.html)
  - [Syntax](https://ifpb.github.io/javascript-guide/ecma/json/syntax.html#json)
  - [Web API](https://ifpb.github.io/javascript-guide/ecma/json/syntax.html#web-api)
- [Object](https://ifpb.github.io/javascript-guide/ecma/object/syntax.html)
  - [Changing Object](https://ifpb.github.io/javascript-guide/ecma/object/syntax.html#changing-object)
  - [Object Array Interaction](https://ifpb.github.io/javascript-guide/ecma/object/syntax.html#object-array-interaction)
  - [Object Interaction](https://ifpb.github.io/javascript-guide/ecma/object/syntax.html#object-interaction)

## \# 19 - Objetos do Navegador

---

**Conteúdo:**

- [Javascript W3C](https://ifpb.github.io/javascript-guide/w3c/)
  - [Running Javascript in Browser](https://ifpb.github.io/javascript-guide/w3c/running-javascript-browser/)
  - [Window](https://ifpb.github.io/javascript-guide/w3c/window/window.html)
  - [DOM](https://ifpb.github.io/javascript-guide/w3c/dom/)
    - [Node (DOM tree)](https://ifpb.github.io/javascript-guide/w3c/dom/node.html)
    - [Document](https://ifpb.github.io/javascript-guide/w3c/dom/document.html): `querySelector()`
    - [Element](https://ifpb.github.io/javascript-guide/w3c/dom/element.html): `innerHTML`
    - [HTML Input Element](https://ifpb.github.io/javascript-guide/w3c/dom/html-input-element.html): `checked`, `value`
  - [DOM Event](https://ifpb.github.io/javascript-guide/w3c/dom-event/): `onclick`

**Reflexão:**

- Como integramos Javascript com HTML no Navegador?
- Como o navegador indica possíveis erros de Javascript?
- É possível acessar recursos do Navegador com o Javascript? Por exemplo, é possível acessar os botões de navegação de histórico? Ou a URL da barra de endereço?
- Qual a importância da árvore DOM para o Javascript?
- Um Elemento no HTML pode ser analisado como sendo mais de um objeto no DOM? Mostre algum exemplo.
- Como acessamos um elemento do HTML via `document` no Javascript? É possível usar o console do navegador para depurar se o acesso foi realizado com sucesso?
- Como acessamos ou alteramos o conteúdo de um: `<div>`, `<input type="text">` e `<input type="radio">` (selecionado)?
- Como atribuímos um evento em um botão no Javascript?

**Exercício:**

- Crie uma interface Web para:
  - [IMC](https://ifpb.github.io/javascript-exercises/w3c/bmi-simple/)
  - Algum dos exercícios de [Ecma](https://ifpb.github.io/javascript-exercises/ecma/).

## \# 20 - Eventos e Estilo no Javascript

---

**Conteúdo:**

- [Javascript W3C](https://ifpb.github.io/javascript-guide/w3c/)
  - [Element](https://ifpb.github.io/javascript-guide/w3c/dom/element.html): `setAttribute()`
  - [HTML Element](https://ifpb.github.io/javascript-guide/w3c/dom/html-element.html): `style`, `focus()`
  - [DOM Event](https://ifpb.github.io/javascript-guide/w3c/dom-event/)
    - [EventTarget](https://ifpb.github.io/javascript-guide/w3c/dom-event/event-target.html): `addEventListener()`
    - [GlobalEventHandlers](https://ifpb.github.io/javascript-guide/w3c/dom-event/global-event-handlers.html): `onclick`

**Reflexão:**

- Como ativamos o foco de algum `<input>` usando Javascript?
- Como aplicamos tratamento de evento em um elemento por meio do Javascript?
- No exercício do IMC gráfico, explique como adicionamos eventos de teclado para ao pressionar:
  - A tecla 'Enter' exiba o resultado do IMC;
  - A tecla 'Escape' limpe os valores digitados nos `<input>` e foque no primeiro input.
- Como alteramos o estilo de um elemento no Javascript?
- No exercício do IMC gráfico, explique como alteramos a cor do resultado do IMC conforme o resultado, por exemplo, vermelho para obeso e assim por diante.

**Exercício:**

- Crie uma interface Web para:
  - [IMC com Evento](https://ifpb.github.io/javascript-exercises/w3c/bmi-event/)
  - [IMC com Estilo](https://ifpb.github.io/javascript-exercises/w3c/bmi-css/)
- [Outros exercícios](https://ifpb.github.io/javascript-exercises/w3c/)

## \# 21 - Criando Elementos Dinâmicos

---

**Conteúdo:**

- [Javascript W3C](https://ifpb.github.io/javascript-guide/w3c/)
  - [Element](https://ifpb.github.io/javascript-guide/w3c/dom/element.html): `innerHTML`, `insertAdjacentHTML()`

**Reflexão:**

- Como inserimos um elemento em algum lugar específico do documento HTML?
- Como inserimos o parágrafo `<p>Lorem ipsum dolor</p>` na `<div>` a seguir?

  ```html
  <div></div>
  ```

- Como inserimos o parágrafo `<p>Dolor ipsum lorem</p>` no final da `<div>` a seguir sem recriar seus elementos internos?

  ```html
  <div>
    <p>Lorem ipsum dolor</p>
  </div>
  ```

- Crie uma lista dinamicamente por meio da variável `names`:

  ```js
  const names = [
    "Bill Gates",
    "Mark Zuckerberg",
    "Elon Musk",
    "Larry Page",
    "Sergey Brin"
  ];
  ```

- Na lista anterior, crie um `<input type="text">` e `<button>` para inserir novos itens.

**Exercício:**

- Crie uma interface Web para:
  - [Gerador de lista](https://ifpb.github.io/javascript-exercises/w3c/list-generator/)
  - Tabela de IPs ([read](https://ifpb.github.io/javascript-exercises/w3c/iptable-read/), [create](https://ifpb.github.io/javascript-exercises/w3c/iptable-create/))
- [Outros exercícios](https://ifpb.github.io/javascript-exercises/w3c/)

## \# 22 - Criando Elementos Dinâmicos

---

**Conteúdo:**

- [Javascript W3C](https://ifpb.github.io/javascript-guide/w3c/)
  - [Element](https://ifpb.github.io/javascript-guide/w3c/dom/element.html): `innerHTML`, `insertAdjacentHTML()`

**Reflexão:**

- Como inserimos um elemento em algum lugar específico do documento HTML?

**Exercício:**

- Crie uma interface Web para:
  - [Tabela de cores](https://ifpb.github.io/javascript-exercises/w3c/color-names/)
  - [Cores Web Safe (HSL)](https://ifpb.github.io/javascript-exercises/w3c/color-web-safe-hsl-360/)
  - [HTML Entities](https://ifpb.github.io/javascript-exercises/w3c/html-entities/)
- [Outros exercícios](https://ifpb.github.io/javascript-exercises/w3c/)

## \# 23 - Criando Elementos Dinâmicos

---

**Conteúdo:**

- [Javascript W3C](https://ifpb.github.io/javascript-guide/w3c/)
  - [DOM](https://ifpb.github.io/javascript-guide/w3c/dom/)
    - [Document](https://ifpb.github.io/javascript-guide/w3c/dom/document.html): `querySelectorAll()`
  - [DOM Event](https://ifpb.github.io/javascript-guide/w3c/dom-event/)
    - [Event](https://ifpb.github.io/javascript-guide/w3c/dom-event/event.html): `event.target` (`this`)

**Reflexão:**

- Como selecionar mais de um elemento no documento HTML?
- Ao atribuir um mesmo evento em vários botões, existe alguma forma de identificar qual botão disparou algum evento específico?

```js
const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(b => b.addEventListener("click", clickEvent));

function clickEvent(event) {
  // TODO
}
```

**Exercício:**

- Crie uma interface Web para:
  - [Calculadora](https://ifpb.github.io/javascript-exercises/w3c/calculator/)
  - [Utilitário de Texto](https://ifpb.github.io/javascript-exercises/w3c/text-util/)
  - [Conversor de ASCII para Número](https://ifpb.github.io/javascript-exercises/w3c/string2number/)
  - [Conversor de IP para Número](https://ifpb.github.io/javascript-exercises/w3c/ip2number/)
  - [Conversor de Número](https://ifpb.github.io/javascript-exercises/w3c/number-converter/)
  - [Calendário](https://ifpb.github.io/javascript-exercises/w3c/calendar/)
- [Outros exercícios](https://ifpb.github.io/javascript-exercises/w3c/)

## \# 24 - Criando Elementos Dinâmicos

---

**Conteúdo:**

- [Javascript W3C](https://ifpb.github.io/javascript-guide/w3c/)
  - [DOM](https://ifpb.github.io/javascript-guide/w3c/dom/)
  - [DOM Event](https://ifpb.github.io/javascript-guide/w3c/dom-event/)

**Reflexão:**

- O que é a API DOM?

**Exercício:**

- Crie uma interface Web para:
  - [TODO List](https://ifpb.github.io/javascript-exercises/w3c/todo/)
  - Tabela IP ([Create Uniq](https://ifpb.github.io/javascript-exercises/w3c/iptable-create-uniq/), [CRUD](https://ifpb.github.io/javascript-exercises/w3c/iptable-crud/))
- [Outros exercícios](https://ifpb.github.io/javascript-exercises/w3c/)

## \# 25 - Revisão e Simulado de Javascript W3C

---

**Conteúdo:**

- [ECMA Guide](https://ifpb.github.io/javascript-guide/ecma/)

**Reflexão:**

- O que os objetos do W3C permitem fazer no Javascript?

**Exercício:**

- [Javascript Exercises (W3C)](https://ifpb.github.io/exercises/problems/web/front-end/script/)
- [Javascript Challenges (W3C)](https://ifpb.github.io/challenges/web/front-end/js/)

## \# 26 - SECT - IFTech 2019

---

**Conteúdo:**

[IFTech 2019](https://ifpb.github.io/iftech2019/)

## \# 27 - SECT - IFTech 2019

---

**Conteúdo:**

[IFTech 2019](https://ifpb.github.io/iftech2019/)

## \# 28 - Especificação de Projeto

---

**Projeto**

> Critérios de avaliação [projeto final](../exams/projeto.md)

## \# 29 - Proposta de Projeto

---

**Projeto**

> A ordem de apresentação estará disponível nessa [página](../exams/projeto.md).

**Blog**

- [Blog](../exams/blog.md)

## \# 30 - Avaliação de Javascript W3C e Blog

---

**Avaliação**

> Todos os detalhes da avaliação estão disponíveis nesta [página](../exams/prova-w3c.html)

## \# 31 - Requisição Assíncrona

---

**Conteúdo:**

- [Javascript Ecma](https://ifpb.github.io/javascript-guide/ecma/)
  - [Promise](https://ifpb.github.io/javascript-guide/ecma/promise/)
  - [Async & Await](https://ifpb.github.io/javascript-guide/ecma/async-await/)
- [Javascript W3C](https://ifpb.github.io/javascript-guide/w3c/)
  - Javascript Web APIs
    - [Fetch API](https://ifpb.github.io/javascript-guide/w3c/fetch-api/)

**Reflexão:**

- O que é e para que serve uma execução assíncrona?
- Como resgatar algum conteúdo HTTP via Javascript?
- Qual é o retorno da função `fetch()`?
- Qual é o retorno do método `json()` do objeto `Response`?
- É possível controlar uma execução assíncrona?
- Como fazer o fetch de um JSON localmente?

**Exercício:**

- Instale o plugin [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VSCode para acessar localmente as páginas Web via HTTP.
- Crie uma interface Web para:
  - [Blog (JSONPlaceHolder API)](https://ifpb.github.io/javascript-exercises/w3c/blog/)
  - Cryptcoins ([Fetch File](https://ifpb.github.io/javascript-exercises/w3c/cryptcoins-fetch/), [Cryptocompare API](https://ifpb.github.io/javascript-exercises/w3c/cryptcoins-api/))
  - Gentelella ([App Versions](https://ifpb.github.io/javascript-exercises/w3c/gentelella-app-versions/), [Top Tiles](https://ifpb.github.io/javascript-exercises/w3c/gentelella-top-tiles))
  - Ipinfo ([API](https://ifpb.github.io/javascript-exercises/w3c/ipinfo-api/), [Table API](https://ifpb.github.io/javascript-exercises/w3c/ipinfo-table-api/))
  - [Address (Via CEP API)](https://ifpb.github.io/javascript-exercises/w3c/address-cep-api/)
  - [Artistas (Vagalume API)](https://ifpb.github.io/javascript-exercises/w3c/artist-vagalume/)
- [Outros exercícios](https://ifpb.github.io/javascript-exercises/w3c/)

<!--
TODO Async flow js
https://www.datchley.name/asynchronous-in-the-browser/
 -->

## \# 32 - Expressões Regulares

---

**Conteúdo:**

- [Javascript Ecma](https://ifpb.github.io/javascript-guide/ecma/)
  - Regexp ([syntax](https://ifpb.github.io/javascript-guide/ecma/regexp/syntax.html), [object](https://ifpb.github.io/javascript-guide/ecma/regexp/object.html), [pattern](https://ifpb.github.io/javascript-guide/ecma/regexp/pattern.html))

**Reflexão:**

- O que é expressão regular?
- Como estruturamos um RegExp em JS?
- Em RegExp, o que é flag, character class, character set, boundary, group, back reference, quantifier, assertion?
- Como definir padrões para CEP, CPF, IP?
- Como o RegExp pode ser tratado no JS?
- Além da validação, quais seriam os outros usos do Regexp?

**Exercício:**

- Crie padrões para os dados a seguir usando o site [regex101](https://regex101.com):
  - Placa de carro que reconheça: `abc 1234`, `abc1234`, `ABC1234`, e rejeite `1234`, `1234abc`;
  - Número octal que reconheça: `0123`, `0o123`, `0O123`; e rejeite: `123`, `0999`;
  - Número binário que reconheça: `1010`, `0b1010`, `0B1010`; e rejeite: `123`, `b1010`;
  - Cor em hexa válida: `#fff`, `#FF00FF`, `#000F`, `#FF00FF0F`; e rejeite: `#XYZ`, `#fffff`
  - Número IP que reconheça: `8.8.8.8`, `255.255.255.255`; e rejeite: `a.a.a.a`, `999.260.300.500`;
  - CNPJ que reconheça: `00.000.000/0001-00`, `00000000000100`; e rejeite: `00000.000/0001-00`, `00000000/000100`.
- Crie um script para:
  - [Text Util](https://ifpb.github.io/javascript-exercises/ecma/regexp/text-util/)
  - [Pattern Scanner](https://ifpb.github.io/javascript-exercises/ecma/regexp/pattern-scanner/)
  - [Pattern Validador](https://ifpb.github.io/javascript-exercises/ecma/regexp/pattern-validator/)
- Crie uma interface Web para o formulário do aplicativo [Address (Via CEP API)](https://ifpb.github.io/javascript-exercises/w3c/address-cep-api/) usando validação do campo CEP via RegExp.
- [Search on Tools](https://ifpb.github.io/javascript-exercises/ecma/regexp/search-on-tools/)

## \# 33 - Módulos no JS

---

**Conteúdo:**

- [Javascript Ecma](https://ifpb.github.io/javascript-guide/ecma/)
  - [Modules](https://ifpb.github.io/javascript-guide/ecma/modules/)
- [Javascript Packages](https://ifpb.github.io/javascript-guide/packages/)
  - [Modules](https://ifpb.github.io/javascript-guide/packages/modules/)

**Reflexão:**

- Como evitar escrever todo o Javascript em um único arquivo?
- O que é preciso para executar os Módulos do EcmaScript (ESM) no node.js?
- Como os browsers recentes possuem suporte ao ESM?
- Como é possível incluir bibliotecas de terceiros via ESM no navegador?
- O que é o Babel.js e como configurá-lo em um projeto JS?
- O que é um bundler e um transpiler?

**Exercício:**

- Inclua o ESM em seu projeto.

## \# 34 - Acompanhamento de Projetos

---

> [Projeto Final](../exams/projeto.md)

## \# 35 - Acompanhamento de Projetos

---

> [Projeto Final](../exams/projeto.md)

## \# 36 - Webpack e Pacotes no JS

---

**Conteúdo:**

- [Javascript Ecma](https://ifpb.github.io/javascript-guide/ecma/)
  - [Modules](https://ifpb.github.io/javascript-guide/ecma/modules/)
- [Javascript Packages](https://ifpb.github.io/javascript-guide/packages/)
  - [Modules](https://ifpb.github.io/javascript-guide/packages/modules/)
  - [CSS Preprocessor](https://ifpb.github.io/javascript-guide/packages/css-processor/)
  - [CSS Toolkit](https://ifpb.github.io/javascript-guide/packages/css-toolkit/)

**Reflexão:**

- Como evitar escrever todo o Javascript em um único arquivo?
- O que é preciso para executar os Módulos do EcmaScript (ESM) no node.js?
- Como os browsers recentes possuem suporte ao ESM?
- Como é possível incluir bibliotecas de terceiros via ESM no navegador?
- O que é o Babel.js e como configurá-lo em um projeto JS?
- O que é um bundler e um transpiler?

**Exercício:**

- Inclua o ESM em seu projeto.

## \# 37 - Pacotes no JS

---

**Conteúdo:**

- [Javascript Packages](https://ifpb.github.io/javascript-guide/packages/)

**Reflexão:**

- Como montamos gráficos usando Javascript?
- Como carregar componentes do Bootstrap que dependem do Javascript?
- Como executar jQuery e seus plugins?

**Exercício:**

- [Javascript Packages](https://ifpb.github.io/javascript-exercises/packages/)
  - [Ample Admin Charts](https://ifpb.github.io/javascript-exercises/packages/charts/ample-admin-charts/)

## \# 38 - Acompanhamento de Projetos

---

> [Projeto Final](../exams/projeto.md)

## \# 39 - Apresentação de Projetos

---

> Entrega do [Projeto Final](../exams/projeto.md).

## \# 40 - Apresentação de Projetos

---

> Entrega do [Projeto Final](../exams/projeto.md).

## E agora?

---

- ECMA
  - ECMA-262: [Standard](https://www.ecma-international.org/publications/standards/Ecma-262.htm), [Release](https://tc39.github.io/ecma262/), [proposals](https://github.com/tc39/proposals)
  - [MDN](https://developer.mozilla.org/bm/docs/Web/JavaScript)
  - [You Don't Know JS (book series)](https://github.com/getify/You-Dont-Know-JS)
- W3C
  - Web API: [Reference](https://developer.mozilla.org/en-US/docs/Web/Reference/API), [Index](https://developer.mozilla.org/en-US/docs/Web/API)
  - Web Applications (WebApps) Working Group: [Home](https://www.w3.org/2008/webapps/)
  - Web Platform Working Group: [Home](https://www.w3.org/WebPlatform/WG/), [Specs](https://www.w3.org/TR/#tr_Web_Platform_Working_Group) ([Web API](https://www.w3.org/TR/?tag=webapi), [DOM](https://www.w3.org/TR/?tag=dom)), [Dashboard](https://labs.w3.org/unitas/?g=83482)
- Packages
  - [best of js](https://bestofjs.org)
  - [javascripting](https://www.javascripting.com)
  - Curated list of awesome: [JS](https://github.com/sorrycc/awesome-javascript)
  - [Github JS Topic](https://github.com/topics/javascript)
  - [React](https://reactjs.org), [Vue.js](https://vuejs.org), [Angular](https://angular.io)
  - [Firebase - Web Guides](https://firebase.google.com/docs/web/setup)
- Newsletter
  - [JavaScript Weekly](https://javascriptweekly.com)
  - [Brazil JS Weekly](https://braziljs.org/#weekly)

<script src="js/dates.js"></script>
<script src="js/load-summary.js"></script>
<script src="js/load-target-blank.js"></script>
