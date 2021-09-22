# Foods App (CRUD)

## CRA

### Atualizar Comida

```txt
$ yarn add react-icons
```

src/components/Food.jsx:

```jsx
import { Card, Col } from 'react-bootstrap';
import { FaPencilAlt } from 'react-icons/fa';

import { useFood } from '../contexts/FoodContext';

function Food({ food }) {
  const { handleLoadUpdateFoodForm } = useFood();

  return (
    <Col sm={6} lg={4} xl={3} className="mb-3">
      <Card>
        <Card.Header className="text-center font-weight-bold">
          <span>{food.name}</span>
          <span className="float-right">
            <FaPencilAlt onClick={() => handleLoadUpdateFoodForm(food)} />
          </span>
        </Card.Header>
        <Card.Body className="p-0">
          <img src={food.image} alt={food.name} className="w-100" />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Food;
```

src/contexts/FoodContext.jsx:

```jsx
import { createContext, useState, useContext } from 'react';

import api from '../services/api';

export const FoodContext = createContext({});

export function FoodContextProvider({ children }) {
  const emptyFood = { name: '', image: '' };

  const [foods, setFoods] = useState([]);
  const [isShowFoodForm, setIsShowFoodForm] = useState(false);
  const [typeFoodForm, setTypeFoodForm] = useState('create');
  const [selectedFood, setSelectedFood] = useState(emptyFood);

  const toggleFoodForm = () => {
    setIsShowFoodForm(!isShowFoodForm);
  };

  const handleLoadCreateFoodForm = (buttonEl) => {
    setSelectedFood(emptyFood);

    toggleFoodForm();

    setTypeFoodForm('create');

    buttonEl.current.blur();
  };

  const handleCreateFood = async (food) => {
    const newFood = await api.create(food);

    setFoods([...foods, newFood]);
  };

  const handleLoadUpdateFoodForm = (food) => {
    setSelectedFood(food);

    toggleFoodForm();

    setTypeFoodForm('update');
  };

  const handleUpdateFood = async (food) => {
    const newFood = await api.update(food.id, food);

    const newFoods = foods.map((food) =>
      food.id === newFood.id ? newFood : food
    );

    setFoods(newFoods);
  };

  const handleSubmitFoodForm = (food) => {
    if (typeFoodForm === 'create') {
      handleCreateFood(food);
    } else {
      handleUpdateFood(food);
    }

    toggleFoodForm();
  };

  return (
    <FoodContext.Provider
      value={{
        foods,
        setFoods,
        selectedFood,
        setSelectedFood,
        isShowFoodForm,
        setIsShowFoodForm,
        toggleFoodForm,
        typeFoodForm,
        setTypeFoodForm,
        handleLoadCreateFoodForm,
        handleCreateFood,
        handleLoadUpdateFoodForm,
        handleUpdateFood,
        handleSubmitFoodForm,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export function useFood() {
  return useContext(FoodContext);
}
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

  const { foods, setFoods, handleLoadCreateFoodForm } = useFood();

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
          onClick={() => handleLoadCreateFoodForm(buttonEl)}
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
import { Formik } from 'formik';

import { useFood } from '../contexts/FoodContext';

function FoodForm() {
  const {
    selectedFood,
    isShowFoodForm,
    typeFoodForm,
    toggleFoodForm,
    handleSubmitFoodForm,
  } = useFood();

  return (
    <Modal show={isShowFoodForm} onHide={toggleFoodForm}>
      <Modal.Header closeButton>
        <Modal.Title as="h5">
          {typeFoodForm === 'create' ? 'Nova' : 'Atualizar'} Comida
        </Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={selectedFood}
        enableReinitialize={true}
        onSubmit={(food) => handleSubmitFoodForm(food)}
      >
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
```

### CSS Modules

src/components/Food/style.module.css ([CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)):
```css
.foodActions {
  cursor: pointer;
}
```

src/components/Food/index.jsx:
```jsx
import { Card, Col } from 'react-bootstrap';
import { FaPencilAlt } from 'react-icons/fa';

import { useFood } from '../../contexts/FoodContext';

import styles from './style.module.css';

function Food({ food }) {
  const { handleLoadUpdateFoodForm } = useFood();

  return (
    <Col sm={6} lg={4} xl={3} className="mb-3">
      <Card>
        <Card.Header className="text-center font-weight-bold">
          <span>{food.name}</span>
          <span className={`${styles.foodActions} float-right`}>
            <FaPencilAlt onClick={() => handleLoadUpdateFoodForm(food)} />
          </span>
        </Card.Header>
        <Card.Body className="p-0">
          <img src={food.image} alt={food.name} className="w-100" />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Food;
```

### Excluir Comida

src/components/Food/index.jsx:

```jsx
import { Card, Col } from 'react-bootstrap';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

import { useFood } from '../../contexts/FoodContext';

import styles from './style.module.css';

function Food({ food }) {
  const { handleLoadUpdateFoodForm, handleLoadDeleteFoodModal } = useFood();

  return (
    <Col sm={6} lg={4} xl={3} className="mb-3">
      <Card>
        <Card.Header className="text-center font-weight-bold">
          <span>{food.name}</span>
          <span className={`${styles.foodActions} float-right`}>
            <FaTrashAlt onClick={() => handleLoadDeleteFoodModal(food)} />{' '}
            <FaPencilAlt onClick={() => handleLoadUpdateFoodForm(food)} />
          </span>
        </Card.Header>
        <Card.Body className="p-0">
          <img src={food.image} alt={food.name} className="w-100" />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Food;
```

src/components/DeleteFoodModal.jsx:

```jsx
import { Button, Modal } from 'react-bootstrap';

import { useFood } from '../contexts/FoodContext';

function DeleteFoodModal() {
  const {
    isShowDeleteFoodModal,
    selectedFood,
    toggleDeleteFoodModal,
    handleDeleteFood,
  } = useFood();

  return (
    <Modal show={isShowDeleteFoodModal} onHide={toggleDeleteFoodModal}>
      <Modal.Header closeButton>
        <Modal.Title as="h5">Excluir comida</Modal.Title>
      </Modal.Header>
      <Modal.Body>Deseja realmente excluir {selectedFood.name}?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleDeleteFoodModal}>
          Fechar
        </Button>
        <Button
          variant="primary"
          onClick={() => handleDeleteFood(selectedFood)}
        >
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteFoodModal;
```

src/components/App.jsx:

```jsx
import { useEffect, useRef } from 'react';
import { Button, CardDeck, Container } from 'react-bootstrap';

import Food from './Food';
import FoodForm from './FoodForm';
import DeleteFoodModal from './DeleteFoodModal';
import api from '../services/api';
import { useFood } from '../contexts/FoodContext';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const buttonEl = useRef(null);

  const { foods, setFoods, handleLoadCreateFoodForm } = useFood();

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
          onClick={() => handleLoadCreateFoodForm(buttonEl)}
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
      <DeleteFoodModal />
    </Container>
  );
}

export default App;
```

src/contexts/FoodContext.jsx:

```jsx
import { createContext, useState, useContext } from 'react';

import api from '../services/api';

export const FoodContext = createContext({});

export function FoodContextProvider({ children }) {
  const emptyFood = { name: '', image: '' };

  const [foods, setFoods] = useState([]);
  const [isShowFoodForm, setIsShowFoodForm] = useState(false);
  const [isShowDeleteFoodModal, setIsShowDeleteFoodModal] = useState(false);
  const [typeFoodForm, setTypeFoodForm] = useState('create');
  const [selectedFood, setSelectedFood] = useState(emptyFood);

  const toggleFoodForm = () => {
    setIsShowFoodForm(!isShowFoodForm);
  };
  const toggleDeleteFoodModal = () => {
    setIsShowDeleteFoodModal(!isShowDeleteFoodModal);
  };

  const handleLoadCreateFoodForm = (buttonEl) => {
    setSelectedFood(emptyFood);

    toggleFoodForm();

    setTypeFoodForm('create');

    buttonEl.current.blur();
  };

  const handleCreateFood = async (food) => {
    const newFood = await api.create(food);

    setFoods([...foods, newFood]);
  };

  const handleLoadUpdateFoodForm = (food) => {
    setSelectedFood(food);

    toggleFoodForm();

    setTypeFoodForm('update');
  };

  const handleUpdateFood = async (food) => {
    const newFood = await api.update(food.id, food);

    const newFoods = foods.map((food) =>
      food.id === newFood.id ? newFood : food
    );

    setFoods(newFoods);
  };

  const handleLoadDeleteFoodModal = (food) => {
    setSelectedFood(food);

    toggleDeleteFoodModal();
  };

  const handleDeleteFood = async (food) => {
    await api.remove(food.id);

    const newFoods = foods.filter((foodItem) => foodItem.id !== food.id);

    setFoods(newFoods);

    toggleDeleteFoodModal();
  };

  const handleSubmitFoodForm = (food) => {
    if (typeFoodForm === 'create') {
      handleCreateFood(food);
    } else {
      handleUpdateFood(food);
    }

    toggleFoodForm();
  };

  return (
    <FoodContext.Provider
      value={{
        foods,
        setFoods,
        selectedFood,
        setSelectedFood,
        isShowFoodForm,
        setIsShowFoodForm,
        isShowDeleteFoodModal,
        setIsShowDeleteFoodModal,
        toggleFoodForm,
        toggleDeleteFoodModal,
        typeFoodForm,
        setTypeFoodForm,
        handleLoadCreateFoodForm,
        handleCreateFood,
        handleLoadUpdateFoodForm,
        handleUpdateFood,
        handleLoadDeleteFoodModal,
        handleDeleteFood,
        handleSubmitFoodForm,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export function useFood() {
  return useContext(FoodContext);
}
```

### Resultado do CRUD

[![Edit foods-app-cra-crud](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/foods-app-cra-lk5mm?fontsize=14&hidenavigation=1&theme=dark)

```txt
foods-app-cra-crud
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
│   │   ├── DeleteFoodModal.jsx
│   │   ├── Food
│   │   │   ├── index.jsx
│   │   │   └── style.module.css
│   │   └── FoodForm.jsx
│   ├── contexts
│   │   └── FoodContext.jsx
│   ├── index.jsx
│   └── services
│       └── api.js
└── yarn.lock
```

## NextJS

### Criando o projeto

[NextJS](https://nextjs.org/):

```txt
$ npx create-next-app foods-app-next-crud
$ cd foods-app-next-crud
$ yarn dev
```

```txt
$ rm pages/api/hello.js \
public/favicon.ico \
public/vercel.svg \
styles/globals.css \
styles/Home.module.css \
README.md
$ rm -rf pages/api/ styles/
```

```txt
foods-app-next-crud
├── .gitignore
├── package.json
├── src
│   └── pages
│       ├── _app.js
│       └── index.js
├── public
└── yarn.lock
```

src/pages/index.js:

```jsx
export default function Home() {
  return (
    <>
      <h1>Menu</h1>
      <section>Suco, Batata</section>
    </>
  );
}
```

```txt
$ yarn add bootstrap react-bootstrap formik react-icons
```

src/pages/_app.js:

```jsx
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

src/pages/index.jsx:

```jsx
import App from '../components/App';
import { FoodContextProvider } from '../contexts/FoodContext';

export default function Home() {
  return (
    <FoodContextProvider>
      <App />
    </FoodContextProvider>
  );
}
```

### Navegação (next/link)

src/pages/_app.jsx:

```jsx
import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

src/pages/about.jsx:

```jsx
import { Container } from 'react-bootstrap';

export default function About() {
  return (
    <Container>
      <h1 className="text-center mt-5">About</h1>
    </Container>
  );
}
```

src/components/menu.jsx ([next/link](https://nextjs.org/docs/api-reference/next/link)):

```jsx
import Link from 'next/link';
import { Container, Navbar, Nav } from 'react-bootstrap';

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Foods App</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" as="ul">
            <Nav.Item as="li">
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link href="/about" passHref>
                <Nav.Link>About</Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
```

### Image (next/image)

src/components/Food/index.jsx ([next/image](https://nextjs.org/docs/api-reference/next/image)):

```jsx
// ...

import Image from 'next/image';

// ...

function Food({ food }) {
  // ...

  return (
    <Col sm={6} lg={4} xl={3} className="mb-3">
      <Card>
        <Card.Header className="text-center font-weight-bold">
          // ...
        </Card.Header>
        <Card.Body className="p-0">
          <Image
            src={'/' + food.image}
            alt={food.name}
            width={230}
            height={230}
            layout="responsive"
          />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Food;
```

### Resultado Final

[![Edit foods-app-next-crud](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/foods-app-next-crud-rud6n?fontsize=14&hidenavigation=1&theme=dark)

> OBs: Por questões de compatibilidade do NextJS no CodeSandBox, as páginas (pages/) foram colocadas na raiz do projeto, ou seja, fora da pasta src/.

```txt
foods-app-next-crud
├── .gitignore
├── package.json
├── public
│   └── imgs
│       ├── batatafrita.jpg
│       ├── hamburguer.jpg
│       ├── milkshake.jpg
│       ├── sanduiche.jpg
│       └── suco.jpg
├── src
│   ├── components
│   │   ├── App.jsx
│   │   ├── DeleteFoodModal.jsx
│   │   ├── Food
│   │   │   ├── index.jsx
│   │   │   └── style.module.css
│   │   ├── FoodForm.jsx
│   │   └── Menu.jsx
│   ├── contexts
│   │   └── FoodContext.jsx
│   ├── pages
│   │   ├── _app.js
│   │   ├── about.jsx
│   │   └── index.jsx
│   └── services
│       └── api.js
└── yarn.lock
```

## Próximos Passos

- Roadmap
  - [Developer Roadmaps](https://roadmap.sh/)
    - [Frontend Developer](https://roadmap.sh/frontend)
    - [React Developer](https://roadmap.sh/react)
  - [adam-golab/react-developer-roadmap](https://github.com/adam-golab/react-developer-roadmap)
- Github Awesome
  - [brillout/awesome-react-components](https://github.com/brillout/awesome-react-components)
  - [enaqx/awesome-react](https://github.com/enaqx/awesome-react)
  - [unicodeveloper/awesome-nextjs](https://github.com/unicodeveloper/awesome-nextjs)
