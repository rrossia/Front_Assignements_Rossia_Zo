import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignement } from '../assignment.modele';

@Component({
  selector: 'app-assignments-detail',
  templateUrl: './assignments-detail.component.html',
  styleUrls: ['./assignments-detail.component.css']
})
export class AssignmentsDetailComponent implements OnInit {
  assignmentTransmis?: Assignement; //asiana input angalana ilay detail
  //

  constructor(private assignmentsService: AssignmentsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //on recupere l'id
    const id = +this.route.snapshot.params['id'];
    this.getAssignment(id);
  }

  getAssignment(id: number) {
    //on demande au service de gestion de assignments
    this.assignmentsService.getAssignment(id)
      .subscribe(assignment => {
        this.assignmentTransmis = assignment;
      })
  }

  onAssignmentRendu() {
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;
      this.assignmentsService.updateAssignment(this.assignmentTransmis)
        .subscribe(message => {
          console.log(message);
          //et on navigue vers la page d'accueil pour afficher la liste
          this.router.navigate(["/home"]);
        });
    }
  }

  onDelete() {
    if (!this.assignmentTransmis) return;
    this.assignmentsService.deleteAssignment(this.assignmentTransmis)
      .subscribe(message => {
        console.log(message);
        this.router.navigate(["/home"]);
      });
  }

}
