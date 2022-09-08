import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value!:string;
  searchValueSub!:Subscription;
  allCars!:Subscription;
  cars:any[] = [];

  constructor(private uiService: UiService, private dataService:DataService) { 

  }

  ngOnInit(): void {
    this.searchValueSub = this.uiService.getSearchValue().subscribe(r => {
      this.value = r;
    })
    this.allCars = this.dataService.retrieveAllForMake(this.value).subscribe(r => {
      this.cars = r;
      console.log(this.cars);
    })
  }

  showAmount(){
    return true
  }



}
