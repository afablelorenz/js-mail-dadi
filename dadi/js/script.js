document.querySelector('#giocare').addEventListener('click',function(){
    const numUtente=Math.floor(Math.random()*6)+1;
    const numComputer=Math.floor(Math.random()*6)+1;
    if(numUtente>numComputer){
        alert('Hai vinto!');
        console.log(numUtente,numComputer);
    }else if(numUtente<numComputer){
        alert('Hai perso!');
        console.log(numUtente,numComputer);
    }else{
        alert('Pareggio!');
        console.log(numUtente,numComputer);
    }
});