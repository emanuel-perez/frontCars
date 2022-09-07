import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private searchSubject = new BehaviorSubject<string>("all");

  constructor() { }

  setSearch(input:string){ // Sets the value for the search
    this.searchSubject.next(input);
    console.log(input)
  }
  getSearchValue(){
    return this.searchSubject.asObservable();
  }
}
