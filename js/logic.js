const Tema1 = {
    fondo: "hsl(222, 26%, 31%)",
    colorFondo: "white",
    pantalla: "hsl(223, 31%, 20%)",
    colorPantalla: "white",
    selector: "red",
    noSelector: "hsl(223, 31%, 20%)",
    fondoSelector: "hsl(223, 31%, 20%)",
    fondoTeclado: "hsl(223, 31%, 20%)",
    fondoNumeros: "hsl(0, 0%, 94%)",
    colorNumeros: "hsl(221, 14%, 31%)",
    sombraNumeros: "gray",
    fondoBorrar: "hsl(225, 21%, 49%)",
    colorBorrar: "white",
    sombraBorrar: "hsl(224, 28%, 35%)",
    fondoResultado: "hsl(6, 63%, 50%)",
    colorResultado: "white",
    sombraResultado: "hsl(6, 70%, 34%)"
}

const Tema2 = {
    fondo: "hsl(0, 0%, 90%)",
    colorFondo: "hsl(60, 10%, 19%)",
    pantalla: "hsl(0, 0%, 93%)",
    colorPantalla: "hsl(25, 98%, 40%)",
    selector: "hsl(25, 98%, 40%)",
    noSelector: "hsl(0, 5%, 81%)",
    fondoSelector: "hsl(0, 5%, 81%)",
    fondoTeclado: "hsl(0, 5%, 81%)",
    fondoNumeros: "hsl(45, 7%, 89%)",
    colorNumeros: "hsl(60, 10%, 19%)",
    sombraNumeros: "hsl(35, 11%, 61%)",
    fondoBorrar: "hsl(185, 42%, 37%)",
    colorBorrar: "white",
    sombraBorrar: "hsl(185, 58%, 25%)",
    fondoResultado: "hsl(25, 98%, 40%)",
    colorResultado: "white",
    sombraResultado: "hsl(25, 99%, 27%)"
}

const Tema3 = {
    fondo: "hsl(268, 75%, 9%)",
    colorFondo: "hsl(52, 100%, 62%)",
    pantalla: "hsl(268, 71%, 12%)",
    colorPantalla: "hsl(52, 100%, 62%)",
    selector: "hsl(176, 100%, 44%)",
    noSelector: "hsl(268, 71%, 12%)",
    fondoSelector: "hsl(268, 71%, 12%)",
    fondoNumeros: "hsl(268, 47%, 21%)",
    colorNumeros: "hsl(52, 100%, 62%)",
    sombraNumeros: "hsl(285, 91%, 52%)",
    fondoBorrar: "hsl(281, 89%, 26%)",
    colorBorrar: "white",
    sombraBorrar: "hsl(285, 91%, 52%)",
    fondoResultado: "hsl(176, 100%, 44%)",
    colorResultado: "hsl(198, 20%, 13%)",
    sombraResultado: "hsl(177, 92%, 70%)"
}

function cambiarTema(tema){
    cambiarFondos(tema);
    cambiarBotones(tema);
    cambiarTextos(tema);
}

function cambiarBotones(tema){
    let botones = document.getElementsByClassName("number");
    for (const boton of botones) {
        boton.style.backgroundColor = tema.fondoNumeros;
        boton.style.color = tema.colorNumeros;
        boton.style.boxShadow = `0 5px ${tema.sombraNumeros}`;
    }
    let borradores = document.getElementsByClassName("del");
    for (const borrador of borradores){
        borrador.style.backgroundColor = tema.fondoBorrar;
        borrador.style.color = tema.colorBorrar;
        borrador.style.boxShadow = `0 5px ${tema.sombraBorrar}`;
    }
    let resultado = document.getElementById("solve");
    resultado.style.background = tema.fondoResultado;
    resultado.style.color = tema.colorResultado;
    resultado.style.boxShadow = `0 5px ${tema.sombraResultado}`;
}

function cambiarFondos(tema){
    let cuerpo = document.getElementById("cuerpo");
    cuerpo.style.backgroundColor = tema.fondo;
    let pantalla = document.getElementById("result");
    pantalla.style.backgroundColor = tema.pantalla;
    let toggler = document.getElementById("toggler");
    toggler.style.backgroundColor = tema.fondoSelector;
    let selectores = document.getElementsByClassName("reidio");
    for (const selector of selectores) {
        if (selector.checked == true){
            selector.style.backgroundColor = tema.selector;
        } else {
            selector.style.backgroundColor = tema.noSelector;
        }
    }
    
}

function cambiarTextos(tema){
    let spans = document.getElementsByClassName("nidea")
    for (const span of spans) {
        span.style.color = tema.colorFondo;
    }
}


function display(val){
    document.getElementById('result').value += val;
    return val;
}

function solve(){
    let ecuacion = document.getElementById("result").value;
    let resultado = eval(ecuacion);
    document.getElementById("result").value = resultado;
    return resultado;
}

function clearAll(){
    document.getElementById("result").value = "";
}


