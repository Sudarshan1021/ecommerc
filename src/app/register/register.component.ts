import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { PasswordValidator } from '../shared/password.validator';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  //registrationForm = new FormGroup({
  // userName: new FormControl('Sudarshan'),
  //password: new FormControl(' '),
  //confirmPassword: new FormControl(' ')

  //});

  // get userName() {
  //   return this.registrationForm.get('userName');

  // }
  // get password() {
  //   return this.registrationForm.get('password');
  // }
  constructor(private fb: FormBuilder, private storeService: StoreService, private router: Router,private user:UserService) {

  }

  Role: any = ['Admin', 'Buyer', 'Seller']


  registrationForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', Validators.required],
    role: ['', [Validators.required]]
  });
    //{ validator: PasswordValidator });
  ngOnInit() {
  }
  // Choose city using select dropdown
  changeRole(e) {
    this.roleName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get roleName() {
    return this.registrationForm.get('role');
  }


  onSubmit(formData) {
    //this.storeService.addPerson(formData);
    this.user.postUser(formData)
    .subscribe((res)=>{
      alert("Registered Successfully");
    });
    this.router.navigate(['login']);
  }
}
