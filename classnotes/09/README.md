# Criando Elementos Dinâmicos

  - [Foods App](#foods-app)
  - [Estrutura do Código](#estrutura-do-código)
  - [Camada de Dados](#camada-de-dados)
  - [Dados Novos](#dados-novos)

## Foods App

---

[![](assets/foods-create.gif)](https://foods-create.lucachaves.repl.co/)

[Edit on Repl.it](https://replit.com/@lucachaves/foods-create?v=1)

## Estrutura do Código

---

```
foods-create
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
        ├── dataset.js
        └── foods.js
```

foods-create/index.html:
```html
<body>
  <div class="container">
    <h1 class="mt-5 text-center">Menu</h1>

    <div class="text-right">
      <button
        type="button"
        class="btn btn-secondary rounded-circle mr-4 font-weight-bold"
        id="newBtnFood"
        data-toggle="modal"
        data-target="#formFoodModal"
        onclick="loadFormCreateFood()">
        +
      </button>
    </div>

    <section class="card-deck my-3"></section>

    <form id="formFood">
      ...
    </form>
  <div>
  <script src="js/lib/jquery.min.js"></script>
  <script src="js/lib/popper.min.js"></script>
  <script src="js/lib/bootstrap.min.js"></script>
  <script src="js/main.js" type="module"></script>
</body>
```

## Camada de Dados

---

foods-create/js/model/dataset.js:
```js
{% include_relative code/foods-create/js/model/dataset.js %}
```

foods-create/js/model/food.js:
```js
{% include_relative code/foods-create/js/model/foods.js %}
```

## Dados Novos

---

![](assets/foods-create-form.png)

foods-create/index.html:
```html
<form id="formFood">
  <div class="modal fade" id="formFoodModal" tabindex="-1" aria-labelledby="formFoodLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="formFoodLabel"></h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="food-name">Nome</label>
            <input type="text" class="form-control" id="food-name" name="name">
          </div>
          <div class="form-group">
            <label for="food-image">Image</label>
            <input type="text" class="form-control" id="food-image" name="image">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
          <button type="submit" class="btn btn-primary">Confirmar</button>
        </div>
      </div>
    </div>
  </div>
</form>
```

foods-create/js/main.js:
```js
{% include_relative code/foods-create/js/main.js %}
```
