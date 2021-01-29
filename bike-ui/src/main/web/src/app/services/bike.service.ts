import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable}  from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  apiUrl = environment.serverAddress;

  constructor(private http:HttpClient) {

   }

   getBikes() {
     return this.http.get(this.apiUrl+'/api/v2/bikes');
   }

   getBike(id: number) {
     return this.http.get(this.apiUrl+'/api/v2/bikes/' + id);
   }

   createBikeRegistration(bike:any) {
     let body = JSON.stringify(bike);
     return this.http.post(this.apiUrl+'/api/v2/bikes', body, httpOptions);
   }


}
