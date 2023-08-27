//function with parameter
//fuunction is a block of code that we can reuse more and more
//parameter is used to put information in the function to change the value of the block of code.
function temps(meteo){
    console.log('aujourd\'hui il fait ' + meteo);
}
temps('beau');
temps('pluvieux');

let titre = document.getElementById('titre');
console.log(titre);
titre.innerText = 'Mon nouveau titre';