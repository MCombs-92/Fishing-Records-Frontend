export class Fish {
    Id: number;
    SubSpecies: string;
    TrueSpecies: string;
    Weight: number;
    BaitStyle: string;
    BaitDesc: string;
    Markedforremoval: boolean;

    constructor() {
        this.Id = 0;
        this.Markedforremoval = false;
    }

}