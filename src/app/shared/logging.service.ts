import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  niveauLog = 0;
  constructor() { }

  log(nomAssignment:string, action:string){
    if(this.niveauLog>1)
      console.log(`login service:${nomAssignment} ${action}`);
  }

  setNiveauLog(val:number){
    this.niveauLog=val;
  }
}
