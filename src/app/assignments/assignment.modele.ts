export class Assignement{
    _id?:String;
    id!:Number;
    nom!:string; //obligatoire pour le nom !
    dateDeRendu!:Date;
    rendu!:boolean;
    auteur?:String;
    note?:Number;
    remarques?:String | null;
    matieresid!:String;
}