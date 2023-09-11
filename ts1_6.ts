
/* Ejercicio 1.6
Queremos representar un elemento de inventario como una estructura donde la primera entrada
es el nombre del artículo y la segunda es la cantidad.
Dado el siguiente codigo:
1 Añadir anotaciones de tipo (lo más explícitas posible)
2 Solucionar errores (si corresponde)
1 const elementoInventario = ['tuerca', 11];
2
3 // despues lo desestructuramos
4 const [nombre, cantidad] = elementoInventario;
5
6 const mensaje = agregarInventario(nombre, cantidad);
7
8 console.log('[Ejercicio 1.6]', mensaje);
9
10 function agregarInventario(nombre: string, cantidad: number): string {
11 return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
12 } */

function exercise6 () {
const elementoInventario: [string, number] = ['tuerca', 11];


const [nombre, cantidad] = elementoInventario;

const mensaje = agregarInventario(nombre, cantidad);

console.log('[Ejercicio 1.6]', mensaje);

function agregarInventario(nombre: string, cantidad: number): string {
return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
} 
}