/* Ejercicio 1.5
Dado el siguiente codigo:
1 Añadir anotaciones de tipo (lo más explícitas posible)
2 Solucionar errores (si corresponde)
1 const secuencia = Array.from(Array(10).keys());
2 const animales = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
3 const cadenasYNumeros = [1, 'uno', 2, 'dos', 3, 'tres'];
4 const todosMisArreglos = [secuencia, animales, cadenasYNumeros];
5
6 console.log('Ejercicio 1.5', todosMisArreglos); */

/* mirar despues */

function exercise5 () {

    
    let animales: any = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
    let cadenasYNumeros: any  = [1, 'uno', 2, 'dos', 3, 'tres'];
    let todosMisArreglos = [animales, cadenasYNumeros];
    
    console.log('Ejercicio 1.5', todosMisArreglos);   
}