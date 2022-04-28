import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignement } from '../assignments/assignment.modele';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private logginService:LoggingService) { 
    this.logginService.setNiveauLog(2);
  }
 
  assignements:Assignement[]= [
    {
      id:1,
      nom:'Devoir angular',
      dateRendu:new Date('03/20/2022'),
      rendu: false
    },
    {
      id:2,
      nom:'Devoir oracle',
      dateRendu:new Date('2/01/2022'),
      rendu: true
    },
    {
      id:3,
      nom:'Devoir big data',
      dateRendu:new Date('03/22/2022'),
      rendu: false
    }
  ]

  getAssignments():Observable<Assignement[]>{
    return of(this.assignements);
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
