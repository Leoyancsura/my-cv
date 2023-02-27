//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        //si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    } 
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

//ocultar menu una vez seleccionada una seccion
let links = document.querySelectorAll("nav a");
for(var x=0; x<links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Se crean las barras de carga para cada nivel de habilidad identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//Selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let csharp = document.getElementById("csharp");
crearBarra(csharp);
let phyton = document.getElementById("phyton");
crearBarra(phyton);
let autocad = document.getElementById("autocad");
crearBarra(autocad);
let rhino = document.getElementById("rhino");
crearBarra(rhino);



let contadores = [-1,-1,-1,-1,-1,-1];

let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintaBarra(html, 16, 0, intervalHtml);
        },100);
    }
}

function pintaBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }
else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}