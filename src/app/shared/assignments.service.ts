import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignement } from '../assignments/assignment.modele';
import { LoggingService } from './logging.service';

import { bdInitialAssignments } from './assignments';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private logginService:LoggingService, private http:HttpClient) { 
    this.logginService.setNiveauLog(2);
  }
 
  assignements:Assignement[]= []

  url = "http://localhost:8010/api/assignments";
 //urlMatiere = "http://localhost:8010/api/matiere";
  //url = "https://api-assignment-rossia-zo.herokuapp.com/api/assignments"

  getAssignment(id:number):Observable<Assignement|undefined>{
    let a = this.assignements.find( a=>a.id == id);
    return this.http.get<Assignement>(this.url+"/"+id);
  }
  
  getAssignments():Observable<Assignement[]>{
    return this.http.get<Assignement[]>(this.url);
    //return of(this.assignements);
  }


  addAssignment(assignement: Assignement): Observable<any>{
    //this.assignements.push(assignement);
    this.logginService.log(assignement.nom,"ajouté");
    //console.log("ajoute avec date "+ assignement.dateDeRendu);
    return this.http.post<Assignement>(this.url,assignement);
  }

  updateAssignment(assignement: Assignement): Observable<any>{
    this.logginService.log(assignement.nom,"modifié");
    //return of('Assignment modifié');
    return this.http.put<Assignement>(this.url,assignement);
  }

  deleteAssignment(assignement: Assignement): Observable<any>{
    //let pos = this.assignements.indexOf(assignement);
    //this.assignements.splice(pos,1);
    this.logginService.log(assignement.nom,"supprimé");
    return this.http.delete<Assignement>(this.url+"/"+assignement._id);
  }
<<<<<<< HEAD


peuplerBD(){
  bdInitialAssignments.forEach(a=>{
      let newAssignment = new Assignement();
      newAssignment.dateDeRendu = new Date(a.dateDeRendu);
      newAssignment.rendu = a.rendu;
      newAssignment.auteur=a.auteur;
      newAssignment.note=a.note
      newAssignment.remarques=a.remarques;
      newAssignment.matieresid=a.matieresid;
      newAssignment.id = a.id;
      this.addAssignment(newAssignment)
      .subscribe(reponse=>{
        console.log(reponse.message);
      })
  }) 
}

=======
>>>>>>> 8497fe99327cc84c0d53d65fb8cd8e7b25e1ed0f
}
