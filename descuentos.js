

const calcularPrecioConDescuento= (precio,descuento)=>{
    const porcentajePrecioConDescuento= 100 - descuento;
    const precioConDescuento =(precio * porcentajePrecioConDescuento)/100
    return precioConDescuento
}
const coupons=[
    {
    name:"E13",
    descuento:5
    },
    {
    name:"WF3",
    descuento:15
    },
    {name:"ESNE",
    descuento:10}]

// Aquí interactuamos con el HTML
function calcularPrecioDescuento() {
    const inputPrecio = document.getElementById("InputPrice");
    const valuePrecio = inputPrecio.value;

    const inputCupon = document.getElementById("InputCoupon");
    const cuponValue = inputCupon.value;

    const ValidarCupon = function(cupones){
        const validar = cupones.find(clave=>{return clave.name===cuponValue
        })
        return validar.descuento
    }
        const PrecioDescuento = calcularPrecioConDescuento(valuePrecio,ValidarCupon(coupons));
    
        const resulP=document.getElementById("ResultP")
        resulP.innerText="El precio con descuento es $" +PrecioDescuento
 
  }
