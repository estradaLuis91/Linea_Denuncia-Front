import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EOService {
  private urlApi :String = environment.apiUrl;
  private endUrl :String = 'api/Eo';
  constructor( private http : HttpClient) { }


  public getEos():Observable<any> {
    return this.http.get(`${this.urlApi}${this.endUrl}`)

  }
}


