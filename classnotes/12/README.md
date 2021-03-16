# REST API

  - [Back-end Web](#back-end-web)
    - [Rotas do Foods API](#rotas-do-foods-api)
    - [HTTP Status Codes](#http-status-codes)
    - [Estrutura do Código](#estrutura-do-código)
    - [Create](#create)
    - [Read](#read)
    - [Update](#update)
    - [Delete](#delete)
  - [Front-end Web](#front-end-web)
    - [Estrutura do Código](#estrutura-do-código-1)
    - [Create](#create-1)
    - [Read](#read-1)
    - [Update](#update-1)
    - [Delete](#delete-1)

## Back-end Web

---

### Rotas do Foods API

| Método | Caminho              | Parâmetro   | Status       | Resposta                                     |
| ------ | -------------------- | ----------- | ------------ | -------------------------------------------- |
| POST   | `/foods`             | Body        | `201`        | Cria uma nova comida                         |
| GET    | `/foods`             | -           | `200`        | Retorna todas as comidas                     |
| GET    | `/foods?name=Salada` | Query       | `200`        | Retorna todas as comidas com o nome `Salada` |
| GET    | `/foods/1`           | Route       | `200`, `400` | Retorna a comida de ID 1                     |
| PUT    | `/foods/1`           | Body, Route | `200`, `400` | Atualiza a comida de ID 1                    |
| DELETE | `/foods/1`           | Route       | `204`, `400` | Exclui a comida de ID 1                      |

### HTTP Status Codes

- [Classes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
  - Respostas de informação (100-199)
  - Respostas de sucesso (200-299)
  - Redirecionamentos (300-399)
  - Erros do cliente (400-499)
  - Erros do servidor (500-599)
- Códigos do Foods API

| Código | Nome                  | Significado                                                                |
| ------ | --------------------- | -------------------------------------------------------------------------- |
| `200`  | Ok                    | Solicitação gerada com sucesso                                             |
| `201`  | Created               | Solicitação gerada com sucesso e um novo recurso foi criado como resultado |
| `204`  | No Content            | Solicitação gerada com sucesso e não há conteúdo para ser enviado          |
| `400`  | Bad Request           | Solicitação não compreendida por motivos de erro                           |
| `404`  | Not Found             | O servidor não pode encontrar o recurso solicitado                         |
| `500`  | Internal Server Error | O servidor encontrou uma situação com a qual não sabe lidar.               |

### Estrutura do Código

```
foods-api
├── .gitignore
├── package-lock.json
├── package.json
├── requests.http
└── src
    └── index.js
```

[![Edit foods-api](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/foods-api-zedcj?fontsize=14&hidenavigation=1&theme=dark)

### Create

![](assets/create-food.png)

requests.http:

```
### Create Food (Batata)

POST http://localhost:3000/foods
Content-Type: application/json

{
  "name": "Batata",
  "image": "imgs/batatafrita.jpg"
}
```

CodeSandBox: [Create (REQBIN)](https://reqbin.com/kxrzigfx)

### Read

![](assets/read-foods.png)

requests.http:

```
### Read Foods

GET http://localhost:3000/foods
```

CodeSandBox: [Read](https://zedcj.sse.codesandbox.io/foods)

![](assets/read-food-by-id.png)

requests.http:

```
### Read Food by ID

GET http://localhost:3000/foods/1
```

CodeSandBox: [Read by ID](https://zedcj.sse.codesandbox.io/foods/1)

### Update

![](assets/update-food.png)

requests.http:

```
### Update Food

PUT http://localhost:3000/foods/1
Content-Type: application/json

{
  "name": "Batata Frita",
  "image": "imgs/batatafrita.jpg"
}
```

CodeSandBox: [Update (REQBIN)](https://reqbin.com/ngkkunqu)

### Delete

![](assets/delete-food.png)

requests.http:

```
### Delete Food

DELETE http://localhost:3000/foods/1
```

CodeSandBox: [Delete (REQBIN)](https://reqbin.com/epd9hrqo)

## Front-end Web

---

### Estrutura do Código

```
foods-crud
├── index.html
└── js
    ├── index.js
    └── services
        └── api.js
```

[![Edit foods-client](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/foods-client-m91qk?fontsize=14&hidenavigation=1&theme=dark)

### Create

js/services/api.js:

```js
const api = 'http://127.0.0.1:3000';

async function create(food) {
  const res = await fetch(`${api}/foods`, {
    method: 'post',
    body: JSON.stringify(food),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return await res.json();
}
```

### Read

js/services/api.js:

```js
async function readAll() {
  const res = await fetch(`${api}/foods`);

  return await res.json();
}

async function readByName(name) {
  const res = await fetch(`${api}/foods?name=${name}`);

  return await res.json();
}

async function readById(id) {
  const res = await fetch(`${api}/foods/${id}`);

  return await res.json();
}
```

### Update

js/services/api.js:

```js
async function update(id, food) {
  const res = await fetch(`${api}/foods/${id}`, {
    method: 'put',
    body: JSON.stringify(food),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return await res.json();
}
```

### Delete

js/services/api.js:

```js
async function remove(id) {
  await fetch(`${api}/foods/${id}`, {
    method: 'delete',
  });
}
```
