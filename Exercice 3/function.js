$liste = document.getElementById("liste");
$supprimer = document.getElementById("supprimer");
$restaurer = document.getElementById("restaurer");

function selectionne(e) {
    // e.target correspond au <li> qui a été cliqué dans le <ul> !
    e.target.classList.toggle("selected");
}

function supprimer () {
    listLi = $liste.children;
    for (i = 0; i < listLi.length; i++) {
        if (listLi[i].className == "selected") {
            listLi[i].classList.toggle("hidden");
        }
    }
}

function restaurer () {
    listLi = $liste.children;
    for (i = 0; i < listLi.length; i++) {
        if (listLi[i].className == "hidden") {
            listLi[i].hidden['visibility'] ='visible';
        }
    }
}

$liste.onclick = selectionne;

$supprimer.onclick = supprimer;
$restaurer.onclick = restaurer;