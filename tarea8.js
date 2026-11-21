function sumapares(){

 let suma = 0

  for(let i=0; i<101;i+=2) {
  console.log("i"+i +" ");
    

  suma=suma + i
  
  }
  console.log("suma "+suma);

  

  

}

function tablamultiplicar(){
  
let i= prompt("dame un numero");
i=Number(i);
for(let j=0;j<11;j++){
    mult =i*j;
    console.log(`${i}x${j} = ${mult}`);
 
  }
}

function contarvocales(){
    let frase= prompt("dime una frase no muy larga");
    let a=["a","e","i","o","u","A","E","I","O","U","á","é","í","ó","ú","Á","É","Í","Ó","Ú"];
    let contador=0
    for(let i=0;i<frase.length;i++){
      for(let v=0;v<a.length;v++){

          if(frase[i]===a[v]){
            contador=contador+1;
            
        
        
        }
      }
    }
    console.log("la frase/palabra tiene " +contador);

}
contarvocales();

function Fibbonacci(){

}
