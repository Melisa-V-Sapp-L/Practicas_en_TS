/*
Ejercicio 2.4
Dado el siguiente codigo:
1 const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
2
3 function flatten(array) {
4 const flattened = [];
5
6 for (const element of array) {
7 if (Array.isArray(element)) {
8 element; // any[]
9 flattened.push(...element);
10 } else {
11 element; // any
12 flattened.push(element);
13 }
14 }
15
16 return flattened;
17 }
18
19 const flattenedNumbers = flatten(numbers);
20
21 console.log('[Ejercicio 4.3]', flattenedNumbers);

1 Añadir anotaciones de tipo (‘any‘ excluido)
2 Inspeccione el tipo de ‘element‘ en diferentes ramas de código
3 Bonificación: convertir ‘flatten‘ en una función genérica
*/
function exercise10() {
    var numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
    function flatten(array) {
        var flattened = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var element = array_1[_i];
            if (Array.isArray(element)) {
                element;
                flattened.push.apply(flattened, element);
            }
            else {
                element;
                flattened.push(element);
            }
        }
        return flattened;
    }
    var flattenedNumbers = flatten(numbers);
    console.log('[Ejercicio 4.3]', flattenedNumbers);
}
