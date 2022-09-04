import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  subAllMakes!:Subscription;
  allMakes!:any;

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.subAllMakes = this.dataservice.retrieveAllMakes().subscribe(r => {
      this.allMakes = r;
      console.log(r);
    })
  }


}
