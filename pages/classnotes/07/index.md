# Manipulação do DOM e Eventos no JavaScript

## Árvore DOM

![](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/full-process.png)

Fonte: [Google Developers - Constructing the Object Model](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model)

## Element

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element)

### Element.innerHTML

```js
document.body.innerHTML = '<h1>Lorem ipsum</h1>';
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

### Element.innerText

```js
const p = document.querySelector('p');
p.innerText = 'Lorem ipsum';
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerText)

### Element.classList

```js
document.body.classList.remove('color-red');
document.body.classList.add('color-blue');
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

### Element.className

```js
document.body.className = 'text-center';
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)

### Element.setAttribute()

```js
document.body.setAttribute('class', 'active red');
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

## HTMLElement

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

### HTMLElement.style

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)

[CSSStyleDeclaration](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration):

```js
const p = document.querySelector('p');
p.style.cssText = 'color: blue;';
```

[CSSStyleDeclaration.cssText](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/cssText):

```js
const p = document.querySelector('p');
p.style.cssText = 'color: blue; font-size: 1.1rem;';
```

[CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference):

```js
const p = document.querySelector('p');
p.style.fontSize = '1.1rem';
```

[Element.setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) (Alternative):

```js
const p = document.querySelector('p');
p.setAttribute('style', 'color: blue; font-size: 1.1rem;');
```

```js
const p = document.querySelector('p');
p.setAttribute('class', 'active red');
```

[Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) (Alternative):

```js
const p = document.querySelector('p');
p.classList.add('color-blue');
```

[Element.className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) (Alternative):

```js
const p = document.querySelector('p');
p.className = 'text-center';
```

## HTMLInputElement

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)

### HTMLInputElement.value

```js
const input = document.querySelector('#name');
console.log(input.value);

input.value = 'Alice';
console.log(input.value);
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)

### HTMLInputElement.checked

```js
const input = document.querySelector('#male');
input.checked;
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)

## GlobalEventHandlers

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers)

### Hierarchy

![](/imgs/classnotes/07/global-event-handlers-hierarchy.svg)

### Registering on-event handlers

HTML attribute named on(eventtype):

```markup
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h1>Lorem ipsum</h1>
    <button onclick="window.print()">Print</button>
  </body>
</html>
```

Setting the on-event handlers property from JavaScript:

```markup
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h1>Lorem ipsum</h1>
    <button>Print</button>
  </body>
</html>
```

```js
const button = document.querySelector('button');
button.onclick = function () {
  window.print();
};
```

### On-event handlers

- onclick
- onkeyup
- onload
- onchange

## EventTarget

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

![](/imgs/classnotes/07/event-target-hierarchy.svg)

### EventTarget.addEventListener()

Click ([MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)):

```js
const button = document.querySelector('button#print');

button.addEventListener('click', function () {
  window.print();
});
```

Keyup ([KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent), [Key Values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)):

```js
document.addEventListener('keyup', function (event) {
  if (event.key == 'Enter') {
    console.log('Enter key');
  }
});
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
