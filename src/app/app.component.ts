import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from './assignments/details.modele';
import { AssignmentsService } from './shared/assignments.service';
import { AuthService } from './shared/auth.service';
import { DetailsService } from './shared/details.service';
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


  constructor(private authService: AuthService, private router:Router,private assignmentsService: AssignmentsService,
     private matieresService: MatieresService, private detailsService: DetailsService) { 
      
    /*setTimeout(() => {
      this.titre = "Le meilleur cours"
    }, 5000);*/
  }
  
  details?: Details;
  
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


  getDetails(){
    this.detailsService.detailsAssignments(2)
    .subscribe(detail=>{
      this.details = detail;
      this.router.navigate(["/home"]);
    })
  }
  
/* genereDonneesDeTest(){
    this.assignmentsService.peuplerBD();
  }*/

  /*genereDonneesDeTest(){
    this.matieresService.peuplerBD();
*/

}

