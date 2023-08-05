import { Component, OnInit } from '@angular/core';

import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { colorCheck } from 'src/app/struck';

//declare var colorCheck:any;

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
/*
What to do:
- Add more info for the cars like a seller website will have

*/
export class VehicleComponent implements OnInit {
  vinSub!:Subscription;
  carInfoSub!:Subscription;

  currentVIN!:string;
  vehicleProfile!:any[];

  constructor(private uiservice:UiService, private dataservice:DataService) { 
  }

  ngOnInit(): void {
    this.vinSub = this.uiservice.getVIN().subscribe(r=>{
      this.currentVIN = r;
    });
    this.carInfoSub = this.dataservice.retrieveVehicleInfo(this.currentVIN).subscribe(r => {
      this.vehicleProfile = r;
      console.log(r);
    })
  }
  
  CC(inp:string){
    return colorCheck(inp);
  }

}
