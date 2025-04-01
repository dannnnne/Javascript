fetch('https://jsonplaceholder.typicode.com/todos?-limit=5')
  .then((response) => {
    return response.json();
  })
  .then((date) => {
    console.log('data: ', data);
    return data.filter((obj) => obj.id > 3);
  })
  .catch((err) => {
    console.log('err: ', err);
  })
  .finally(() => {
    console.log('### finally ###');
  });
