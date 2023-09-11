/*
Ejercicio 2.5
Dado el siguiente codigo:
1 interface EggLayer {
2 layEggs(): void;
3 }
4
5 interface Flyer {
6 fly(height: number): void;
7 }
8
9 interface Swimmer {
10 swim(depth: number): void;
11 }
12
13 // agregar alias de tipo(s) aqui
14
15 class Bird implements BirdLike {
16 constructor(public species: string) { }
17
18 layEggs(): void {
19 console.log('Poniendo huevos de aves.');
20 }
21
22 fly(height: number): void {
23 console.log(`Volando a la altura de ${height} metros.`);
24 }
25 };
26
27 class Fish implements FishLike {
28 constructor(public species: string) { }
29
30 layEggs(): void {
31 console.log('Poniendo huevos de pescado.');
32 }
33
34 swim(depth: number): void {
35 console.log(`Nadando a una profundidad de ${depth} metros.`);
36 }
37 }
38
39 function getRandomAnimal() {
40 const animals = [
41 new Bird('puffin'),
42 new Bird('kittiwake'),
43 new Fish('sea robin'),
44 new Fish('leafy seadragon'),
45 ];
46
47 return animals[Math.floor(Math.random() * animals.length)];
48 }
49
50 function interrogateAnimal(animal = getRandomAnimal()) {
51 animal.swim(10) // se llama solo si es un pez
52 animal.fly(10); // se llama solo si es un pajaro
53
54 return animal.species;
55 }
56
57 console.log('[Ejercicio 4.4]',
58 `Tenemos un ${interrogateAnimal()} en nuestras manos!`);

1 Las aves y los peces ponen huevos. Sólo los pájaros vuelan. Sólo los peces nadan. Defina
dos tipos nuevos: ‘BirdLike‘ y ‘FishLike‘ basados en estos rasgos
2 Crea un alias de tipo para ‘Bird OR Fish‘ llamado ‘Animal‘
3 Use ‘instanceof‘ en ‘interrogateAnimal‘ para permitir a los peces nadar y a los pájaros
volar
4 Agregue cualquier anotación de tipo faltante, siendo lo más explícito posible
*/
function exercise11() {
    // agregar alias de tipo(s) aqui
    var Bird = /** @class */ (function () {
        function Bird(species) {
            this.species = species;
        }
        Bird.prototype.layEggs = function () {
            console.log('Poniendo huevos de aves.');
        };
        Bird.prototype.fly = function (height) {
            console.log("Volando a la altura de ".concat(height, " metros."));
        };
        return Bird;
    }());
    ;
    var Fish = /** @class */ (function () {
        function Fish(species) {
            this.species = species;
        }
        Fish.prototype.layEggs = function () {
            console.log('Poniendo huevos de pescado.');
        };
        Fish.prototype.swim = function (depth) {
            console.log("Nadando a una profundidad de ".concat(depth, " metros."));
        };
        return Fish;
    }());
    function getRandomAnimal() {
        var animals = [
            new Bird('puffin'),
            new Bird('kittiwake'),
            new Fish('sea robin'),
            new Fish('leafy seadragon'),
        ];
        return animals[Math.floor(Math.random() * animals.length)];
    }
    function interrogateAnimal(animal) {
        if (animal === void 0) { animal = getRandomAnimal(); }
        animal.swim(10); // se llama solo si es un pez
        animal.fly(10); // se llama solo si es un pajaro
        return animal.species;
    }
    console.log('[Ejercicio 4.4]', "Tenemos un ".concat(interrogateAnimal(), " en nuestras manos!"));
}
