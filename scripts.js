const boxExample = document.getElementById("gen-1");

boxExample.innerHTML = "Generasión 1 Pokimon"

console.log("1. Titulo", boxExample);

const todosPok = document.querySelectorAll(".infocard");
for (let i = 0; i <= 150; i++) {
    todosPok[i].style.backgroundColor = "red"
};

console.log("2. Cambio de fondo", todosPok);

const URLactual = window.location;

console.log("3. URL pagina", URLactual);

const dominio = window.location.host;

console.log("4. Dominio pagina", dominio);

console.log( "5. Nodos de imagen", document.getElementsByTagName("img"));

const imagesPok = document.images;
for (let i = 0; i < imagesPok.length; i++) {
    imagesPok[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
};
console.log("6. Sustituir imagenes", imagesPok);

//const pokTest = document.querySelectorAll("span.infocard-lg-data.text-muted a[class='itype flying']");
//const pok = document.querySelectorAll("span.infocard-lg-data.text-muted");

//for (let i = 0; i <= pok.length; i++) {
  //  console.log(pok[i].className);
    //if (pok[i].getElementsByClassName('itype flying'))
    //pok[i].style.backgroundColor = "blue"
//};



