# Criando Elementos Dinâmicos

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

## [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

---

```js
const newH1 = document.createElement("h1");
const newContent = document.createTextNode("Hello!");
newH1.appendChild(newContent);

const currentDiv = document.getElementById("div1");
currentDiv.appendChild(newDiv);
```

- Referências:
  - [Document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  - [Document.creaTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/creaTextNode)
  - [Node.insertBefore](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
  - [Node.appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
