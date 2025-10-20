const numero = 1;
const numeroNegatiu = -1;
const numeroZero = 0;

const tipusNumero = numero > 0 ? "Positiu" : numero === 0 ? "Zero patatero" : "Negatiu";
const tipusNumero2 = numeroNegatiu > 0 ? "Positiu" : numeroNegatiu  === 0 ? "Zero patatero" : "Negatiu";
const tipusNumero3 = numeroZero > 0 ? "Positiu" : numeroZero === 0 ? "Zero patatero" : "Negatiu";

console.log(tipusNumero, tipusNumero2, tipusNumero3);

const trobarMaxim = (a, b, c) => a > b && a > c ? `${a} és el número més gran` : b > a && b > c ? `${b} és el número més gran` : c > b && c > a ? `${c} és el número més gran` : "Hi ha dos numeros iguals!"

console.log(trobarMaxim (3, 8, -5));