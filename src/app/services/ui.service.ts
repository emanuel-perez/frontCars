import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private searchSubject = new BehaviorSubject<string>("all");
  private statusSubject = new BehaviorSubject<boolean>(false);
  private userSubject = new BehaviorSubject<string>("default");

  constructor() { }

  setSearch(input:string){ // Sets the value for the search
    this.searchSubject.next(input);
    console.log(input)
  }
  getSearchValue(){
    return this.searchSubject.asObservable();
  }

  // Login UI functions
  setUsernameStatus(inp:boolean){
    this.statusSubject.next(inp);
  }

  getUsernameStatus(){
    return this.statusSubject.asObservable();
  }

  setUsername(inp:string){
    this.userSubject.next(inp);
  }
  getUsername(){
    return this.userSubject.asObservable();
  }
}
