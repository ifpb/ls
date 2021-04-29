# Foods App (Create)

- [Foods App (Create)](#foods-app-create)
  - [Modal](#modal)
  - [React Hooks](#react-hooks)
    - [Efeitos Colaterais (useEffect)](#efeitos-colaterais-useeffect)
    - [Context API (useContext)](#context-api-usecontext)
  - [Formik](#formik)
  - [Resultado Final](#resultado-final)

## Modal

---

src/components/FoodForm.jsx:

```jsx
import { Button, Form, Modal } from 'react-bootstrap';

function FoodForm({ isShowFoodForm, setIsShowFoodForm }) {
  const handleClose = () => {
    setIsShowFoodForm(false);
  };

  return (
    <Modal show={isShowFoodForm} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title as="h5">Nova Comida</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group controlId="formFoodName">
            <Form.Label>Nome</Form.Label>
            <Form.Control name="name" />
          </Form.Group>
          <Form.Group controlId="formFoodImage">
            <Form.Label>Image</Form.Label>
            <Form.Control name="image" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button
            variant="primary"
            as="input"
            type="submit"
            value="Confirmar"
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default FoodForm;
```

src/components/App.jsx:

```jsx
import { useRef, useState } from 'react';
import { Button, CardDeck, Container } from 'react-bootstrap';

import data from './model/foods';
import Food from './components/Food';
import FoodForm from './components/FoodForm';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [foods, setFoods] = useState(data);
  const [isShowFoodForm, setIsShowFoodForm] = useState(false);

  const buttonEl = useRef(null);

  const handleClick = (event) => {
    setIsShowFoodForm(true);

    event.currentTarget.blur();
  };

  return (
    <Container>
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
      <FoodForm
        isShowFoodForm={isShowFoodForm}
        setIsShowFoodForm={setIsShowFoodForm}
      />
    </Container>
  );
}

export default App;
```

## React Hooks

---

### Efeitos Colaterais (useEffect)

src/components/App.jsx:

```jsx
import { useEffect, useRef, useState } from 'react';
import { Button, CardDeck, Container } from 'react-bootstrap';

import Food from './components/Food';
import FoodForm from './components/FoodForm';
import api from './services/api';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [foods, setFoods] = useState([]);
  const [isShowFoodForm, setIsShowFoodForm] = useState(false);

  const buttonEl = useRef(null);

  const handleClick = (event) => {
    setIsShowFoodForm(true);

    event.currentTarget.blur();
  };

  useEffect(() => {
    const loadFoods = async () => {
      const data = await api.readAll();

      setFoods([...foods, ...data]);
    };

    loadFoods();
  }, []);

  return (
    <Container>
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
      <FoodForm
        isShowFoodForm={isShowFoodForm}
        setIsShowFoodForm={setIsShowFoodForm}
      />
    </Container>
  );
}

export default App;
```

### Context API (useContext)

src/index.jsx:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { FoodContextProvider } from './contexts/FoodContext';

ReactDOM.render(
  <FoodContextProvider>
    <App />
  </FoodContextProvider>,
  document.getElementById('root')
);
```

src/contexts/FoodContext.jsx:

```jsx
{% raw %}
import { createContext, useState, useContext } from 'react';

export const FoodContext = createContext({});

export function FoodContextProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [isShowFoodForm, setIsShowFoodForm] = useState(false);

  const toggleFoodForm = () => {
    setIsShowFoodForm(!isShowFoodForm);
  };

  return (
    <FoodContext.Provider
      value={{
        foods,
        setFoods,
        isShowFoodForm,
        setIsShowFoodForm,
        toggleFoodForm,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export function useFood() {
  return useContext(FoodContext);
}
{% endraw %}
```

src/components/App.jsx:

```jsx
import { useEffect, useRef } from 'react';
import { Button, CardDeck, Container } from 'react-bootstrap';

import Food from './Food';
import FoodForm from './FoodForm';
import api from '../services/api';
import { useFood } from '../contexts/FoodContext';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const buttonEl = useRef(null);

  const { foods, setFoods, toggleFoodForm } = useFood();

  const handleClick = (event) => {
    toggleFoodForm();

    event.currentTarget.blur();
  };

  useEffect(() => {
    const loadFoods = async () => {
      const data = await api.readAll();

      setFoods([...foods, ...data]);
    };

    loadFoods();
  }, []);

  return (
    <Container>
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
      <FoodForm />
    </Container>
  );
}

export default App;
```

src/components/FoodForm.jsx:

```jsx
import { Button, Form, Modal } from 'react-bootstrap';
import { useFood } from '../contexts/FoodContext';

function FoodForm() {
  const { isShowFoodForm, toggleFoodForm } = useFood();

  return (
    <Modal show={isShowFoodForm} onHide={toggleFoodForm}>
      <Modal.Header closeButton>
        <Modal.Title as="h5">Nova Comida</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group controlId="formFoodName">
            <Form.Label>Nome</Form.Label>
            <Form.Control name="name" />
          </Form.Group>
          <Form.Group controlId="formFoodImage">
            <Form.Label>Image</Form.Label>
            <Form.Control name="image" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleFoodForm}>
            Fechar
          </Button>
          <Button
            variant="primary"
            as="input"
            type="submit"
            value="Confirmar"
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default FoodForm;
```

## Formik

---

[formik](https://formik.org/):

```
$ yarn add formik
```

src/components/FoodForm.jsx:

```jsx
{% raw %}
import { Button, Form, Modal } from 'react-bootstrap';
import { Formik } from 'formik';

import { useFood } from '../contexts/FoodContext';
import api from '../services/api';

function FoodForm() {
  const { foods, isShowFoodForm, setFoods, toggleFoodForm } = useFood();

  const onSubmit = async (food) => {
    const newFood = await api.create(food);

    setFoods([...foods, newFood]);

    toggleFoodForm();
  };

  return (
    <Modal show={isShowFoodForm} onHide={toggleFoodForm}>
      <Modal.Header closeButton>
        <Modal.Title as="h5">Nova Comida</Modal.Title>
      </Modal.Header>
      <Formik initialValues={{ name: '', image: {} }} onSubmit={onSubmit}>
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Form.Group controlId="formFoodName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.name}
                />
              </Form.Group>
              <Form.Group controlId="formFoodImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  name="image"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.image}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={toggleFoodForm}>
                Fechar
              </Button>
              <Button
                variant="primary"
                as="input"
                type="submit"
                value="Confirmar"
              />
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default FoodForm;
{% endraw %}
```

## Resultado Final

---

[![Edit foods-app-cra](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/foods-app-cra-n4yeg?fontsize=14&hidenavigation=1&theme=dark)

```
foods-app-cra-create
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
│   │   ├── Food.jsx
│   │   └── FoodForm.jsx
│   ├── contexts
│   │   └── FoodContext.jsx
│   ├── index.jsx
│   └── services
│       └── api.js
└── yarn.lock
```
