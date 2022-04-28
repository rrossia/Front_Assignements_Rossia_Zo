import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  logIn(login:string, password:string){
    //normalement il faudrait envoyuer requete sur un web service pour passer login et mdp
    //et recevoir un token d'authentification, etc..

    //mais pour le moment on verifie rien
    this.loggedIn=true;
  }

  logOut(){
    this.loggedIn = false;
  }

  isAdmin(){ 
    let isUserAdmin = new Promise((resolve,reject)=>{
      //ref connecté ftsn izy dia natao hoe admin
      resolve(this.loggedIn);
    }); 
    //return this.loggedIn;
    return isUserAdmin;
  }
 
    //isAdmin().then(admin=>{if(admin)})
  constructor() { }
}
