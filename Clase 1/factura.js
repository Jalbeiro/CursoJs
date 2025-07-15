let nombrePro= "Producto Ejemplo"
let precio= 10000 // Precio unitario
let cantidad= 2

const iva = 0.19;
const descuento = 0.15;

let subtotal = producto.precio * producto.cantidad;
let vlrDescuento = subtotal * descuento;
let vlrIva = (subtotal - vlrDescuento) * iva;
let neto = subtotal - vlrDescuento - vlrIva;

console.log("Factura:");
console.log("Nombre producto:", producto.nombre);
console.log("Precio:", producto.precio);
console.log("Cantidad:", producto.cantidad);
console.log("Subtotal:", subtotal);
console.log("Valor Descuento:", vlrDescuento);
console.log("Valor IVA:", vlrIva);
console.log("Neto a pagar:", neto);
