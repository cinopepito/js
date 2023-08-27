let circle = document.getElementById('circle');
let circle2 = document.getElementById('circle2');
let compteur = 0;
function sus(){
    compteur -=1;
    console.log(compteur,'compteur apres decrementation');
}
function add(){
    compteur +=1;
    console.log(compteur,'compteur apres incrementation');
}
circle.addEventListener('click',function(){
    sus();
})
circle2.addEventListener('click',function(){
    add();
})

