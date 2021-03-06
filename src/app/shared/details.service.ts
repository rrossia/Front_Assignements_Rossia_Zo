import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggingService } from './logging.service';
import {Details } from '../assignments/details.modele';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  url = "https://api-assignment-rossia-zo.herokuapp.com/api/details";
  constructor(private logginService:LoggingService, private http:HttpClient) { }

  detailsAssignments(id:number):Observable<any | undefined>{
    return this.http.get<Details>(this.url+"/"+id);
  }


}
