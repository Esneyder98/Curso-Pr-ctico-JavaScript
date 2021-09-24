// Codigo del Cuadrado
console.group("Cuadrados");

const perimetroCuadrado=lado => lado * 4;
const areaCuadrado = lado => lado * lado;

console.groupEnd();

// Codigo del Triangulo
console.group("Triangulo")
const perimetroTriangulo = (lado1,lado2,base) =>lado1+lado2+base;

const areaTriangulo =(base,altura)=> (base * altura)/2;
console.groupEnd()

//Codigo Circulo
console.group("Circulos");

// diametro
const diametroCirculo= radio=> radio * 2;

// PI
const PI =Math.PI;
//Circunferencia o perimetro
const perimetroCirculo = (radio) => diametroCirculo(radio) *PI;

//Area
const areaCirculo = (radio) => (radio * radio) *PI;
console.groupEnd()


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }

  function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputLado1");
    const valueLado1 = parseInt(inputLado1.value);

    const inputLado2 = document.getElementById("InputLado2");
    const valueLado2 = parseInt(inputLado2.value);

    const inputBase = document.getElementById("InputBase");
    const valueBase = parseInt(inputBase.value);
  
    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);
    alert(perimetro);
  }
  function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputBase");
    const valueBase = inputBase.value;

    const inputAltura= document.getElementById("InputAltura");
    const valueAltura = inputAltura.value;
  
    const area = areaTriangulo(valueBase,valueAltura);
    alert(area);
  }