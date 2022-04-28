import { Component,  OnInit} from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignement } from '../assignment.modele';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
//on va utiliser  un Output() pour renvoyer les assignements creer au père ou autre
  //@Output() nouvelAssignment = new EventEmitter<Assignement>();

  boutonInactif= false;
  nomAssignment!:string;
  dateRendu!:Date;
  assignmentSelectionne?:Assignement;

  /*assignements:Assignement[]= [
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
  ]*/

  constructor(private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {
  }

  buttonClique(assignment:any){
    console.log(assignment.nom);
  }


  onSubmit(){
    console.log("nom= "+ this.nomAssignment +" date rendu= "+this.dateRendu);
    let newAssignment = new Assignement();
    newAssignment.id = Math.round(Math.random()*10000000);
    newAssignment.nom = this.nomAssignment;
    newAssignment.dateRendu = this.dateRendu;
    newAssignment.rendu = false;
    this.assignmentsService.addAssignment(newAssignment)
    .subscribe(message =>{
      console.log(message);
    })
    //on ajoute ici une programme pour la soumission d'ajout de devoir
  }

  /*assignmentClique(assignment:Assignement){
    this.assignmentSelectionne=assignment;
  }*/
  
}
