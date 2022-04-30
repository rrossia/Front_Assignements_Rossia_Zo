import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service';
import { AuthService } from './shared/auth.service';
import { MatieresService } from './shared/matieres.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titre = 'Application de Gestion des assignements...';
  prof={
    nom:'Buffa',
    prenom:'Michel',
    decrisToi : function(){
      return "Je suis "+ this.prenom + "";
    }
  }

  constructor(private authService: AuthService, private router:Router,private assignmentsService: AssignmentsService, private matieresService: MatieresService) { 
    /*setTimeout(() => {
      this.titre = "Le meilleur cours"
    }, 5000);*/
  }
  
  onLoginLogout(){
    if(this.authService.loggedIn){
      //je me deloggue
      this.authService .logOut();
      this.router.navigate(["/home"]);
    }else{
      //je me loggue
      this.authService.logIn("ras","ras");
    }

  }
  
  isLogged(){
    return this.authService.loggedIn;
  }

  onClickConnecter(){
    this.router.navigate(["/authentification"]);
  }  

  onClickDeconnecter(){
    this.authService .logOut();
    this.router.navigate(["/home"]);
  }

  genereDonneesDeTest(){
    this.assignmentsService.peuplerBD();
  }

  /*genereDonneesDeTest(){
    this.matieresService.peuplerBD();
  }*/
}

