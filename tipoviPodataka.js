//Primitivni tipovi 
var godine = 20;
var ime = "Sofija";
var studiram = true;
//Nizovi 
var predmeti = ["EPOS", "Klijentske", "Cloud"];
var ocene = [10, 9, 8, 7, 6, 5];
//Tuple 
var tuple = ["Sofija", 20];
//Enum 
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeElektronskogPoslovanja"] = 0] = "TehnologijeElektronskogPoslovanja";
    Modul[Modul["softverskoInzenjerstvo"] = 1] = "softverskoInzenjerstvo";
    Modul[Modul["informacioniSistemi"] = 2] = "informacioniSistemi";
    Modul[Modul["informacioneTehnologije"] = 3] = "informacioneTehnologije";
    Modul[Modul["informacioniInzenjering"] = 4] = "informacioniInzenjering";
    Modul[Modul["poslovnaAnalitika"] = 5] = "poslovnaAnalitika";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeElektronskogPoslovanja;
//Objekti 
var student = {
    ime: "Sofija",
    godine: 20,
    studira: true
};
//Unija tipova
var brojIliString = 10;
//Any tip
var biloKojiTip = "Moze biti bilo koji tip";
//void tip
function cao() {
    console.log("cao");
}
//null i undefined
var n = null;
var u = undefined;
//Type Assertions - tretiraj mi x i y promenljivu kao taj npr string 
var nekaVrednost = "Sofija";
var duzinaStringa = nekaVrednost.length;
console.log("duzina stringa je ", duzinaStringa);
console.log(godine, ime, studiram);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n, u);
