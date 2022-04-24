import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  logIn(login:string, password:string){
    this.loggedIn=true;
  }

  logOut(){
    this.loggedIn = false;
  }

  isAdmin(){
    let isUserAdmin = new Promise((resolve,reject)=>{
      resolve(this.loggedIn);
    })
    //return this.loggedIn;
    return isUserAdmin;
  }

    //isAdmin().then(admin=>{if(admin)})
  constructor() { }
}
