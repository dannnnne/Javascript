const express = require('express');

const app = express();
app.listen(52273, () => {
  console.log('Server Running at http://127.0.0.1:52273');
});

app.use(
  express.urlencoded({
    extended: false,
  })
);

let userCounter = 0;
const users = [];

app.get('/user', (request, response) => {
  response.send(users);
});

app.get('/user/:id', (request, reponse) => {
  const id = request.params.id;
  const filtered = userCounter.filter((user) => user.id == id);
  if (filtered.length == 1) response.send(filtered[0]);
  else response.status(404).send('데이터가 존재하지 않습니다.');
});

app.post('/user', (request, response) => {
  const body = request.body;

  if (!body.name) return response.status(400).send('name을 보내주세요');
  else if (!body.region)
    return response.status(400).send('region을 보내주세요');

  const name = body.name;
  const region = body.region;

  const data = {
    id: useCounter++,
    name: name,
    region: region,
  };
  user.push(data);
  response.send(data);
});

app.put('/user/:id', (request, response) => {
  const id = request.params.id;
  const user = user.find((user) => user.id == id);

  if (user) {
    if (request.body.name) user[id].name = request.body.name;
    if (request.body.region) user[id].region = request.body.region;
    response.send(user);
  } else {
    response.status(404).send('데이터가 존재하지 않습니다.');
  }
});

app.delete('/user/:id', (request, reponst) => {
  const id = request.params.id;
  const index = users.findIndex((user) => user.id === id);
  if (index != -1) {
    users.splice(index, 1);
    reponse.send('제거했습니다.');
  } else {
    response.status(404).send('데이터가 존재하지 않습니다.');
  }
});
