# Criando Elementos Dinâmicos

  - [Element](#element)
    - [Element.innerHTML](#elementinnerhtml)
    - [Element.insertAdjacentHTML()](#elementinsertadjacenthtml)
  - [Document](#document)
  - [Foods App](#foods-app)

## [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

---

### [Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

```js
document.body.innerHTML = '<h1>Lorem ipsum</h1>'
```

### [Element.insertAdjacentHTML()](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

```js
const tbody = document.querySelector('table tbody')
tbody.insertAdjacentHTML('afterbegin', '<tr><td>Item</td></tr>')
tbody.insertAdjacentHTML('beforeend', '<tr><td>Item</td></tr>')
```

- Referências:
  - [Document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  - [Document.creaTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/creaTextNode)
  - [Node.insertBefore](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
  - [Node.appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

## [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

---

```js
const newH1 = document.createElement("h1");
const newContent = document.createTextNode("Hello!");
newH1.appendChild(newContent);

const currentDiv = document.getElementById("div1");
currentDiv.appendChild(newDiv);
```

## Foods App

---

[![](assets/foods-read.png)](https://foods-read.lucachaves.repl.co/)

[Edit on Repl.it](https://replit.com/@lucachaves/foods-read?v=1)

Estrutura de Código:

```
foods-read
├── css
│   ├── bootstrap.min.css
│   └── style.css
├── imgs
│   ├── batatafrita.jpg
│   ├── hamburguer.jpg
│   ├── milkshake.jpg
│   ├── sanduiche.jpg
│   └── suco.jpg
├── index.html
└── js
    ├── lib
    │   ├── bootstrap.min.js
    │   ├── jquery.min.js
    │   └── popper.min.js
    ├── main.js
    └── model
        └── dataset.js
```

foods-read/index.html:
```html
<body>
  <div class="container">
    <h1 class="mt-5 text-center">Menu</h1>

    <section class="card-deck my-3"></section>
  <div>
  <script src="js/lib/jquery.min.js"></script>
  <script src="js/lib/popper.min.js"></script>
  <script src="js/lib/bootstrap.min.js"></script>
  <script src="js/main.js" type="module"></script>
</body>
```

foods-read/js/model/dataset.js:
```js
const dataset = [
  {
    id: 1,
    name: 'Hambúrguer',
    image: 'imgs/hamburguer.jpg',
  },
  {
    id: 2,
    name: 'Sanduíche',
    image: 'imgs/sanduiche.jpg',
  },
  {
    id: 3,
    name: 'Milk Shake',
    image: 'imgs/milkshake.jpg',
  },
  {
    id: 4,
    name: 'Suco',
    image: 'imgs/suco.jpg',
  },
];

export default dataset;
```

foods-read/js/main.js:
```js
import dataset from './model/dataset.js';

function loadFoods() {
  const foods = dataset;

  for (const food of foods) {
    createFoodView(food);
  }
}

function createFoodView(food) {
  const foodsView = `
        <div class="card-food col-sm-6 col-lg-4 col-xl-3 mb-3" id="food-${food.id}">
          <div class="card">
            <div class="card-header text-center font-weight-bold">
              <span class="food-name">
                ${food.name}
              </span>
            </div>
            <div class="card-body p-0">
              <img src="${food.image}" alt="${food.name}" class="food-image w-100">
            </div>
          </div>
        </div>
      `;

  const foodsDeck = document.querySelector('.card-deck');

  foodsDeck.insertAdjacentHTML('beforeend', foodsView);
}

loadFoods();
```

