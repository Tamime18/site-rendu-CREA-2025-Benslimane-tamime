// Récupère la balise <header> dans le document
const header = document.querySelector("header");

// Ajoute un écouteur d'événement au défilement de la fenêtre (scroll)
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 120);
    // Ajoute ou retire la classe "sticky" sur l'élément <header>
    // en fonction du décalage vertical de la page (scrollY).
    // Si on a défilé de plus de 120 pixels, "sticky" est ajouté, sinon retiré.
});

// Récupère l'élément HTML qui a pour id "menu-icon"
let menu = document.querySelector("#menu-icon");
// Récupère l'élément HTML qui a pour classe "navlist"
let navlist = document.querySelector('.navlist');

// Déclenche une action lors du clic sur l'icône de menu
menu.onclick = () => {
    // Ajoute ou retire la classe "bx-x" sur l'icône du menu
    // (souvent utilisé pour faire passer l'icône "hamburger" en croix)
    menu.classList.toggle('bx-x');

    // Ajoute ou retire la classe "active" sur la liste de navigation
    // (pour l'afficher ou la masquer dans la version mobile, par exemple)
    navlist.classList.toggle('active');
}

// Réagit au défilement de la page
window.onscroll = () => {
    // Attention : Ceci semble être une erreur ! 
    // La syntaxe "menu.remove.toggle('bx-x')" n'existe pas. 
    // Probablement on voulait écrire :
    
    // menu.classList.remove('bx-x');
    // navlist.classList.remove('active');

    menu.remove.toggle('bx-x');      // <-- Erreur potentielle
    navlist.remove.toggle('active'); // <-- Erreur potentielle
}
