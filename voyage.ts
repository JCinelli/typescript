class Sejour {

    constructor(private nom: string, private prix: number) {
    }

    get name() {
        return this.nom;
    }

    set name(newName) {
        this.nom = newName;
    }

    get price() {
        return this.prix;
    }

    set price(newPrice) {
        this.price = newPrice;
    }

}

class SejourService {

    private sejourTab: Sejour[];

    constructor() {
        const s1 = new Sejour(`Dijon`, 132);
        const s2 = new Sejour(`Milan`, 522);
        const s3 = new Sejour(`Berlin`, 178);
        const s4 = new Sejour(`Los Angeles`, 15);
        const s5 = new Sejour(`Ouessant`, 1256);

        this.sejourTab = [s1, s2, s3, s4, s5];
    }

    sejourParNom(nomSejour: string): Sejour | void {

        for (let sejour of this.sejourTab) {
            if (sejour.name === nomSejour) {
                return sejour;
            }
        }
    }

}

const sejourService: SejourService = new SejourService()

const sejourTrouve: Sejour | void = sejourService.sejourParNom(`Dijon`)

if (sejourTrouve) {
    console.log(`Sejour trouvé => `, sejourTrouve);
} else {
    console.log(`Le sejour demandé est introuvable ..`);
}