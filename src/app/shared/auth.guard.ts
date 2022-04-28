import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      //si renvoie true, les routes associées à ce gardien sont navigables
    return this.authService.isAdmin() 
    .then((admin):boolean=>{
      if(admin){
        console.log("Vous etes admin, Gardien autorise la navigation");
        return true;
      }else{
        console.log("Gardien n'autorise pas la navigation, vous êtes pas admin!");
        this.router.navigate(["/home"]);
        return false;
      }
    });
  }
  
}
