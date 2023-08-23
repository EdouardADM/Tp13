"use strict";

let taches = {
    T105:{nom:'cadeaux', date: '2017-12-23', importance:'top', duree:'1', desc:'', ouverture: true}
};

let compteur= 101;

function initialiserPage() {
    console.log(taches)
    //taches = {};
    rafrechirTableTaches();
}

function ajouterTache(form) {
    /*let obj = {};
    //recupere les données
    obj.nom  = form.nom.value;
    obj.date = form.limite.value;
    obj.improtance = form.improtance.value;
    obj.duree = parseFloat(form.duree.value);
    obj.desc = form.description.value;
    obj.ouverture = true;*/
    let t ={};
    t.nom =form.nom.value;

    t.date=form.limite.value;
    t.importance=form.importance.value;

    t.duree=form.duree.value;

    t.desc=form.description.value;

    t["ouverte"] =true;
    //les mettres dans taches 
    taches["T"+compteur] = t;
    console.log (taches);
    rafrechirTableTaches()
    return false;
}

function rafrechirTableTaches() {
    let s ="<tr>";
    for(let i in taches) {
        if(taches[i].ouverture) {
        s += `<td>${taches[i].nom}</td><td>${taches[i].date}</td><td>${taches[i].importance}</td><td>${taches[i].duree}</td><td>oui</td></tr>`;
        }
        else {
            s += `<td>${taches[i].nom}</td><td>${taches[i].date}</td><td>${taches[i].importance}</td><td>${taches[i].duree}</td><td>non</td></tr>`;
        }
    }


    document.getElementById("tbodyTaches").innerHTML = s;
}