import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matiere } from '../assignments/matiere.modele';
import { LoggingService } from './logging.service';
import { data } from './matiere';

@Injectable({
  providedIn: 'root'
})
export class MatieresService {

  constructor(private logginService:LoggingService, private http:HttpClient) {
    this.logginService.setNiveauLog(2);
   }
  
   url = "https://api-assignment-rossia-zo.herokuapp.com/api/matiere";

  addMatiere(matiere: Matiere): Observable<any>{
    this.logginService.log(matiere.nom,"ajouté");
    return this.http.post<Matiere>(this.url,matiere);
  }

  peuplerBD(){

    data.forEach(b=>{
    let matiere = new Matiere();
    matiere.id=b.id;
    matiere.nom = b.nom;
    matiere.image = b.image;
    matiere.prof = b.prof;
    this.addMatiere(matiere)
    .subscribe(reponse=>{
      console.log(reponse.message);
    })
  });
}

}
