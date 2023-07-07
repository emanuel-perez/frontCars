import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';
import { carSub } from '../struck';

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
  baseURL = 'http://localhost:10000';
  //baseURL = 'https://carserverapi.azurewebsites.net/'
  

  constructor(private http:HttpClient) { }

  retrieveAllMakes(){
    const url = this.baseURL + '/catalog/makes';
    return this.http.get<any>(url,httpOptions);
  }
  
  retrieveAllForMake(makeName:string){
    const url = this.baseURL + '/catalog/make/' + makeName;
    return this.http.get<any>(url,httpOptions);
  }

  retrieveVehicleInfo(vin:string){
    const url = this.baseURL + '/vin/' + vin;
    return this.http.get<any>(url,httpOptions);
  }

  // Login Functions
  login(username:string,password:string):Observable<any>{
    const data = {username,password};
    const url = this.baseURL +'/login/' + stringify(data);
    return this.http.get<any>(url,httpOptions);
  }
  newUser(username:string, password:string){
    const data = {username,password};
    const url = this.baseURL + '/newUser';
    return this.http.post<any>(url,data,httpOptions);
  }

  // Post functions
  newEntry(entry:carSub) { // sends a new entry to be added to the catalog
    const url = this.baseURL + '/newEntry';
    return this.http.post<any>(url, entry, httpOptions);
  }

}
