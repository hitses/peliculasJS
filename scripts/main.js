import films from './films.js';

window.addEventListener('load', () => {
   console.log('document loaded');
   let body = document.querySelector('body');

   let paragraphElement = document.createElement('h1');
   paragraphElement.innerText = 'Soy Jero.'
   body.appendChild(paragraphElement);

   let listaElemento = document.querySelector('#numeros');
   console.log(listaElemento);

   for (let i = 0; i < 10; i++){
     let li = document.createElement('li');
     li.innerText = i;
     listaElemento.appendChild(li);
   }

   //////////
   let nombre = 'Jero';
   console.log(`Hola, soy ${nombre}. Encantado`);

   let personas = [
     {
       nombre: 'Jero',
       edad: 28,
     },
     {
       nombre: 'David',
       edad: 22,
     }
   ];

   /* let divPersonas = document.querySelector('#personas');
   personas.forEach((persona) => {
     let divPersona = document.createElement('div');
     let parrafoNombre = document.createElement('p')
     parrafoNombre.innerText = 'Nombre: ' + persona.nombre;
     let parrafoEdad = document.createElement('p')
     parrafoEdad.innerText = 'Edad: ' + persona.edad;

     divPersona.appendChild(parrafoNombre);
     divPersona.appendChild(parrafoEdad);

     divPersonas.appendChild(divPersona);
   }) */

   let divPersonas = document.querySelector('#personas');
   personas.forEach((persona) => {
     let divPersona = document.createElement('div');
     divPersona.innerHTML = `
     <p>Nombre: ${persona.nombre}</p>
     <p>Edad: ${persona.edad}</p>`

     divPersonas.appendChild(divPersona);
   })
})
console.log('Funciona');