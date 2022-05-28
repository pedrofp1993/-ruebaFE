import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {
    console.log('api lista');
  }


  getQuery(){
    const url = `https://apis-prueba.pruebasgt.com/api/products/`;

    return this.http.get(url);
  }

  getLibro(termino:string){
    const url = `https://apis-prueba.pruebasgt.com/api/products/?title=${termino}`;
    return this.http.get(url); 
  }
  
}
