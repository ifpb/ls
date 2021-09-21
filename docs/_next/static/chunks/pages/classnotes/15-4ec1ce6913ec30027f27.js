(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{166:function(o,n,e){"use strict";e.r(n);var t=e(159),a=e(219),r=(e(7294),e(3905)),s=e(4905),d=e.n(s),m=e(8876),l=e(2802),i=(e(5675),["components"]),u=function(o){return(0,m.withSSG)(d()({filename:"index.md",route:"/classnotes/15",meta:{},pageMap:[{name:"classnote",route:"/classnote"},{name:"classnotes",children:[{name:"01",children:[{name:"index",route:"/classnotes/01"},{name:"meta.json",meta:{index:"Aula 01"}}],route:"/classnotes/01"},{name:"02",children:[{name:"index",route:"/classnotes/02"},{name:"meta.json",meta:{index:"Aula 02"}}],route:"/classnotes/02"},{name:"03",children:[{name:"index",route:"/classnotes/03"},{name:"meta.json",meta:{index:"Aula 03"}}],route:"/classnotes/03"},{name:"04",children:[{name:"index",route:"/classnotes/04"},{name:"meta.json",meta:{index:"Aula 04"}}],route:"/classnotes/04"},{name:"05",children:[{name:"index",route:"/classnotes/05"},{name:"meta.json",meta:{index:"Aula 05"}}],route:"/classnotes/05"},{name:"06",children:[{name:"index",route:"/classnotes/06"},{name:"meta.json",meta:{index:"Aula 06"}}],route:"/classnotes/06"},{name:"07",children:[{name:"index",route:"/classnotes/07"},{name:"meta.json",meta:{index:"Aula 07"}}],route:"/classnotes/07"},{name:"08",children:[{name:"index",route:"/classnotes/08"},{name:"meta.json",meta:{index:"Aula 08"}}],route:"/classnotes/08"},{name:"09",children:[{name:"index",route:"/classnotes/09"},{name:"meta.json",meta:{index:"Aula 09"}}],route:"/classnotes/09"},{name:"10",children:[{name:"index",route:"/classnotes/10"},{name:"meta.json",meta:{index:"Aula 10"}}],route:"/classnotes/10"},{name:"11",children:[{name:"index",route:"/classnotes/11"},{name:"meta.json",meta:{index:"Aula 11"}}],route:"/classnotes/11"},{name:"12",children:[{name:"index",route:"/classnotes/12"},{name:"meta.json",meta:{index:"Aula 12"}}],route:"/classnotes/12"},{name:"13",children:[{name:"index",route:"/classnotes/13"},{name:"meta.json",meta:{index:"Aula 13"}}],route:"/classnotes/13"},{name:"14",children:[{name:"index",route:"/classnotes/14"},{name:"meta.json",meta:{index:"Aula 14"}}],route:"/classnotes/14"},{name:"15",children:[{name:"index",route:"/classnotes/15"},{name:"meta.json",meta:{index:"Aula 15"}}],route:"/classnotes/15"},{name:"16",children:[{name:"index",route:"/classnotes/16"},{name:"meta.json",meta:{index:"Aula 16"}}],route:"/classnotes/16"},{name:"meta.json",meta:{10:{title:"Aula 10",type:"nav",hidden:!0},11:{title:"Aula 11",type:"nav",hidden:!0},12:{title:"Aula 12",type:"nav",hidden:!0},13:{title:"Aula 13",type:"nav",hidden:!0},14:{title:"Aula 14",type:"nav",hidden:!0},15:{title:"Aula 15",type:"nav",hidden:!0},16:{title:"Aula 16",type:"nav",hidden:!0},"01":{title:"Aula 01",type:"nav",hidden:!0},"02":{title:"Aula 02",type:"nav",hidden:!0},"03":{title:"Aula 03",type:"nav",hidden:!0},"04":{title:"Aula 04",type:"nav",hidden:!0},"05":{title:"Aula 05",type:"nav",hidden:!0},"06":{title:"Aula 06",type:"nav",hidden:!0},"07":{title:"Aula 07",type:"nav",hidden:!0},"08":{title:"Aula 08",type:"nav",hidden:!0},"09":{title:"Aula 09",type:"nav",hidden:!0}}}],route:"/classnotes"},{name:"content",route:"/content"},{name:"exams",children:[{name:"blog",route:"/exams/blog"},{name:"meta.json",meta:{blog:{title:"Blog",type:"nav",hidden:!0},projeto:"Projeto","prova-ecma":{title:"Prova ECMA",type:"nav",hidden:!0},"prova-w3c":{title:"Prova W3C",type:"nav",hidden:!0},"prova-final":{title:"Prova Final",type:"nav",hidden:!0}}},{name:"projeto",route:"/exams/projeto"},{name:"prova-ecma",route:"/exams/prova-ecma"},{name:"prova-final",route:"/exams/prova-final"},{name:"prova-w3c",route:"/exams/prova-w3c"}],route:"/exams"},{name:"index",route:"/"},{name:"meta.json",meta:{index:"Disciplina",classnote:"Aulas",classnotes:{title:"Aulas",type:"nav",hidden:!0},content:"Conte\xfado",outline:{title:"Roteiro",type:"nav",hidden:!0},tools:"Ferramentas",exams:{title:"Exames",type:"nav",hidden:!0}}},{name:"outline",route:"/outline"},{name:"tools",route:"/tools"}]},l.Z))(o)};function c(o){var n=o.components,e=(0,a.Z)(o,i);return(0,r.mdx)(u,(0,t.Z)({components:n},e),(0,r.mdx)("h1",null,"Foods App (Create)"),(0,r.mdx)("h2",null,"Modal"),(0,r.mdx)("p",null,"src/components/FoodForm.jsx:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-jsx",parentName:"pre"},'import { Button, Form, Modal } from \'react-bootstrap\';\n\nfunction FoodForm({ isShowFoodForm, setIsShowFoodForm }) {\n  const handleClose = () => {\n    setIsShowFoodForm(false);\n  };\n\n  return (\n    <Modal show={isShowFoodForm} onHide={handleClose}>\n      <Modal.Header closeButton>\n        <Modal.Title as="h5">Nova Comida</Modal.Title>\n      </Modal.Header>\n      <Form>\n        <Modal.Body>\n          <Form.Group controlId="formFoodName">\n            <Form.Label>Nome</Form.Label>\n            <Form.Control name="name" />\n          </Form.Group>\n          <Form.Group controlId="formFoodImage">\n            <Form.Label>Image</Form.Label>\n            <Form.Control name="image" />\n          </Form.Group>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button variant="secondary" onClick={handleClose}>\n            Fechar\n          </Button>\n          <Button\n            variant="primary"\n            as="input"\n            type="submit"\n            value="Confirmar"\n          />\n        </Modal.Footer>\n      </Form>\n    </Modal>\n  );\n}\n\nexport default FoodForm;\n')),(0,r.mdx)("p",null,"src/components/App.jsx:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-jsx",parentName:"pre"},"import { useRef, useState } from 'react';\nimport { Button, CardDeck, Container } from 'react-bootstrap';\n\nimport data from './model/foods';\nimport Food from './components/Food';\nimport FoodForm from './components/FoodForm';\n\nimport 'bootstrap/dist/css/bootstrap.css';\n\nfunction App() {\n  const [foods, setFoods] = useState(data);\n  const [isShowFoodForm, setIsShowFoodForm] = useState(false);\n\n  const buttonEl = useRef(null);\n\n  const handleClick = (event) => {\n    setIsShowFoodForm(true);\n\n    event.currentTarget.blur();\n  };\n\n  return (\n    <Container>\n      <h1 className=\"mt-5 text-center\">Menu</h1>\n      <div className=\"text-right\">\n        <Button\n          variant=\"secondary\"\n          className=\"rounded-circle mr-4 font-weight-bold\"\n          onClick={handleClick}\n          ref={buttonEl}\n        >\n          +\n        </Button>\n      </div>\n      <CardDeck className=\"my-3\">\n        {foods.map((food) => (\n          <Food food={food} key={food.id} />\n        ))}\n      </CardDeck>\n      <FoodForm\n        isShowFoodForm={isShowFoodForm}\n        setIsShowFoodForm={setIsShowFoodForm}\n      />\n    </Container>\n  );\n}\n\nexport default App;\n")),(0,r.mdx)("h2",null,"React Hooks"),(0,r.mdx)("h3",null,"Efeitos Colaterais (useEffect)"),(0,r.mdx)("p",null,"src/components/App.jsx:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-jsx",parentName:"pre"},"import { useEffect, useRef, useState } from 'react';\nimport { Button, CardDeck, Container } from 'react-bootstrap';\n\nimport Food from './components/Food';\nimport FoodForm from './components/FoodForm';\nimport api from './services/api';\n\nimport 'bootstrap/dist/css/bootstrap.css';\n\nfunction App() {\n  const [foods, setFoods] = useState([]);\n  const [isShowFoodForm, setIsShowFoodForm] = useState(false);\n\n  const buttonEl = useRef(null);\n\n  const handleClick = (event) => {\n    setIsShowFoodForm(true);\n\n    event.currentTarget.blur();\n  };\n\n  useEffect(() => {\n    const loadFoods = async () => {\n      const data = await api.readAll();\n\n      setFoods([...foods, ...data]);\n    };\n\n    loadFoods();\n  }, []);\n\n  return (\n    <Container>\n      <h1 className=\"mt-5 text-center\">Menu</h1>\n      <div className=\"text-right\">\n        <Button\n          variant=\"secondary\"\n          className=\"rounded-circle mr-4 font-weight-bold\"\n          onClick={handleClick}\n          ref={buttonEl}\n        >\n          +\n        </Button>\n      </div>\n      <CardDeck className=\"my-3\">\n        {foods.map((food) => (\n          <Food food={food} key={food.id} />\n        ))}\n      </CardDeck>\n      <FoodForm\n        isShowFoodForm={isShowFoodForm}\n        setIsShowFoodForm={setIsShowFoodForm}\n      />\n    </Container>\n  );\n}\n\nexport default App;\n")),(0,r.mdx)("h3",null,"Context API (useContext)"),(0,r.mdx)("p",null,"src/index.jsx:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-jsx",parentName:"pre"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './components/App';\n\nimport { FoodContextProvider } from './contexts/FoodContext';\n\nReactDOM.render(\n  <FoodContextProvider>\n    <App />\n  </FoodContextProvider>,\n  document.getElementById('root')\n);\n")),(0,r.mdx)("p",null,"src/contexts/FoodContext.jsx:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-jsx",parentName:"pre"},"import { createContext, useState, useContext } from 'react';\n\nexport const FoodContext = createContext({});\n\nexport function FoodContextProvider({ children }) {\n  const [foods, setFoods] = useState([]);\n  const [isShowFoodForm, setIsShowFoodForm] = useState(false);\n\n  const toggleFoodForm = () => {\n    setIsShowFoodForm(!isShowFoodForm);\n  };\n\n  return (\n    <FoodContext.Provider\n      value={{\n        foods,\n        setFoods,\n        isShowFoodForm,\n        setIsShowFoodForm,\n        toggleFoodForm,\n      }}\n    >\n      {children}\n    </FoodContext.Provider>\n  );\n}\n\nexport function useFood() {\n  return useContext(FoodContext);\n}\n")),(0,r.mdx)("p",null,"src/components/App.jsx:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-jsx",parentName:"pre"},"import { useEffect, useRef } from 'react';\nimport { Button, CardDeck, Container } from 'react-bootstrap';\n\nimport Food from './Food';\nimport FoodForm from './FoodForm';\nimport api from '../services/api';\nimport { useFood } from '../contexts/FoodContext';\n\nimport 'bootstrap/dist/css/bootstrap.css';\n\nfunction App() {\n  const buttonEl = useRef(null);\n\n  const { foods, setFoods, toggleFoodForm } = useFood();\n\n  const handleClick = (event) => {\n    toggleFoodForm();\n\n    event.currentTarget.blur();\n  };\n\n  useEffect(() => {\n    const loadFoods = async () => {\n      const data = await api.readAll();\n\n      setFoods([...foods, ...data]);\n    };\n\n    loadFoods();\n  }, []);\n\n  return (\n    <Container>\n      <h1 className=\"mt-5 text-center\">Menu</h1>\n      <div className=\"text-right\">\n        <Button\n          variant=\"secondary\"\n          className=\"rounded-circle mr-4 font-weight-bold\"\n          onClick={handleClick}\n          ref={buttonEl}\n        >\n          +\n        </Button>\n      </div>\n      <CardDeck className=\"my-3\">\n        {foods.map((food) => (\n          <Food food={food} key={food.id} />\n        ))}\n      </CardDeck>\n      <FoodForm />\n    </Container>\n  );\n}\n\nexport default App;\n")),(0,r.mdx)("p",null,"src/components/FoodForm.jsx:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-jsx",parentName:"pre"},'import { Button, Form, Modal } from \'react-bootstrap\';\nimport { useFood } from \'../contexts/FoodContext\';\n\nfunction FoodForm() {\n  const { isShowFoodForm, toggleFoodForm } = useFood();\n\n  return (\n    <Modal show={isShowFoodForm} onHide={toggleFoodForm}>\n      <Modal.Header closeButton>\n        <Modal.Title as="h5">Nova Comida</Modal.Title>\n      </Modal.Header>\n      <Form>\n        <Modal.Body>\n          <Form.Group controlId="formFoodName">\n            <Form.Label>Nome</Form.Label>\n            <Form.Control name="name" />\n          </Form.Group>\n          <Form.Group controlId="formFoodImage">\n            <Form.Label>Image</Form.Label>\n            <Form.Control name="image" />\n          </Form.Group>\n        </Modal.Body>\n        <Modal.Footer>\n          <Button variant="secondary" onClick={toggleFoodForm}>\n            Fechar\n          </Button>\n          <Button\n            variant="primary"\n            as="input"\n            type="submit"\n            value="Confirmar"\n          />\n        </Modal.Footer>\n      </Form>\n    </Modal>\n  );\n}\n\nexport default FoodForm;\n')),(0,r.mdx)("h2",null,"Formik"),(0,r.mdx)("p",null,(0,r.mdx)("a",{href:"https://formik.org/",parentName:"p"},"formik"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-txt",parentName:"pre"},"$ yarn add formik\n")),(0,r.mdx)("p",null,"src/components/FoodForm.jsx:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-jsx",parentName:"pre"},'import { Button, Form, Modal } from \'react-bootstrap\';\nimport { Formik } from \'formik\';\n\nimport { useFood } from \'../contexts/FoodContext\';\nimport api from \'../services/api\';\n\nfunction FoodForm() {\n  const { foods, isShowFoodForm, setFoods, toggleFoodForm } = useFood();\n\n  const onSubmit = async (food) => {\n    const newFood = await api.create(food);\n\n    setFoods([...foods, newFood]);\n\n    toggleFoodForm();\n  };\n\n  return (\n    <Modal show={isShowFoodForm} onHide={toggleFoodForm}>\n      <Modal.Header closeButton>\n        <Modal.Title as="h5">Nova Comida</Modal.Title>\n      </Modal.Header>\n      <Formik initialValues={{ name: \'\', image: {} }} onSubmit={onSubmit}>\n        {({ handleSubmit, handleChange, handleBlur, values }) => (\n          <Form onSubmit={handleSubmit}>\n            <Modal.Body>\n              <Form.Group controlId="formFoodName">\n                <Form.Label>Nome</Form.Label>\n                <Form.Control\n                  name="name"\n                  onChange={handleChange}\n                  onBlur={handleBlur}\n                  defaultValue={values.name}\n                />\n              </Form.Group>\n              <Form.Group controlId="formFoodImage">\n                <Form.Label>Image</Form.Label>\n                <Form.Control\n                  name="image"\n                  onChange={handleChange}\n                  onBlur={handleBlur}\n                  defaultValue={values.image}\n                />\n              </Form.Group>\n            </Modal.Body>\n            <Modal.Footer>\n              <Button variant="secondary" onClick={toggleFoodForm}>\n                Fechar\n              </Button>\n              <Button\n                variant="primary"\n                as="input"\n                type="submit"\n                value="Confirmar"\n              />\n            </Modal.Footer>\n          </Form>\n        )}\n      </Formik>\n    </Modal>\n  );\n}\n\nexport default FoodForm;\n')),(0,r.mdx)("h2",null,"Resultado Final"),(0,r.mdx)("p",null,(0,r.mdx)("a",{href:"https://codesandbox.io/s/foods-app-cra-n4yeg?fontsize=14&hidenavigation=1&theme=dark",parentName:"p"},(0,r.mdx)("img",{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit foods-app-cra",parentName:"a"}))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{className:"language-txt",parentName:"pre"},"foods-app-cra-create\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 imgs\n\u2502   \u2502   \u251c\u2500\u2500 batatafrita.jpg\n\u2502   \u2502   \u251c\u2500\u2500 hamburguer.jpg\n\u2502   \u2502   \u251c\u2500\u2500 milkshake.jpg\n\u2502   \u2502   \u251c\u2500\u2500 sanduiche.jpg\n\u2502   \u2502   \u2514\u2500\u2500 suco.jpg\n\u2502   \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u251c\u2500\u2500 App.jsx\n\u2502   \u2502   \u251c\u2500\u2500 Food.jsx\n\u2502   \u2502   \u2514\u2500\u2500 FoodForm.jsx\n\u2502   \u251c\u2500\u2500 contexts\n\u2502   \u2502   \u2514\u2500\u2500 FoodContext.jsx\n\u2502   \u251c\u2500\u2500 index.jsx\n\u2502   \u2514\u2500\u2500 services\n\u2502       \u2514\u2500\u2500 api.js\n\u2514\u2500\u2500 yarn.lock\n")))}c.isMDXComponent=!0,n.default=c},7757:function(o,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/classnotes/15",function(){return e(166)}])}},function(o){o.O(0,[286,164,774,888,179],(function(){return n=7757,o(o.s=n);var n}));var n=o.O();_N_E=n}]);