import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders (
    {
      'Content-Type': 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //baseURL = 'http://localhost:10000';
  baseURL = 'https://carserverapi.azurewebsites.net/'
  

  constructor(private http:HttpClient) { }

  retrieveAllMakes(){
    const url = this.baseURL + '/catalog/makes';
    return this.http.get<any>(url,httpOptions);
  }

}
