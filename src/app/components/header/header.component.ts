import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goCatalog(){
    this.router.navigate(['/catalog']); // Go to Catalog Page
  }
  goHome(){
    this.router.navigate(['']); // Go Home
  }
  goLogin(){
    this.router.navigate(['/login']);// Login Page
  }

}
