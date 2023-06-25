import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  loginSub!:Subscription;


  validUsername:boolean = false;

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
    Price:['',{validators:[
      Validators.required
    ]}],
    VIN:['',{validators:[
      Validators.required
    ]}],
  });

  submitCar(){

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

}
