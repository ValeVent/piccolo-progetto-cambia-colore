//CACHE DEL DOM (recupero elementi che mi occorrono)

const cerchioObj = document.querySelector("#cerchio");

const bottoni = document.querySelector("#buttons");
const rosaBtn = document.querySelector("#rosa");
const verdeBtn = document.querySelector("#verde");
const msgParag = document.querySelector (".msg");



bottoni.addEventListener("click", function (e){
    cerchioObj.style.backgroundColor= e.target.value;
    msgParag.innerText="Il cerchio è diventato " + e.target.innerText;
});