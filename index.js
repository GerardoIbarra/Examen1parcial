function datos(){
document.getElementById("iddatos").style.background= '#5e81ac';  

}
function proceso() {
    document.getElementById("idprocesos").style.background= '#e3fafc';  

}
function relleno() {
    document.getElementById("idrelleno").style.background= '#18c354';  
}
function imagen() {
    document.getElementById("p1").style.display="block";  
    document.getElementById("p3").style.display="block";  
    document.getElementById("p4").style.display="block";  
    document.getElementById("p2").style.display="block";  
    document.getElementById("p5").style.display="block";  
}
 let i = 1;
 const salidafrutas = document.getElementById("salidaFrutas");


document.getElementById("alert").addEventListener("click", () => {
    let knowprograma = prompt("Elijela categoria de frutas: 1-Dulces 2-Acidad 3-Neutras");
    if (knowprograma == 1) {
         //txt = "You pressed OK!";
         let fruta = prompt("Ingrese el numero de frutas dulce a ingresar ");
         if (i <= fruta) {
             let arrfruta = []
             i++;
             for (j = 0; j < fruta; j++) {
                arrfruta.push(prompt("Ingrese el nombre de la fruta: "))
             }
             arrfruta.sort()
             salidafrutas.innerHTML = "<ul>"
             for (let k = 0; k < fruta; k++) {
              salidafrutas.innerHTML +=`<li>${arrfruta[k]}<li>`
          }
          salidafrutas.innerHTML+='</ul>'
            //alert(`The colors are:  ${arrcolor}`);
        
            }
         }
         if(knowprograma == 2){
            let fruta = prompt("Ingrese el numero de frutas acida a ingresar ");
            if (i <= fruta) {
                let arrfruta = []
                i++;
                for (let j = 0; j < fruta; j++) {
                   arrfruta.push(prompt("Ingrese el nombre de la fruta: "))
                }
                   arrfruta.sort()
                   salidafrutas.innerHTML = "<ul>"
                   for (let k = 0; k < fruta; k++) {
                    salidafrutas.innerHTML +=`<li>${arrfruta[k]}<li>`
                }
                salidafrutas.innerHTML+='</ul>'
               //alert(`The colors are:  ${arrcolor}`);
   

         }
        }
        if(knowprograma==3){

            let fruta = prompt("Ingrese el numero de frutas neutra a ingresar ");
            if (i <= fruta) {
                let arrfruta = []
                i++;
                for (j = 0; j < fruta; j++) {
                   arrfruta.push(prompt("Ingrese el nombre de la fruta: "))
                }
                   arrfruta.sort()
                   salidafrutas.innerHTML = "<ul>"
                   for (let k = 0; k < fruta; k++) {
                    salidafrutas.innerHTML +=`<li>${arrfruta[k]}<li>`
                }
                salidafrutas.innerHTML+='</ul>'
               //alert(`The colors are:  ${arrcolor}`);
   
        }
    }

})

function idrelleno() {
    document.getElementById("p6").style.display="block";  

}

 // document.getElementById("textloquevaapostar").innerHTML=" ";