//Primitivni tipovi 

let godine:number=20;
let ime:string="Sofija";
let studiram:boolean=true;

//Nizovi 

let predmeti:string[]=["EPOS", "Klijentske", "Cloud"];
let ocene:number[]=[10, 9, 8, 7, 6, 5];


//Tuple 

let tuple:[string, number]=["Sofija", 20]

//Enum 

enum Modul{
    TehnologijeElektronskogPoslovanja, 
    softverskoInzenjerstvo, 
    informacioniSistemi, 
    informacioneTehnologije,
    informacioniInzenjering,
    poslovnaAnalitika
}

let modul:Modul=Modul.TehnologijeElektronskogPoslovanja;

//Objekti 

let student:{ime:string, godine:number, studira:boolean}={
    ime:"Sofija",
    godine:20,
    studira:true
};

//Unija tipova

let brojIliString:number|string=10;

//Any tip

let biloKojiTip:any="Moze biti bilo koji tip";

//void tip

function cao():void{
    console.log("cao");
}

//null i undefined - nema neku vrednost null, jos uvek nije definisana, kod ne puca 

let n:null=null;
let u:undefined=undefined;

//Type Assertions - tretiraj mi x i y promenljivu kao taj npr string 

let nekaVrednost:any="Sofija";
let duzinaStringa:number=(nekaVrednost as string).length;
console.log("duzina stringa je ", duzinaStringa);
console.log(godine, ime, studiram);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n,u);