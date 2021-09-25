//promedio -> suma de los datos dividido en la cantidad de datos
const listaa =[100,200,300,500]

const calcularMediaAritmetica=lista=>{
    const suma= (lista.reduce((estado,numero) => estado +numero))
    return suma/lista.length
}