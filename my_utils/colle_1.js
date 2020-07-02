function newElement() {
    /*-----Créez un nouvel élément de liste en cliquant sur le bouton "Ajouter"------*/
    var li = document.createElement("li");//Crée un élément li a chaque click
    var valeurEntrée = document.getElementById("monEntrée").value;//Crée un nouvel élément d'entrée
    var ul = document.createTextNode(valeurEntrée);//Crée un nouveau nœud de texte dans mon entrée.
    li.appendChild(ul);//ajoute un nœud à la fin de la liste des enfants d'un nœud parent spécifié.
    if (valeurEntrée === '') {//Si la valeur d'entrée est inexistante cela envéra un alert
        alert("Vous devez écrire quelque chose!");
    } else {//Sinon celà affichera le texte écrit dans le li crée.
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("monEntrée").value = "";
    var span = document.createElement("SPAN");//création d'un elément span.
    var txt = document.createTextNode("\u00D7");//Crée un noeuds de text X.
    span.className = "close";
    span.appendChild(txt);//ajoute X à chacun de mes span.
    li.appendChild(span);//ajoute span a chacun des li.

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
// Cliquez sur un bouton de fermeture pour suprimer l'élément de liste actuel
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
} 
