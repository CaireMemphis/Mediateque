export class Album{
    constructor(
        public id: number,
        public nom: string,
        public artiste: string,
        public annee: number,
        public img: string,
        public details: string
    ){}
}
export interface AlbumI {id: number,nom:string,artiste: string, annee: number, img: string, details:string}