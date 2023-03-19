import { Component, OnInit } from '@angular/core';import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user:any={};
  registrationForm:FormGroup={} as FormGroup;
  constructor(private fb:FormBuilder, private userService:UserService) {

   }

  ngOnInit() {
    // this.registrationForm=new FormGroup(
    //   {
    //     userName:new FormControl(null,Validators.required),
    //     email: new FormControl(null,[Validators.required, Validators.email]),
    //     password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
    //     confirmPassword: new FormControl(null,[Validators.required]),
    //   }
    // );

    // this.registrationForm.addValidators(
    //   this.matchValidator(this.registrationForm.get('password'), this.registrationForm.get('confirmPassword'))
    // );
    this.createRegitrationForm();
  }
  createRegitrationForm(){
    this.registrationForm= this.fb.group({
        userName:[null,Validators.required],
        email: [null,[Validators.required, Validators.email]],
        password: [null,[Validators.required, Validators.minLength(8)]],
        confirmPassword: [null,[Validators.required]],
    },{validators:this.passwordMatchingValidators});
  }
   matchValidator(
    password: AbstractControl | null,
    confirmPassword: AbstractControl |null ): ValidatorFn {
    return () => {
      if (password && confirmPassword && password.value !== confirmPassword.value)
        return { notmatched: true };
      return null;
    };
  }

passwordMatchingValidators(control:FormGroup ){

  return control.get('password')?.value=== control.get('confirmPassword')?.value
  ?null:{notmatched:true}

}

get userName(){
  return this.registrationForm.get('userName') as FormControl;
}

get email(){
  return this.registrationForm.get('email') as FormControl;
}

get password(){
  return this.registrationForm.get('password') as FormControl;
}

get confirmPassword(){
  return this.registrationForm.get('confirmPassword') as FormControl;
}
onSubmit(): void{
    console.log(this.registrationForm);
    this.user=Object.assign(this.user, this.registrationForm.value)
    this.userService.addUser(this.user);
  }

}
