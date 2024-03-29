import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SearchComponent } from './pages/search/search.component';
import { OrderByPipe } from './components/orderby';
import { NewEntryComponent } from './pages/new-entry/new-entry.component';
import { VehicleComponent } from './pages/vehicle/vehicle.component';
import { BuyComponent } from './pages/buy/buy.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path:'catalog', component:CatalogComponent},
  {path: 'login', component:LoginPageComponent},
  {path:'search', component:SearchComponent},
  {path:'newEntry', component:NewEntryComponent},
  {path:'vehicle', component:VehicleComponent},
  {path:'buy', component:BuyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CatalogComponent,
    LoginPageComponent,
    SearchComponent,
    OrderByPipe,
    NewEntryComponent,
    VehicleComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing: false}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
