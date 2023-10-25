import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import {HttpClient }from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit {

  constructor(private http:HttpClient, private route:Router){}
  signup:FormGroup|any;

  ngOnInit(): void {
   
      this.signup = new FormGroup({
        'firstName': new FormControl(),
        'lastName': new FormControl(),
        'userName': new FormControl(),
        'password': new FormControl()
    })
  }
  onSubmit(){
  this.http.post<any>("http://localhost:3000/api/auth/signup", this.signup.value)
   .subscribe(res => {
    this.signup.reset();
    this.route.navigate(['login']);
     
  })} 
}

