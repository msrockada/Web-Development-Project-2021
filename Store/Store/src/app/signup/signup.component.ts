import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../user.service';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthentificationService,
              // private alertService:AlertService,
              private userService: UserService){
                // redirect to home if already logged in
                if (this.authenticationService.currentUserValue) {
                    this.router.navigate(['/']);
                }
            }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
                alert("Registration successful");
                // this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            // error => {
            //     this.alertService.error(error);
            //     this.loading = false;
            // }
            );
}

}
