export class Student {

    id!: string;
    indeks!: string;
    ime!: string;
    prezime!: string;
    datumRodjenja!: string;
    mail!: string;
    adresa!: string;
    portfolioLink!: string;
    tel!: string;
    oMeni!: string;
    fakultet!: string;
    smjer!: string;
    godina!: string;
    ciklus!: string;
    vjestine!: Array<string>;
    jezici!: Array<string>;
    hobiji!: Array<string>;
    radnoIskustvo!: Array<RadnoIskustvo>;
    projekti!: Array<Projekat>

    constructor() { }

}

class Projekat {
    period!: String;
    naziv!: String;
    opis!: String;
    link!: String;
}

class RadnoIskustvo {
    period!: String;
    firma!: String;
    pozicija!: String;
    opis!: String;
}