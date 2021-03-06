import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignement } from '../assignment.modele';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  assignment!: Assignement | undefined;
  nomAssignment!: string;
  dateDeRendu!: Date;

  constructor(
    private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //exemple de recup des query params et fragment
    let queryParams = this.route.snapshot.queryParams;
    this.getAssignment();
  }
  
  getAssignment() {
    //on recupere l'id dans le snapshot passé par le routeur
    const id = +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id)
      .subscribe(assignment => {
        if (!assignment) return;
        this.assignment = assignment;
        this.nomAssignment = assignment.nom;
        this.dateDeRendu = assignment.dateDeRendu;
      });
  }

  onSaveAssignment() {
    if (!this.assignment) return;
    //on récupere ici les valeurs dans le formulaire
    this.assignment.nom = this.nomAssignment;
    this.assignment.dateDeRendu = this.dateDeRendu;
    this.assignmentsService
      .updateAssignment(this.assignment)
      .subscribe((message) => console.log(message));
    this.router.navigate(["/home"]);
  }

}
