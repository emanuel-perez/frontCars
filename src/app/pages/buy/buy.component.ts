import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  vinSub!:Subscription;
  loginSub!:Subscription;

  currentVIN:string = "";
  validUsername = false;

  constructor(private uiservice:UiService) { }

  ngOnInit(): void {
    this.vinSub = this.uiservice.getVIN().subscribe(r=>{
      this.currentVIN = r;
    });
    this.loginSub = this.uiservice.getUsernameStatus().subscribe(r => {
      this.validUsername = r;
    });
  }

  validVIN(inp:string){
    if(inp == "" || inp == "0000")
      return false;
    else
      return true;
  }

}
