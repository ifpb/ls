# Introdução ao ReactJS

- [Introdução ao ReactJS](#introdução-ao-reactjs)
  - [Create React App (CRA)](#create-react-app-cra)
  - [Componentes](#componentes)
    - [Funciontal Component](#funciontal-component)
    - [Fragment](#fragment)
    - [JSX](#jsx)
    - [Propriedades](#propriedades)
    - [Lista e Chaves](#lista-e-chaves)
    - [Tratamento de Evento](#tratamento-de-evento)
  - [React Hooks](#react-hooks)
    - [Estado (useState)](#estado-usestate)
    - [Referência (useRef)](#referência-useref)
  - [UI Kit](#ui-kit)
    - [Vanilla Bootstrap](#vanilla-bootstrap)
    - [React Bootstrap](#react-bootstrap)
  - [Resultado Final](#resultado-final)
  - [Referências](#referências)

## Create React App (CRA)

---

```
$ npx create-react-app foods-app-cra
$ cd foods-app-cra
$ yarn start
```

```
$ rm public/favicon.ico \
public/logo192.png \
public/logo512.png \
public/manifest.json \
public/robots.txt \
src/App.css \
src/App.test.js \
src/index.css \
src/logo.svg \
src/reportWebVitals.js \
src/setupTests.js \
README.md
```

```
foods-app-cra
├── .gitignore
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.jsx
│   └── index.jsx
└── yarn.lock
```

## Componentes

---

### Funciontal Component

src/index.jsx:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

```

src/components/App.jsx:

```jsx
function App() {
  return <h1>Menu</h1>;
}

export default App;
```

### Fragment

src/components/App.jsx:

```jsx
function App() {
  return (
    <>
      <h1>Menu</h1>
      <section>Suco, Batata</section>
    </>
  );
}

export default App;
```

### JSX

src/components/App.jsx:

```jsx
import foods from '../models/foods';

function App() {
  const food = foods[0];

  return (
    <>
      <h1>Menu</h1>
      <section className="card-deck my-3">
        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
          <div className="card">
            <div className="card-header text-center font-weight-bold">
              <span>{food.name}</span>
            </div>
            <div className="card-body p-0">
              <img
                src={food.image}
                alt={food.name}
                className="food-image w-100"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
```

### Propriedades

src/components/App.jsx:

```jsx
import foods from '../models/foods';
import Food from './Food';

function App() {
  const food = foods[0];

  return (
    <>
      <h1>Menu</h1>
      <section className="card-deck my-3">
        <Food food={food} />
      </section>
    </>
  );
}

export default App;
```

src/components/Food.jsx:

```jsx
function Food({ food }) {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
      <div className="card">
        <div className="card-header text-center font-weight-bold">
          <span>{food.name}</span>
        </div>
        <div className="card-body p-0">
          <img src={food.image} alt={food.name} className="food-image w-100" />
        </div>
      </div>
    </div>
  );
}

export default Food;
```

### Lista e Chaves

src/components/App.jsx:

```jsx
import foods from '../models/foods';
import Food from './Food';

function App() {
  return (
    <>
      <h1>Menu</h1>
      <section className="card-deck my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id} />
        ))}
      </section>
    </>
  );
}

export default App;

```

### Tratamento de Evento

src/components/App.jsx:

```jsx
import foods from '../models/foods';
import Food from './Food';

function App() {
  const handleClick = () => {
    const newFood = {
      id: 5,
      name: 'Batata',
      image: 'imgs/batatafrita.jpg',
    };

    console.log(newFood);
  };

  return (
    <>
      <h1>Menu</h1>
      <button
        type="button"
        className="btn btn-secondary rounded-circle mr-4 font-weight-bold"
        onClick={handleClick}
      >
        +
      </button>
      <section className="card-deck my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id} />
        ))}
      </section>
    </>
  );
}

export default App;
```

## React Hooks

---

### Estado (useState)

src/components/App.jsx:

```jsx
import foods from '../models/foods';
import Food from './Food';

function App() {
  const handleClick = () => {
    const newFood = {
      id: 5,
      name: 'Batata',
      image: 'imgs/batatafrita.jpg',
    };

    foods.push(newFood);

    console.log(foods);
  };

  return (
    <>
      <h1>Menu</h1>
      <button
        type="button"
        className="btn btn-secondary rounded-circle mr-4 font-weight-bold"
        onClick={handleClick}
      >
        +
      </button>
      <section className="card-deck my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id} />
        ))}
      </section>
    </>
  );
}

export default App;
```

src/components/App.jsx (useState):

```jsx
import { useState } from 'react';

import data from './models/foods';
import Food from './components/Food';

function App() {
  const [foods, setFoods] = useState(data);

  const handleClick = () => {
    const newFood = {
      id: 5,
      name: 'Batata',
      image: 'imgs/batatafrita.jpg',
    };

    setFoods([...foods, newFood]);

    console.log(foods);
  };

  return (
    <>
      <h1>Menu</h1>
      <button
        type="button"
        className="btn btn-secondary rounded-circle mr-4 font-weight-bold"
        onClick={handleClick}
      >
        +
      </button>
      <section className="card-deck my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id} />
        ))}
      </section>
    </>
  );
}

export default App;

```

### Referência (useRef)

src/components/App.jsx:

```jsx
import { useRef, useState } from 'react';

import data from '../models/foods';
import Food from './Food';

function App() {
  const [foods, setFoods] = useState(data);

  const buttonEl = useRef(null);

  const handleClick = () => {
    const newFood = {
      id: 5,
      name: 'Batata',
      image: 'imgs/batatafrita.jpg',
    };

    setFoods([...foods, newFood]);

    buttonEl.current.disabled = true;
  };

  return (
    <>
      <h1>Menu</h1>
      <button
        type="button"
        className="btn btn-secondary rounded-circle mr-4 font-weight-bold"
        onClick={handleClick}
        ref={buttonEl}
      >
        +
      </button>
      <section className="card-deck my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id} />
        ))}
      </section>
    </>
  );
}

export default App;
```

## UI Kit

---

### Vanilla Bootstrap

```
$ yarn add bootstrap jquery
```

src/components/App.jsx:

```jsx
import { useRef, useState } from 'react';

import data from '../models/foods';
import Food from './Food';

import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  const [foods, setFoods] = useState(data);

  const buttonEl = useRef(null);

  const handleClick = () => {
    // ...
  };

  return (
    <div className="container">
      <h1 className="mt-5 text-center">Menu</h1>
      <div className="text-right">
        <button
          type="button"
          className="btn btn-secondary rounded-circle mr-4 font-weight-bold"
          onClick={handleClick}
          ref={buttonEl}
        >
          +
        </button>
      </div>
      <section className="card-deck my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id} />
        ))}
      </section>
    </div>
  );
}

export default App;
```

### React Bootstrap

src/components/App.jsx:

```jsx
import { useRef, useState } from 'react';
import { Button, CardDeck } from 'react-bootstrap';

import data from '../models/foods';
import Food from './Food';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [foods, setFoods] = useState(data);

  const buttonEl = useRef(null);

  const handleClick = () => {
    // ...
  };

  return (
    <div className="container">
      <h1 className="mt-5 text-center">Menu</h1>
      <div className="text-right">
        <Button
          variant="secondary"
          className="rounded-circle mr-4 font-weight-bold"
          onClick={handleClick}
          ref={buttonEl}
        >
          +
        </Button>
      </div>
      <CardDeck className="my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id} />
        ))}
      </CardDeck>
    </div>
  );
}

export default App;
```

src/components/Food.jsx:

```jsx
import { Card, Col } from 'react-bootstrap';

function Food({ food }) {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-3">
      <Card>
        <Card.Header className="text-center font-weight-bold">
          <span>{food.name}</span>
        </Card.Header>
        <Card.Body className="p-0">
          <img src={food.image} alt={food.name} className="food-image w-100" />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Food;
```

## Resultado Final

---

[![Edit foods-app-cra](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/foods-app-cra-0cem2?fontsize=14&hidenavigation=1&theme=dark)

```
foods-app-cra
├── .gitignore
├── package.json
├── public
│   ├── imgs
│   │   ├── batatafrita.jpg
│   │   ├── hamburguer.jpg
│   │   ├── milkshake.jpg
│   │   ├── sanduiche.jpg
│   │   └── suco.jpg
│   └── index.html
├── src
│   ├── components
│   │   ├── App.jsx
│   │   └── Food.jsx
│   ├── index.jsx
│   └── models
│       └── foods.js
└── yarn.lock
```

## Referências

---

- [ReactJS](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [BabelJS](https://babeljs.io/repl)
