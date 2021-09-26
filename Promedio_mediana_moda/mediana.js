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
const lista=[100,500,4000000,200]
const esPar = numero=>{
    if (numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}
const calcularMediana=(list)=>{
    if(list.length >=1){
        let ordenada = list.sort(
            function (elementoA, elementoB) {
              return elementoA - elementoB;
            });
        const mitadLista = parseInt(ordenada.length/2);

        let mediana;
        if(esPar(ordenada.length)){
            const elemento1 = ordenada[mitadLista-1];
            const elemento2 = ordenada[mitadLista];
            const promedioElementos = calcularMediaAritmetica([elemento1,elemento2]);
            return mediana = promedioElementos;
        }else{
            return mediana = lista[mitadLista]
        }
        
    }else{
        console.log("Valor no valido");
    }
}
