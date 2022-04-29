import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignement } from '../assignments/assignment.modele';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private logginService:LoggingService, private http:HttpClient) { 
    this.logginService.setNiveauLog(2);
  }
 
  assignements:Assignement[]= []

  url = "http://localhost:8010/api/assignments";

  getAssignment(id:number):Observable<Assignement|undefined>{
    let a = this.assignements.find( a=>a.id === id);
    return this.http.get<Assignement>(this.url+"/"+id);
  }
  
  getAssignments():Observable<Assignement[]>{
    return this.http.get<Assignement[]>(this.url);
    //return of(this.assignements);
  }
  

  addAssignment(assignement: Assignement): Observable<String>{
    this.assignements.push(assignement);
    this.logginService.log(assignement.nom,"ajouté");
    return of('Assignment ajouté');
  }

  updateAssignment(assignement: Assignement): Observable<String>{
    this.logginService.log(assignement.nom,"modifié");
    return of('Assignment modifié');
  }

  deleteAssignment(assignement: Assignement): Observable<String>{
    let pos = this.assignements.indexOf(assignement);
    this.assignements.splice(pos,1);
    this.logginService.log(assignement.nom,"supprimé");
    return of('Assignment supprimé');
  }

 

}
