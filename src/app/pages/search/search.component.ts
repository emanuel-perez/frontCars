import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { LowerCasePipe } from '@angular/common';
import { OrderByPipe } from 'src/app/components/orderby';

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

  colorEx:string = "black";
  orderBy:string = "default";

  constructor(private uiService: UiService, private dataService:DataService) { 

  }

  ngOnInit(): void {
    this.searchValueSub = this.uiService.getSearchValue().subscribe(r => {
      this.value = r;
    })
    this.allCars = this.dataService.retrieveAllForMake(this.value).subscribe(r => {
      this.cars = r;
      /*
      if(r.ExteriorColor)
      */
      //this.colorEx = r.ExteriorColor.toLowerCase();
      var i = 0;
      this.cars.forEach(r =>{
        i = i + 1;
        r.id = i;
      })
      this.carNumber = i;

      //console.log(this.cars);
    })
  }

  // Functions web
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

  // Decide the color
  colorCheck(inp:string){
    var tmp = inp.toLowerCase();
    if(tmp.includes("gray") || tmp.includes("magnetic") || tmp.includes("granite") || tmp.includes("mineral") || tmp.includes("pewter") || tmp.includes("gunmetal") || tmp.includes("grey") || tmp.includes("lunar") )
      return "gray";
    else if(tmp.includes("black") || tmp.includes("ebony") || tmp.includes("charcoal"))
      return "black";
    else if(tmp.includes("blue") || tmp.includes("bikini") || tmp.includes("mica") || tmp.includes("aqua"))
      return "blue";
    else if(tmp.includes("brown") || tmp.includes("caviar") || tmp.includes("coffee"))
      return "brown";
    else if(tmp.includes("sky") || tmp.includes("sapphire"))
      return "lightskyblue";
    else if(tmp.includes("red") || tmp.includes("red"))
      return "red";
    else if(tmp.includes("anvil") || tmp.includes("cement") || tmp.includes("moon dust") || tmp.includes("celestite"))
      return "lightsteelblue";
    else if(tmp.includes("burgundy") || tmp.includes("maroon"))
      return "maroon";
    else if(tmp.includes("silver") || tmp.includes("platinum") || tmp.includes("lead") || tmp.includes("polished metal"))
      return "silver";
    else if(tmp.includes("quartz"))
      return "darkgray"
    else if(tmp.includes("white") || tmp.includes("pearl") || tmp.includes("zero"))
      return "white";
    else if(tmp.includes("orange"))
      return "orange";
    else if(tmp.includes("steel"))
      return "darkgray";
    else if(tmp.includes("scarlet"))
      return "darkred"
    else if(tmp.includes("lava"))
      return "orangered"
    else if(tmp.includes("tan"))
      return "tan"
    else if("green")
      return "green"
    else if(tmp.includes("forest"))
      return "darkseagreen"
    else if(tmp.includes("olive"))
      return "darkolivegreen"
    else if(tmp.includes("sandstone") || tmp.includes("sandstorm"))
      return "beige"
    else if(tmp.includes("amethyst"))
      return "indigo"
    else if(tmp.includes("midnight"))
      return "midnightblue"
    else {
      console.log(inp.toLowerCase());
      return "aliceblue";
    }
  }


}
