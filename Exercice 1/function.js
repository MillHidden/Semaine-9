$liste = document.getElementById("liste");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$numero = document.getElementById("numero");
$ajouter = document.getElementById("ajouter");

$nomRecherche = document.getElementById("nomRecherche");
$actionRecherche = document.getElementById("actionRecherche");

$result= document.getElementById("result");

contacts = [{
    prenom: "Julien",
    nom: "Grillot",
    numero: "0123456789"
}, {
    prenom: "John",
    nom: "Smith",
    numero: "0123456789"
}];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.numero + ")";
}

function afficherListe() {
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        numero: $numero.value
    });
    afficherListe();
}

function rechercher() {
    
    recherche = $nomRecherche.value;
    elem = "";
    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].nom === recherche) {
            elem += "<li>" + texteContact(contacts[i]) + "</li>";
        }
     $result.innerHTML = elem;
    }    
}

afficherListe();

$ajouter.onclick = ajouter;
$actionRecherche.onclick = rechercher;