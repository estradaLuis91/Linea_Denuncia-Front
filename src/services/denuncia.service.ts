import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class DenunciaService {
    private urlApi :String = environment.apiUrl;
    private endUrl :String = 'api/Denuncia';
    constructor( private http : HttpClient ) { }
  
  
    public getDenuncias():Observable<any> {
      return this.http.get(`${this.urlApi}${this.endUrl}`)
  
    }

    public postDenuncias(denuncia:any):Observable<any> {
        console.log(denuncia)
        return this.http.post(`${this.urlApi}${this.endUrl}`,denuncia)
    
      }
      
      public getDenunciasSP():Observable<any> {
        return this.http.get(`${this.urlApi}${this.endUrl}`+'sSP/SP')
    
      }

      public getFolio():Observable<any> {
        return this.http.get(`${this.urlApi}${this.endUrl}`+'sSP/Folio')
        
      }

  }
  