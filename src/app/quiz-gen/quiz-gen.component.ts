import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';


@Component({
  selector: 'app-quiz-gen',
  templateUrl: './quiz-gen.component.html',
  styleUrls: ['./quiz-gen.component.css']
})
export class QuizGenComponent {

  countrylist=['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4']
  formatlist=['Format one', 'Format two', 'format three', 'format four']
  subjectlist=['Subject 1','Subject 2','Subject 3','Subject 4']
  termlist=['']

  constructor(private builder:FormBuilder){

  }
  ngOnInit(): void {
    this.customerform.setValue({name:'Nihira Techiees',email:'nihiratechiees@gmail.com',phone:'77678899',
  country:'',subject:'',term:'',address:'',dob:new Date(2001,2,3),gender:'Male',status:true, format:'Select Format Type'})
  }


  customerform=this.builder.group({
   name:this.builder.control('',Validators.required),
   email:this.builder.control('',Validators.compose([Validators.required,Validators.required]) ),
   phone:this.builder.control('',Validators.required),
   country:this.builder.control('',Validators.required),
   subject:this.builder.control('',Validators.required),
   address:this.builder.control('',Validators.required),
   term:this.builder.control('',Validators.required),
   dob:this.builder.control(new Date(2000,3,25)),
   gender:this.builder.control('Male'),
   status:this.builder.control(true),
   format:this.builder.control('',Validators.required),
  });

  SaveCustomer(){
   console.log(this.customerform.value);
  }

  clearform(){
    this.customerform.reset();

}}
