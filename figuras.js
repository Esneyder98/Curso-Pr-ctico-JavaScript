// Codigo del Cuadrado
console.group("Cuadrados");

const perimetroCuadrado=lado => lado * 4;


const areaCuadrado = lado => lado * lado;


console.groupEnd();

// Codigo del Triangulo
console.group("Triangulo")
const perimetroTriangulo = (lado1,lado2,base) => lado1+lado2+base

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