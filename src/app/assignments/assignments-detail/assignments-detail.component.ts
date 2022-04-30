import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';
import { DetailsService } from 'src/app/shared/details.service';
import { Assignement } from '../assignment.modele';
import { Details } from '../details.modele';

@Component({
  selector: 'app-assignments-detail',
  templateUrl: './assignments-detail.component.html',
  styleUrls: ['./assignments-detail.component.css']
})
export class AssignmentsDetailComponent implements OnInit {
  assignmentTransmis?: Assignement; //asiana input angalana ilay detail
  //
  details?: Details;


  constructor(private assignmentsService: AssignmentsService, private route: ActivatedRoute,
    private router: Router, private authService:AuthService, private detailsService: DetailsService) { }

  ngOnInit(): void {
    //on recupere l'id, de ce qu'on click sur le devoir
    const id = +this.route.snapshot.params['id'];
    this.getAssignment(id);
    this.detailsAssignments(id);
  }

  detailsAssignments(id:number){
      this.detailsService.detailsAssignments(id)
      .subscribe(detail=>{
        this.details = detail;
      })
  }

  getAssignment(id: number) {
    //on demande au service de gestion de assignments
    this.assignmentsService.getAssignment(id)
      .subscribe(assignment => {
        this.assignmentTransmis = assignment;
      })
  }

  onClickEdit(){
    this.router.navigate(["/assignment",this.assignmentTransmis?.id,"edit"]),
    {
      queryParams:{
        name:"Michel Buffa",
        job:"Professeur"
      },
      fragment:"edition"
    };
  }

  isLogged(){
    return this.authService.loggedIn;
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
