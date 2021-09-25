//promedio -> suma de los datos dividido en la cantidad de datos
const listaa =[100,200,300,500]

const calcularMediaAritmetica=(lista=0)=>{
    if (lista==0){
        alert("Debes ingresar valores")
    }else{
        const suma= (lista.reduce((ValorAcumulado=0,numeroNuevo) => ValorAcumulado + numeroNuevo))
        return suma/lista.length
    }
}