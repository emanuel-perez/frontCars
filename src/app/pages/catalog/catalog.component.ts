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

  constructor(private dataservice:DataService, private uiservice: UiService, private router:Router) { }

  ngOnInit(): void {
    this.subAllMakes = this.dataservice.retrieveAllMakes().subscribe(r => {
      this.allMakes = r;
      console.log(r);
    })
  }

  searchSub(value:string){
    this.uiservice.setSearch(value);
    this.router.navigate(['/search'])
  }


}
