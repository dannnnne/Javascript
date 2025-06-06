function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const user = { id: userId, name: 'daeun' };
        resolve(user);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
      ];
      resolve(posts);
    });
  }, 2000);
}

function getComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const comments = [
        { id: 1, text: 'Comment 1' },
        { id: 2, text: 'Comment 2' },
        { id: 3, text: 'Comment 3' },
      ];
      resolve(comments);
    });
  }, 1000);
}

// getUser(1, (user) => {
//   console.log('user:', user);
//   getPosts(user.id, (post) => {
//     console.log('posts:', posts);
//     getComments(posts[0].id, (coments) => {
//       console.log('comments:', comments);
//     });
//   });
// });

getUser(1)
  .then((user) => {
    console.log('user', user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log('posts: ', posts);
    return getComments(posts[0].id);
  })
  .then((comments) => {
    console.log('comments: ', comments);
  })
  .catch((err) => console.log('err:', err))
  .finally(() => console.log('### finally ###'));
