import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  subAllMakes!:Subscription;
  allMakes!:any;

  allPrices = ["under $10,000", "$10,000 - $20,000", "$20,000 - $50,000", "$50,000 - $100,000", "Over $100,000"]

  constructor(private dataservice:DataService, private uiservice: UiService, private router:Router) { }

  ngOnInit(): void {
    this.subAllMakes = this.dataservice.retrieveAllMakes().subscribe(r => {
      this.allMakes = r;
      console.log(r);
    })
  }

  // Go to search
  searchSub(option:number, value:string){
    var out = "";
    if(option == 0)
      out = "0" + value;
    else
      out = "1" + value;
    this.uiservice.setSearch(out);
    this.router.navigate(['/search'])
  }

  searchByPrice(value:string){

  }


}
