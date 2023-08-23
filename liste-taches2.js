"use strict";

let taches = {
    //T101:{nom:'Bite', date:'2017-12-12', importance:'cool', duree:6, desc:'', ouverture: true},
    };

let compteur= 101;

let ajustementsDurees = {
    top : 1.5,
    cool : 1.3,
    bof : 1.1
}

function initialiserPage() {
    console.log(taches)
    rafrechirTableTaches();
    gid("zoneFiltre").innerHTML = 
    `<input type="radio" id="filtreTaches1" name="filtreTaches" value="ouvertes" onChange="rafrechirTableTaches()" checked>
    <label for="filtreTaches1">Ouvertes</label>
    <input type="radio" id="filtreTaches2" name="filtreTaches" value="toutes" onChange="rafrechirTableTaches()">
    <label for="filtreTaches2">Toutes</label>`;
    
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
    compteur= 101;
    let s ="";
    for(let i in taches) {
        if(taches[i].ouverture) {
            s += `<tr id=${"T"+compteur} class="ouvert"><td>${taches[i].nom}</td><td>${taches[i].date}</td><td>${taches[i].importance}</td><td>${taches[i].duree}</td><td>oui</td><td><button id="B_C_T${compteur}" onclick="cloturerTache(this)">cloturer</button></td></tr>`;
        }
        else {
            s += `<tr id=${"T"+compteur} class="cloturee"><td>${taches[i].nom}</td><td>${taches[i].date}</td><td>${taches[i].importance}</td><td>${taches[i].duree}</td><td>non</td><td><button id="B_C_T${compteur}" onclick="ouvrirTache(this)">ouvrir</button></td></tr>`;
        }
        compteur++;
    }


    gid("tbodyTaches").innerHTML = s;
    calculerDureeTotaleTaches();
    //let e = document.querySelector("#zoneFiltre input[name=filtreTaches]:checked").value
    //console.log(e);
    for(let i in taches) {
        if(taches[i].ouverture === false) {
            //let clo = document.querySelector(".cloturee");
            i.style.display = "none";
        }
    }
}


function cloturerTache(button) {
    let b = button.id;
    let bb = b.slice(-4);
    taches[bb].ouverture = false;
    rafrechirTableTaches();
}

function ouvrirTache(button) {
    let b = button.id;
    let bb = b.slice(-4);
    taches[bb].ouverture = true;
    rafrechirTableTaches();
}

function calculerDureeTotaleTaches() {
    let tot = 0;
    for(let i in taches) {
        if(taches[i].ouverture === true) {
            if(taches[i].importance === "top"){
                tot += +(taches[i].duree * 1.5)
            }
            else if(taches[i].importance === "cool"){
                tot += +(taches[i].duree * 1.3)
            }
            else{
                tot += +(taches[i].duree * 1.1)
            }
                
        }
    }
    
    gid("totalHeures").innerHTML = tot.toFixed(2);
}
