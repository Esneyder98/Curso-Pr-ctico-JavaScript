//mediana -> se ordenan los elementos y se saca el de la mitad cuando son impares
//           cuando son pares se cojen los dos elementos de la mitad y se saca su promedio

const calcularMediaAritmetica=(lista=0)=>{
    if (lista==0){
        alert("Debes ingresar valores")
    }else{
        const suma= (lista.reduce((ValorAcumulado=0,numeroNuevo) => 
        ValorAcumulado + numeroNuevo))
        return suma/lista.length
    }
}
const lista=[100,200,500,4000000]


const mitadLista = parseInt(lista.length/2);

function esPar(numero){
    if (numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}
let mediana;
if(esPar(lista.length)){
    const elemento1 = lista[mitadLista-1];
    const elemento2 = lista[mitadLista];
    const promedioElementos = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElementos;
}else{
    mediana=lista[mitadLista]
}
