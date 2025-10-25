const helloWorld = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hola, món');
  }, 2000);
});

async function greetMe () {
  const greeting = await helloWorld;
  console.log(greeting);
}

greetMe();