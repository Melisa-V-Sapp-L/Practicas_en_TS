/* Ejercicio 2.1
TypeScript es inteligente sobre los posibles tipos de una variable, dependiendo de la ruta del
código.
Dado el siguiente codigo:
1 function doStuff(value: any): void {
2 if (typeof value === 'string') {
3 console.log(value.toUpperCase().split('').join(' '));
4 } else if (typeof value === 'number') {
5 console.log(value.toPrecision(5));
6 }
7
8 value; // coloque el cursor sobre `valor` aqui
9 }
10
11 doStuff(2);
12 doStuff(22);
13 doStuff(222);
14 doStuff('hello');
15 doStuff(true);
16 doStuff({});
17
18 console.log('[Ejercicio 4.1]');
1 Simplemente inspeccione los tipos posibles moviéndose sobre el ’texto’ para ver cómo
cambia el tipo inferido si se pueden hacer suposiciones de forma segura sobre los tipos
posibles dentro de la ruta del código dado. */
function exercise7() {
    function doStuff(value) {
        if (typeof value === 'string') {
            console.log(value.toUpperCase().split('').join(' '));
        }
        else if (typeof value === 'number') {
            console.log(value.toPrecision(5));
        }
        value;
    }
    doStuff(2);
    doStuff(22);
    doStuff(222);
    doStuff('hello');
    doStuff(true);
    doStuff({});
    console.log('[Ejercicio 4.1]');
}
