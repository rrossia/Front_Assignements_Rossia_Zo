import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
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
  //formVisible=false;


  assignements:Assignement[] = [];
  
  constructor(private assignmentsService:AssignmentsService) { 
   /* setTimeout(() => {
      this.boutonInactif = false 
    }, 3000);*/
  }
  

  //appelé apres le constructeur et avant l'affichahge du composant
  ngOnInit(): void {
    console.log("Dans ngOnInit, appelé avant l'affichage");
    //on recupere ici les donnees dans le service de gestion des assignemets...
    this.assignmentsService.getAssignments()
    .subscribe(assignements=>{
      this.assignements=assignements;
    });
  }

  buttonClique(assignment:any){
    console.log(assignment.nom);
  }

 /* onAddAssignmentBtnClick(){
    this.formVisible=true;
  }*/

  /*formulaireSoumis(nom:string){
    console.log(nom);
  }*/

  //alefa ao am assignmentSelectionne izay vao clique
  assignmentClique(assignment:Assignement){
    this.assignmentSelectionne=assignment;
  }

 /* onNouvelAssignement(event:Assignement){
    console.log("nampiditra vaovao!");
    this.assignmentsService.addAssignment(event)
    .subscribe(message =>{
      console.log(message);
      //this.formVisible = false;
    } );
    //this.assignements.push(event);
    
  }*/

  onDeleteAssignment(event:Assignement){
    this.assignmentsService.deleteAssignment(event)
    .subscribe(message =>{
      console.log(message);
    });
  } 

} 
