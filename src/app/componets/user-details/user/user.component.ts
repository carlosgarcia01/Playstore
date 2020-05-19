import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private userForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  /* Getters */
  public get getUserForm() : FormGroup {
    return this.userForm;
  }
  
  public get invalidUserName() : boolean {
    return this.invalidFiel('Username');
  }
  public get invalidPassword() : boolean {
    return this.invalidFiel('Password');
  }
  public get invalidEmail() : boolean {
    return this.invalidFiel('Email');
  }
  public get invalidAge() : boolean {
    return this.invalidFiel('Age');
  }
  public get invalidDocument() : boolean {
    return this.invalidFiel('Document');
  }
  public get invalidPhone() : boolean {
    return this.invalidFiel('Phone');
  }
  public get invalidImageUrl() : boolean {
    return this.invalidFiel('ImageUrl');
  }
  
  invalidFiel(fiel:string){
    return this.userForm.get(fiel).invalid && this.userForm.get(fiel).touched;

  }

  



  createForm(){
    this.userForm= this.fb.group({
      Username:['',[Validators.required,Validators.maxLength(50)]],
      Password:['',[Validators.required,Validators.maxLength(50)]],
      Email:['',[Validators.required,Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$')]],
      Age:['',[Validators.required,Validators.max(120),Validators.min(10)]],
      Document:['',[Validators.required,Validators.maxLength(10),Validators.minLength(5)]],
      Phone:['',[Validators.required,Validators.maxLength(10),Validators.minLength(7)]],
      ImageUrl:['']

    })
  }
  save(){
    console.log('hello');
  }

}
