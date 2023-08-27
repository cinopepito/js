// portee des variables
const globale ='ceci est une variable globale auquel on peut acceder quelque soit la position geographique que nous avons';
console.log(globale);

function scope(){
    const locale = "ceci est une variable locale";
    console.log(locale,'depuis la fonction');
    console.log(globale);
}
// Appel de la fonction
scope();

// global access
console.log(globale);
// local access
console.log(locale,'en dehors de la fonction'); 