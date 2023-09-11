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
function exercise4() {
    var entero = 6;
    var decimal = 6.66;
    var hexadecimal = 0xf00d;
    var binario = 666;
    var octal = 484;
    var ceroNegativo = -0;
    var enRealiadadNumero = NaN;
    var mayorNumero = Number.MAX_VALUE;
    var elNumeroMasGrande = Infinity;
    var miembros = [
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
    miembros[9] = '12345';
    console.log('[Ejercicio 1.4]', miembros);
}
