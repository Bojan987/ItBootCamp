class Covek {
    constructor (ime, prezime , godinaRodjenja){
        this.ime = ime
        this.prezime = prezime
        this.godinaRodjenja = godinaRodjenja
    }
}

class Student extends Covek{
    constructor(godinaStudija,prosek,...args ){
        super(...args)
        this.godinaStudija = godinaStudija
        this.prosek = prosek

    }
}
class StudentOsnovne extends Student{
    constructor(smerOsnovnih,...args){
    super(...args)
    this.smerOsnovnihStudija = smerOsnovnih
    }
}
class StudentMaster extends Student{
    constructor(smerMaster,...args){
    super(...args)
    this.smerMasterStudija = smerMaster
    }
}
class Zaposleni extends Covek{
    constructor(godinaZaposlenja,plata,...args){
        super(...args)
        this.godinaZaposlenja = godinaZaposlenja
        this.plata = plata
    }
}
class Nastavnik extends Zaposleni{
    constructor(omiljeniPredmet,listaPredmeta,...args){
        super(...args)
        this.omiljeniPredmet = omiljeniPredmet
        this.listaPredmeta = listaPredmeta
    }
}
class Profesor extends Nastavnik{
    constructor(titula,...args){
        super(...args)
        this.titula = titula
    }
}
class Asistent extends Nastavnik{
    constructor(smerDoktorskihStudija,...args){
    super(...args)
    this.smerDoktorskihStudija=smerDoktorskihStudija
    }
}
class Sluzbenik extends Zaposleni{
    constructor(odsek,...args){
        super(...args)
        this.odsek = odsek
    }
}

let covek1 = new Covek('Pera','Peric',1987)
let covek2 = new Covek('Petar','Petrovic',1997)
let student1 = new Student(4,9,'Ljubisa','Cirkovic', 1995)
let student2 = new StudentOsnovne('Marketing',2,6,'Radisa','Radisanovic',1990)
let student3 = new StudentMaster('Statistika',5,8,'Jelisaveta','Cukic',1993)
let zaposleni1 = new Zaposleni(2018,'700e','Jovana','Cosovic',1983)
let nastavnik1 = new Nastavnik('Sviranje Harfe',['fizika','skakanje u dalj','harfa'], 2016,'1200e','Stefan','Paunovic',1981)
let profesor = new Profesor('redovni','Matematika',['Matematika1','Matematika2'],2013,'2000e','Ivan','Arizanovic',1976)
let asistent = new Asistent('MikroBiologija','Biologija',['Hemija1,Hemija2'],2019,'1000e','Zorica','Radovanovic',1987 )
let sluzbenik = new Sluzbenik('Neki odsek ', 2017,'500e','Zoran','Cirkovic',1990)

console.log(covek1,covek2,student1,student2,student3,zaposleni1,nastavnik1,profesor,asistent,sluzbenik)
