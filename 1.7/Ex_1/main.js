const helloWorld = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hola, món');
  }, 2000);
});