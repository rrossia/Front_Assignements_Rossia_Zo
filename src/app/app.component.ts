import { Component } from '@angular/core';

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

  constructor() { 
    /*setTimeout(() => {
      this.titre = "Le meilleur cours"
    }, 5000);*/
  }

}

