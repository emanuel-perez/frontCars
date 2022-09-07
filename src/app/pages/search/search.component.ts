import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value!:string;
  searchValueSub!:Subscription;

  constructor(private uiService: UiService) { 

  }

  ngOnInit(): void {
    this.searchValueSub = this.uiService.getSearchValue().subscribe(r => {
      this.value = r;
    })
  }

}
