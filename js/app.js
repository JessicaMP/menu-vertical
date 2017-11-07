/*Métodos para seleccionar elementos del DOM (Nodod del tipo 1)
document.getElementById() // Nodo de tipo elemento que coincida con el id indicado
document.getElementsByTagName() // Colección de elementos de HTML
document.getElementsByClassName() // Colección de elementos de HTML
document.querySelector() // Primer elemento que cumpla la condición
document.querySelectorAll() // Todos los elementos que cumpla la condición
*/

/*
var title = document.getElementById("title");
console.log(title);
console.log(title.firstChild);

var linksList = document.getElementsByTagName("a");
console.log(linksList);
console.log(linksList[0]);
console.log(linksList[0].firstChild);

var itemsList = document.getElementsByClassName("item");
console.log(itemsList);
console.log(itemsList[4]);
console.log(itemsList[4].firstElementChild);
console.log(itemsList[4].firstElementChild.firstChild);
*/

var title = document.querySelector("#title");
console.log(title);
console.log(title.firstChild);

var navbar = document.querySelector("#navbar");
console.log(navbar);

var item = document.querySelector(".item");
console.log(item);

var listItem = document.querySelectorAll(".item");
console.log(listItem);
