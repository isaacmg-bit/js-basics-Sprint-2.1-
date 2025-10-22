const salutacio = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;

    if (error) {
      reject('Hi ha hagut un error!');
    } else {
      resolve('Hola, món');
    }

  }, 2000);
});

salutacio
  .then((missatge) => {
    console.log('Èxit:', missatge);
  })
  .catch((err) => {
    console.error('Error:', err);
  });