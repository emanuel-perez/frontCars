import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginSub!:Subscription;
  userSub!:Subscription;

  validUsername:boolean = false;
  loginAttempt:boolean = false;
  loginFail!:boolean;
  newUsername:boolean = false;

  currentUsername!:string;

  constructor(private fb:FormBuilder, private dataService:DataService, private router:Router, private uiService: UiService) { }

  ngOnInit(): void {
    this.loginSub = this.uiService.getUsernameStatus().subscribe(r => {
      this.validUsername = r;
    });
    this.userSub = this.uiService.getUsername().subscribe(r =>{
      this.currentUsername = r;
    })
  }

  // form grups
  loginInfo = this.fb.group({
    username:['',{validators:[
      Validators.required
    ]}],
    password:['',{validators:[
      Validators.required
    ]}]

  });

  signUpInfo = this.fb.group({
    newName:['',{validators:[
      Validators.required
    ]}],
    newPass:['',{validators:[
      Validators.required
    ]}]
  });

  // Login functions

  onSubmit(){
    if(this.loginInfo.valid) {
      this.loginAttempt = !this.loginAttempt;
      console.log("login attempted...")
      this.dataService.login(this.loginInfo.get('username')?.value,this.loginInfo.get('password')?.value).subscribe(r => { 
        this.validUsername = r;
        if(r == true)
        {
          this.uiService.setUsername(this.loginInfo.get('username')?.value)
          this.uiService.setUsernameStatus(true);
          this.loginFail = false;
        }
          
        else
        {
          this.loginFail = true;
        }
      });
    }
  }

  submitUser(){
    this.loginAttempt = false;
    this.newUsername = false;
    this.dataService.newUser(this.signUpInfo.get('newName')?.value,this.signUpInfo.get('newPass')?.value).subscribe(r => {
      if(r)
      {
        console.log("new user made!");
      }
      else
        console.log("username already exists")
    });
  }

  // Back Functions
  goBack(){
    this.loginAttempt = !this.loginAttempt;
    this.loginFail = false;
  }
  newUser(){
    this.loginAttempt = !this.loginAttempt;
    this.newUsername = true;
  }
  goBack2(){
    this.loginAttempt = false;
    this.newUsername = false;
  }

  signOut(){
    this.uiService.setUsernameStatus(false);
    this.loginAttempt = false;
    this.currentUsername = '';
  }

  // Get Functions for the forms

    //Login
  get username():any{
    return this.loginInfo.get("username")
  }
  get password():any{
    return this.loginInfo.get("password")
  }
    // Signup
  get newName():any{
    return this.signUpInfo.get('newName')
  }
  get newPass():any{
    return this.signUpInfo.get('newPass')
  }

  // Set functions for the forms
  set username(inp:string){
    this.loginInfo.setValue({username:inp})
  }
  set password(inp:string){
    this.loginInfo.setValue({password:inp})
  }

}
