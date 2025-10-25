const promiseOne = new Promise((resolve) => {
  setTimeout(() => resolve('First promise ready (2sec)'), 2000);
});

const promiseTwo = new Promise((resolve) => {
  setTimeout(() => resolve('Second promise ready (3sec)'), 3000);
});

Promise.all([promiseOne, promiseTwo])
  .then((print) => {
    console.log(print); 
  });
