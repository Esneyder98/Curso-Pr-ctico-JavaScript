// const listilla=[
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     2,
//     1,
// ];
function calcularModa(lista){
    const lista1Count={}
    // cuenta cuantas veces se repite cada numero y lo inserta en un objeto
    lista.map(function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento]+=1;
        }else{
            lista1Count[elemento]=1;
        }
    });
    //convierte el objeto en un array ordenado segun la posicion dos de este
    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
          return elementoA[1] - elementoB[1];
        });
      
      const moda = lista1Array[lista1Array.length - 1][0];
      return moda;

}




