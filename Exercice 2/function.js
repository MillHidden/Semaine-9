$liste = document.getElementById("liste");
$texte = document.getElementById("texte");
$ajouter = document.getElementById("ajouter");
$annuler = document.getElementById("annuler");

tableau = [
    "Bob",
    "Julien",
    "Roger"
    ];

function afficherListe() {
    elem = "";
    for (i = 0; i < tableau.length; i++) {
        elem += "<li>" + tableau[i] + "</li>";
    }
    $liste.innerHTML = elem;
}

function ajouterElement() {
    tableau.push($texte.value);
    afficherListe();
}

function annulerElement() {
    tableau.pop();
    afficherListe();
}


afficherListe();
$ajouter.onclick = ajouterElement;
$annuler.onclick = annulerElement;
