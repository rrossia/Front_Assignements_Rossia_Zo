import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignement } from '../assignments/assignment.modele';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor() { }

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

  getAssignments():Observable<Assignement[]>{
    return of(this.assignements);
  }
  
  addAssignment(assignement: Assignement): Observable<String>{
    this.assignements.push(assignement);
    return of('Assignment ajouté');
  }

  updateAssignment(assignement: Assignement): Observable<String>{

    return of('Assignment modifié');
  }


}
