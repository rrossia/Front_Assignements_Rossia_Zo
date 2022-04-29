import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  login!:string;
  password!:string;

  constructor(private route: ActivatedRoute,
    private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //if((! this.login) || (!this.password)) return;
    console.log("nom= "+ this.login +" date rendu= "+this.password);
    this.authService.logIn(this.login, this.password);
    }



}
