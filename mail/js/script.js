const email = ['qwe@gmail.com','asd@gmail.com','zxc@gmail.com','ewq@gmail.com','das@gmail.com','czx@gmail.com'];
let userEmail = prompt('Inserire l\'email');

if(email.includes(userEmail)){
    alert('Sei nella lista!');
}else{
    alert('Non sei nella lista!');
}