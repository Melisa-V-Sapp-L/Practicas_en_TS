let Ejer1 = ['', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '2.1', '2.2', '2.3', '2.4','2.5', '3.1', '3.2', '3.3', '3.4','3.5', '3.6', '3.7', '4.1', '4.2', '4.3', '4.4','4.5', '4.6', '5.1', '5.2', '5.3', '5.4'];


document.write('<h1 class="display-1">Tipos básicos</h1>');

for (let i = 1 ; i <= 6; i++) {
    document.write('<p><strong> Ejercicio ' + Ejer1[i]+ '.</strong></p>');
    document.write('<div class="input-group mb-3"><input type="text" class="form-control" placeholder="..." id="box'+[i]+'"><button class="btn btn-outline-warning" type="button" id="button-addon2" onclick="exercise'+[i]+'(this.value)">Do it</button></div>');   
}

document.write('<h1 class="display-1">Tipos</h1>');
for (let i = 7 ; i <= 11; i++) {
    document.write('<p><strong> Ejercicio ' + Ejer1[i]+ '.</strong></p>');
    document.write('<div class="input-group mb-3"><input type="text" class="form-control" placeholder="..." id="box'+[i]+'"><button class="btn btn-outline-danger" type="button" id="button-addon2" onclick="exercise'+[i]+'(this.value)">Do it</button></div>');   
}

document.write('<h1 class="display-1">Funciones</h1>');
for (let i = 12 ; i <= 18; i++) {
    document.write('<p><strong> Ejercicio ' + Ejer1[i]+ '.</strong></p>');
    document.write('<div class="input-group mb-3"><input type="text" class="form-control" placeholder="..." id="box'+[i]+'"><button class="btn btn-outline-primary" type="button" id="button-addon2" onclick="exercise'+[i]+'(this.value)">Do it</button></div>');   
}

document.write('<h1 class="display-1">Clases</h1>');
for (let i = 19 ; i <= 24; i++) {
    document.write('<p><strong> Ejercicio ' + Ejer1[i]+ '.</strong></p>');
    document.write('<div class="input-group mb-3"><input type="text" class="form-control" placeholder="..." id="box'+[i]+'"><button class="btn btn-outline-success" type="button" id="button-addon2" onclick="exercise'+[i]+'(this.value)">Do it</button></div>');   
}

document.write('<h1 class="display-1">Interfaces</h1>');
for (let i = 25 ; i <= 28; i++) {
    document.write('<p><strong> Ejercicio ' + Ejer1[i]+ '.</strong></p>');
    document.write('<div class="input-group mb-3"><input type="text" class="form-control" placeholder="..." id="box'+[i]+'"><button class="btn btn-outline-info" type="button" id="button-addon2" onclick="exercise'+[i]+'(this.value)">Do it</button></div>');   
}