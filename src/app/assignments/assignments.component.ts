import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { DetailsService } from '../shared/details.service';
import { Assignement } from './assignment.modele';
import { Details } from './details.modele';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  //prof = undefined;
  //boutonInactif= false;
  //nomAssignment!:string;
  //dateRendu!:Date;
  //assignmentSelectionne?:Assignement;
  //formVisible=false;


  assignements:Assignement[] = [];
  page=1;
  limit=10;
  totalPages=0;
  pagingCounter=0;
  hasNextPage=true;
  hasPrevPage=false;
  prevPage=0;
  nextPage=1;
  
  constructor(private assignmentsService:AssignmentsService,private detailsService: DetailsService) { 
   /* setTimeout(() => {
      this.boutonInactif = false 
    }, 3000);*/
  }
  
  details?: Details;
  //appelé apres le constructeur et avant l'affichahge du composant
  ngOnInit(): void {
    console.log("Dans ngOnInit, appelé avant l'affichage");
    
    this.getAssignments();
  }

  detailsAssignments(id:number){
    this.detailsService.detailsAssignments(id)
    .subscribe(detail=>{
      this.details = detail;
    })
}

  getAssignments() {
    //on recupere ici les donnees dans le service de gestion des assignemets...
    this.assignmentsService.getAssignments(this.page, this.limit)
    .subscribe(reponse=>{
      this.assignements=reponse.docs;
      this.page=reponse.page;
      this.limit=reponse.limit;
      this.totalPages=reponse.totalPages;
      this.pagingCounter=reponse.pagingCounter;
      this.hasNextPage=reponse.hasNextPage;
      this.hasPrevPage=reponse.hasPrevPage;
      this.prevPage=reponse.prevPage;
      this.nextPage=reponse.nextPage;
    });
  }

  pagePrecedente() {
    this.page--;
    this.getAssignments();
  }

  pageSuivante() {
    this.page++;
    this.getAssignments();

  }

  premierePage() {
    this.page = 1;
    this.getAssignments();
  }

  dernierePage() {
    this.page = this.totalPages;
    this.getAssignments();
  }

  /*buttonClique(assignment:any){
    console.log(assignment.nom);
  }*/

 /* onAddAssignmentBtnClick(){
    this.formVisible=true;
  }*/

  /*formulaireSoumis(nom:string){
    console.log(nom);
  }*/

  //alefa ao am assignmentSelectionne izay vao clique
  /*assignmentClique(assignment:Assignement){
    this.assignmentSelectionne=assignment;
  }*/

 /* onNouvelAssignement(event:Assignement){
    console.log("nampiditra vaovao!");
    this.assignmentsService.addAssignment(event)
    .subscribe(message =>{
      console.log(message);
      //this.formVisible = false;
    } );
    //this.assignements.push(event);
    
  }*/

} 
