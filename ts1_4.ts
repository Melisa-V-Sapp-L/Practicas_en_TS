/* Ejercicio 1.4
Dado el siguiente codigo:
 Añadir anotaciones de tipo (lo más explícitas posible)
const entero = 6;
 const decimal = 6.66;
 const hexadecimal = 0xf00d;
 const binario = 0b1010011010;
 const octal = 0o744;
 const ceroNegativo = -0;
 const enRealiadadNumero = NaN;
 const mayorNumero = Number.MAX_VALUE;
 const elNumeroMasGrande = Infinity;

 const miembros: any[] = [
 entero,
 decimal,
 hexadecimal,
 binario,
 octal,
 ceroNegativo,
 enRealiadadNumero,
 mayorNumero,
 elNumeroMasGrande
 ];

 miembros[0] = '12345';

 console.log('[Ejercicio 1.4]', miembros); */

 function exercise4 () {
    var entero: number = 6;
    var decimal: number = 6.66;
    var hexadecimal: any = 0xf00d;
    var binario: number = 0b1010011010;
    var octal: any = 0o744;
    var ceroNegativo: any = -0;
    var enRealiadadNumero: any = NaN;
    var mayorNumero: number = Number.MAX_VALUE;
    var elNumeroMasGrande: number  = Infinity;
   
    var miembros: any[] = [
    entero,
    decimal,
    hexadecimal,
    binario,
    octal,
    ceroNegativo,
    enRealiadadNumero,
    mayorNumero,
    elNumeroMasGrande
    ];
   
    miembros[9]= '12345';
   
    console.log('[Ejercicio 1.4]', miembros);
}
