

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

    const isCouponValueValid = function (coupon) {
        return coupon.name === cuponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + cuponValue + " no es válido");
    }else{
        const descuento = userCoupon.descuento;
        const precioConDescuento = calcularPrecioConDescuento(valuePrecio, descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
 
  }
