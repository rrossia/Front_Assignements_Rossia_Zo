import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignement } from '../assignment.modele';

@Component({
  selector: 'app-assignments-detail',
  templateUrl: './assignments-detail.component.html',
  styleUrls: ['./assignments-detail.component.css']
})
export class AssignmentsDetailComponent implements OnInit {
  @Input() assignmentTransmis?: Assignement; //asiana input angalana ilay detail
  @Output() deleteAssignment = new EventEmitter<Assignement>()
  //

  constructor(private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {
  }
  
  onAssignmentRendu() {
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;
      this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe(message=>{
        console.log(message);
      });
    }
  }

  onDelete(){
    this.deleteAssignment.emit(this.assignmentTransmis);
    this.assignmentTransmis = undefined;
  }

}
