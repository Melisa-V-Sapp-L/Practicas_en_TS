/*
Ejercicio 2.3
Dado el siguiente codigo:
1
2 function padLeft(value: string, padding: number | string): string {
3 // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
4 // si padding es una cadena, return padding + value
5 }
6
7 console.log('[Ejercicio 4.2]', `
8 ${padLeft('', 0)}
9 ${padLeft('', '')}
10 ${padLeft('', '')}
11 ${padLeft('', '')}
12 ${padLeft('', '')}
13 `);
1 Use un protector de tipo para completar el cuerpo de la función ‘padLeft‘
*/
function exercise9() {
    function padLeft(value, padding) {
        if (typeof value === 'number') {
            return "".concat(Array(padding).join(' ')).concat(value);
        }
        else {
            return padding + value;
        }
    }
    console.log('[Ejercicio 4.2]', "".concat(padLeft('', 0), " ").concat(padLeft('', ''), " ").concat(padLeft('', ''), " ").concat(padLeft('', ''), " ").concat(padLeft('', '')));
}
