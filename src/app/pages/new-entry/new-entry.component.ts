import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { carSub } from 'src/app/struck';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
/*
What to do:
- Decide on the ratings and reviews sections
*/
export class NewEntryComponent implements OnInit {

  loginSub!:Subscription;

  newCarSub!:carSub;


  validUsername:boolean = false;
  section = 1;

  constructor(private fb:FormBuilder, private dataService:DataService, private router:Router, private uiService: UiService) {}

  ngOnInit(): void {
    this.loginSub = this.uiService.getUsernameStatus().subscribe(r => {
      this.validUsername = r;
    });

  }

  carForm = this.fb.group({
    Year:['',{validators:[
      Validators.required
    ]}],
    Make:['',{validators:[
      Validators.required
    ]}],
    Model:['',{validators:[
      Validators.required
    ]}],
    Used:['',{validators:[
      Validators.required
    ]}],
    Price:['',{validators:[
      Validators.required
    ]}],

    SellerType:['',{validators:[
      Validators.required
    ]}],
    SellerName:['',{validators:[
      Validators.required
    ]}],
    StreetName:['',{validators:[
      Validators.required
    ]}],
    State:['',{validators:[
      Validators.required
    ]}],
    Zipcode:['',{validators:[
      Validators.required
    ]}],
    
    Mileage:['',{validators:[
      Validators.required
    ]}],

    ExteriorColor:['',{validators:[
      Validators.required
    ]}],
    InteriorColor:['',{validators:[
      Validators.required
    ]}],
    Drivetrain:['',{validators:[
      Validators.required
    ]}],
    MinMPG:['',{validators:[
      Validators.required
    ]}],
    MaxMPG:['',{validators:[
      Validators.required
    ]}],
    FuelType:['',{validators:[
      Validators.required
    ]}],
    Transmission:['',{validators:[
      Validators.required
    ]}],
    Engine:['',{validators:[
      Validators.required
    ]}],
    

    VIN:['',{validators:[
      Validators.required
    ]}],
    stockNum:['',{validators:[
      Validators.required
    ]}]
  });

  submitCar(){
    this.newCarSub = {
      Year: this.Year.value,
      Make: this.Make.value,
      Model: this.Model.value,
      "Used/New":this.Used.value,
      Price:this.Price.value,
      ConsumerRating: -1.0,
      ConsumerReviews: -1.0,
      SellerType:this.SellerType.value,
      SellerName:this.SellerName.value,
      StreetName:this.StreetName.value,
      SellerRating:-1,
      SellerReviews:-1,
      State:this.State.value,
      Zipcode:this.Zipcode.value,
      DealType:"",
      ComfortRating:-1.0,
      InteriorDesignRating:-1.0,
      PerformanceRating:-1.0,
      ValueForMoneyRating:-1.0,
      ExteriorStylingRating:-1.0,
      RealibilityRating:-1.0,
      ExteriorColor:this.ExteriorColor.value,
      InteriorColor:this.InteriorColor.value,
      Drivetrain:this.Drivetrain.value,
      MinMPG:this.MinMPG.value,
      MaxMPG:this.MaxMPG.value,
      FuelType:this.FuelType.value,
      Transmission:this.Transmission.value,
      Engine:this.Engine.value,
      VIN:this.VIN.value,
      "Stock#":this.stockNum.value,
      Mileage:this.Mileage.value
    }

    console.log(this.newCarSub);
    this.dataService.newEntry(this.newCarSub).subscribe(r => {
      console.log("entry added")
    })

  }
  nextSection(){
    this.section = this.section + 1;
  }
  backSection(){
    this.section = this.section - 1;
  }

  firstSecValid(){
    return this.Price.valid && this.Make.valid && this.Mileage.valid && this.Model.valid && this.Year.valid;
  }
  secondSecValid(){
    return this.ExteriorColor.valid;
  }

  set Used(inp:string){
    this.carForm.setValue({Used:inp});
  }


  get InteriorColor():any{
    return this.carForm.get("InteriorColor")
  }
  get Year():any{
    return this.carForm.get("Year")
  }
  get Make():any{
    return this.carForm.get("Make")
  }
  get Model():any{
    return this.carForm.get("Model")
  }
  get Price():any{
    return this.carForm.get("Price")
  }
  get Mileage():any{
    return this.carForm.get("Mileage")
  }
  get ExteriorColor():any {
    return this.carForm.get("ExteriorColor")
  }
  get Used():any{
    return this.carForm.get("Used")
  }
  get VIN():any {
    return this.carForm.get("VIN")
  }
  get Transmission():any{
    return this.carForm.get("Transmission")
  }
  get Engine():any{
    return this.carForm.get("Engine")
  }
  get FuelType():any{
    return this.carForm.get("FuelType")
  }
  get SellerType():any{
    return this.carForm.get("SellerType")
  }
  get SellerName():any{
    return this.carForm.get("SellerName")
  }
  get StreetName():any{
    return this.carForm.get("StreetName")
  }
  get State():any{
    return this.carForm.get("State")
  }
  get Zipcode():any{
    return this.carForm.get("Zipcode")
  }
  get Drivetrain():any{
    return this.carForm.get("Drivetrain")
  }
  get MinMPG():any{
    return this.carForm.get("MinMPG")
  }
  get MaxMPG():any{
    return this.carForm.get("MaxMPG")
  }
  get stockNum():any{
    return this.carForm.get("stockNum")
  }

}
