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
  count:number = 0;
  low_t = 0;
  high_t = 11;
  carNumber!:number;

  constructor(private uiService: UiService, private dataService:DataService) { 

  }

  ngOnInit(): void {
    this.searchValueSub = this.uiService.getSearchValue().subscribe(r => {
      this.value = r;
    })
    this.allCars = this.dataService.retrieveAllForMake(this.value).subscribe(r => {
      this.cars = r;
      var i = 0;
      this.cars.forEach(r =>{
        i = i + 1;
        r.id = i;
      })
      this.carNumber = i;

      //console.log(this.cars);
    })
  }

  validEntry(inp:number){
    if(inp > this.low_t && inp < this.high_t)
      return true;
    else
      return false;
  }
  next(){
    this.low_t = this.low_t + 10;
    this.high_t = this.high_t + 10;
  }
  back(){
    if(this.low_t > 0)
    {
      this.low_t = this.low_t  - 10;
      this.high_t = this.high_t - 10;
    }
  }



}
