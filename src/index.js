import cipher from './cipher.js';



document.getElementById("botonCuadro").onclick = cifra


 /////////////
function cifra (){
    let i = 0               //contador
    let cajaTexto = document.getElementById("cuadrotxt").value;      //valor del input
    let offset = Number(document.getElementById('quantity').value);  // valor del offset
    let resulta = ''        //mensaje cifrado a mostrar

    while(i < cajaTexto.length){
        
        let chara = cajaTexto.slice(i, i +1);
        let charaASCII = Number(chara.charCodeAt());
        
            if (charaASCII != 32){
           
            let formula = cipher.encode(offset, charaASCII);
            let newChara = String.fromCharCode(formula);
            
            resulta += newChara
            i ++
    
                
            } else {
               
                let newChara = ' ';
                    resulta += newChara 
                    i ++
    
                if (i == cajaTexto.length){
                    document.getElementById('zzb').innerHTML = resulta
                }
            }
    }
}

///////////////// DESCIFRADO //////////////////////////

document.getElementById("botonCuadro2").onclick = descifra


 /////////////
function descifra (){
    let j = 0               //contador
    let cajaTexto = document.getElementById("cuadrotxt2").value;      //valor del input
    let offset = Number(document.getElementById('quantityTwo').value);  // valor del offset
    let resulta = ''        //mensaje descifrado a mostrar

    while(j < cajaTexto.length){
        
        let chara = cajaTexto.slice(j, j +1);
        let charaASCII = Number(chara.charCodeAt());
            if (charaASCII != 32){
           
            let formula = cipher.decode(offset, charaASCII);
            let newChara = String.fromCharCode(formula);
            
            resulta += newChara
            j ++
    
                if (j == cajaTexto.length){
                    document.getElementById('traduc2').innerHTML = resulta
                }
            } else {
               
                let newChara = ' ';
                    resulta += newChara 
                    j ++
    
                if (j == cajaTexto.length){
                    document.getElementById('zzb').innerHTML = resulta
                }
            }       
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


