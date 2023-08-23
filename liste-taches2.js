"use strict";

let taches = {
    };

let compteur= 101;

function initialiserPage() {
    console.log(taches)
    //taches = {};
    rafrechirTableTaches();
}

function ajouterTache(form) {
    let t ={};
    t.nom =form.nom.value;

    t.date=form.limite.value;
    t.importance=form.importance.value;

    t.duree=form.duree.value;

    t.desc=form.description.value;

    t.ouverture =true;
    //les mettres dans taches 
    taches["T"+compteur] = t;
    console.log (taches);
    form.nom.value = null;
    form.limite.value = null;
    form.duree.value = null;
    rafrechirTableTaches()
    return false;
}

function rafrechirTableTaches() {
    let s =`<tr id="T"${compteur}>`;
    for(let i in taches) {
        if(taches[i].ouverture) {
        s += `<td>${taches[i].nom}</td><td>${taches[i].date}</td><td>${taches[i].importance}</td><td>${taches[i].duree}</td><td>oui</td><td><button id="B_C_T${compteur}" onclick="cloturerTache(this)">cloturer</button></td></tr>`;
        }
        else {
            s += `<td>${taches[i].nom}</td><td>${taches[i].date}</td><td>${taches[i].importance}</td><td>${taches[i].duree}</td><td>non</td><td><button id="B_C_T${compteur}" onclick="cloturerTache(this)">cloturer</button></td></tr>`;
        }
    }


    gid("tbodyTaches").innerHTML = s;
}
function cloturerTache(button) {
    let b = (button.id).substring(4);
    taches[b].ouverture = false;
    rafrechirTableTaches();
}