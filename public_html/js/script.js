var i;
var spielfeldBreite;
var spielfeldHoehe;
var spielfeldFlaeche;
var spielkartenGesamt = [];
var spielkartenRunde = [];

function berechneSpielfeldFlaeche() {
    spielfeldBreite = document.getElementById("spielfeldBreite").value;
    spielfeldHoehe = document.getElementById("spielfeldHoehe").value;
    spielfeldFlaeche = spielfeldBreite * spielfeldHoehe;
    document.getElementById("spielfeldFlaeche").value = spielfeldFlaeche;
}

function spielkonfigurationLaden() {
    berechneSpielfeldFlaeche();
    if ((spielfeldBreite % 2 === 1 && spielfeldHoehe % 2 === 1) && spielfeldFlaeche > 64) {
        eingabeLoeschen();
        alert("Breite und Höhe dürfen nicht beide ungerade sein! \n \n Es dürfen max. 64 Spielfelder erzeugt werden!");
    } else if (spielfeldBreite % 2 === 1 && spielfeldHoehe % 2 === 1) {
        eingabeLoeschen();
        alert("Breite und Höhe dürfen nicht beide ungerade sein!");
    } else if (spielfeldFlaeche > 64) {
        eingabeLoeschen();
        alert("Es dürfen max. 64 Spielfelder erzeugt werden!");
    } else {
        for (i = 0; i < 32; i++) {
            spielkartenGesamt[i] = "bilder/Bild" + i + ".jpg";
        }
        document.getElementById("startButton").onclick = spielfeldErstellen;
        document.getElementById("spielfeldBreite").oninput = eingabeLoeschen;
        document.getElementById("spielfeldHoehe").oninput = eingabeLoeschen;
    }
}

function spielkartenErstellen() {
    spielkartenGesamt.sort(function () {
        return 0.5 - Math.random();
    });
    for (i = 0; i < (spielfeldFlaeche / 2); i++) {
        spielkartenRunde[i] = spielkartenGesamt[i];
        spielkartenRunde[spielfeldFlaeche / 2 + i] = spielkartenGesamt[i];
    }
    spielkartenRunde.sort(function () {
        return 0.5 - Math.random();
    });
//    document.getElementById("spielfeld").innerHTML = spielkartenRunde;
//    alert("Breite: " + spielfeldBreite + "\n Höhe: " + spielfeldHoehe + "\n Spielfelder: " + spielfeldFlaeche);
}

function eingabeLoeschen() {
    spielfeldBreite = 0;
    spielfeldHoehe = 0;
    spielfeldFlaeche = 0;
    document.getElementById("startButton").onclick = "";
}

function spielfeldErstellen() {
    spielkartenErstellen();
    var begin = '<div id="container" style="width: ' + (spielfeldBreite * 100 + 2) + 'px; height: ' + (spielfeldHoehe * 100) + 'px">';
    var end = '</div>';
    var output = '<div class="Karten0"></div>';
    for (i = 0; i < spielkartenRunde.length - 1; i++) {
        output += '<div class="Karten0"></div>';
    }
    document.getElementById('spielfeld').innerHTML = begin + output + end;
}