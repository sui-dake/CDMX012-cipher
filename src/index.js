import cipher from './cipher.js';



document.getElementById("botonCuadro").onclick = cifra


 /////////////
function cifra (){
                //contador
    let cajaTexto = (document.getElementById("cuadrotxt").value);      //valor del input
    let offset = parseInt(document.getElementById('quantity').value);  // valor del offset
           //mensaje cifrado a mostrar
    
    if (cajaTexto.length != 0){
        document.getElementById('traduc').innerHTML = cipher.encode(offset, cajaTexto);
    }
}

   

///////////////// DESCIFRADO //////////////////////////

document.getElementById("botonCuadro2").onclick = descifra


 /////////////
function descifra (){
   //contador
    let cajaTexto = document.getElementById("cuadrotxt2").value;      //valor del input
    let offset = parseInt(document.getElementById('quantityTwo').value);  // valor del offset
       //mensaje descifrado a mostrar
       if (cajaTexto.length != 0){
           document.getElementById('traduc2').innerHTML = cipher.decode(offset,cajaTexto);
        }
}






//s = string a encriptar, t = valor de offset
//function caesarC (s, t) {
  //  const charasM = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    //let ascii = [];
    //const resuelto = [];
    //for(let i = 0; i<s.length; i++){
      //  ascii = charasM.charCodeAt (i);
                
        //for(let j =0; j<charasM.length; j++){
        //if(s[i]=== charasM[j]){
         //   resuelto.push(String.fromCharCode());
        //}
     //}
    //}
    //return resuelto.join('');
 //}
//cifr ('ABC');

 //function caesar () {
	//if (codificar = string){
	//	console.log (b2.value + StringfromCharCode(b2.value$0))}
//}


