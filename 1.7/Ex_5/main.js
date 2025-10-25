const helloWorld = new Promise((resolve, reject) => {
  setTimeout(() => {
    const ok = true;
    if (ok) {
      resolve('Hola, món');
    } else {
      reject('Error!');
    }
  }, 2000);
});

async function greetMe() {
  try {
    const greeting = await helloWorld;
    console.log(greeting); 
  } catch (error) {
    console.error(error); 
  }
}

greetMe();