let arrayVuoto = [];

for(let i=0;i<6;i++){
    let numUtente;
    numUtente=Number.parseInt(prompt('Type a number'));
    if(numUtente % 2 == 0){
        arrayVuoto.push(numUtente);
    }else{
        console.log('odd number detected: '+numUtente);
    }
    
}
console.log(arrayVuoto);