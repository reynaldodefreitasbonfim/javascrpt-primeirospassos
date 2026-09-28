//var meutitulo = document.getElementById("titulo");
//meutitulo.innerHTML =`seja bem vindo ${prompt("digite seu nome")}`;


//function pulalinha(){
//document.write("<br><br>")


//document.write("reynaldo");
//pulalinha()
//document.write("sou klack de ti");
//document.write("esse cara sou eu");//

//var meutitulo = document.getElementById("titulo");
//meubalcktitulo.innerhtml = `seja bem vindo`;
//meutitulo.style.color = " red ";//
var meutitulo = document.getElementById("titulo");
let botaosimples = document.getElementById("simples");
let modoescuroativado = false;

botaosimples.onclick = trocaclasse 
function trocaclasse()  {
   if (modoescuroativado == true) {
    meutitulo.classList.remove("modoescuro");
    meutitulo.classList.add("modoclaro");

    modoescuroativado = false;
   } else {
    meutitulo.classList.remove("modoclaro");
    meutitulo.classList.add("modoescuro");
    modoescuroativado = true;
   }

    

}