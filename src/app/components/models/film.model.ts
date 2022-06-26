export class Film{
    constructor(
        public id: number,
        public nom: string,
        public real: string,
        public synopsis: string,
        public annee: number,
        public img: string,
        public details: string
    ){}
}

export interface FilmI {id: number, nom:string, real: string, synopsis: string, annee: number, img: string, details:string}