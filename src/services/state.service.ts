import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class StateService {
    private urlApi :String = environment.apiUrl;
    private endUrl :String = 'api/State';
    constructor( private http : HttpClient) { }
  
  
    public getStates():Observable<any> {
      return this.http.get(`${this.urlApi}${this.endUrl}`)
  
    }
  }