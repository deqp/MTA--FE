
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import {HttpClient }from '@angular/common/http'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http:HttpClient, private route:Router){}
  signup:FormGroup|any;

  onSubmit(){
    this.http.post<any>("http://localhost:3000/api/auth/signup", this.signup.value)
     .subscribe(res => {
      this.signup.reset();
      this.route.navigate(['login']);
       
    })} 
  }

