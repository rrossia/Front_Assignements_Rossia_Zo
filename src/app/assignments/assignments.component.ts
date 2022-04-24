import { Component, OnInit } from '@angular/core';
import { Assignement } from './assignment.modele';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  prof = undefined;
  boutonInactif= false;
  nomAssignment!:string;
  dateRendu!:Date;
  assignmentSelectionne?:Assignement;
  formVisible=false;

  assignements:Assignement[]= [
    {
      nom:'Devoir angular',
      dateRendu:new Date('03/20/2022'),
      rendu: false
    },
    {
      nom:'Devoir oracle',
      dateRendu:new Date('2/01/2022'),
      rendu: true
    },
    {
      nom:'Devoir big data',
      dateRendu:new Date('03/22/2022'),
      rendu: false
    }
  ]
 

  
  constructor() { 
    setTimeout(() => {
      this.boutonInactif = false 
    }, 3000);
  }
  

  //appelé apres le constructeur et avant l'affichahge du composant
  ngOnInit(): void {
  }

  buttonClique(assignment:any){
    console.log(assignment.nom);
  }

  onAddAssignmentBtnClick(){
    this.formVisible=true;
  }

  /*formulaireSoumis(nom:string){
    console.log(nom);
  }*/

  //alefa ao am assignmentSelectionne izay vao clique
  assignmentClique(assignment:Assignement){
    this.assignmentSelectionne=assignment;
  }

  onNouvelAssignement(event:Assignement){
    console.log("nampiditra vaovao!");
    this.assignements.push(event);
    this.formVisible = false;
  }

  onDeleteAssignment(event:Assignement){
    const pos = this.assignements.indexOf(event);
    //position, nombre d'elemnt à supprimer
    this.assignements.splice(pos,1);
  }

} 
