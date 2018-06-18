import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import {LoginService} from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'fuse-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations : fuseAnimations
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFormErrors: any;
  loginErrorMessage: string;
  showLoadingBar: boolean;


  constructor(public authService: LoginService, private router: Router, private formBuilder: FormBuilder, private db: AngularFireDatabase) {
    this.loginFormErrors = {
      email   : {},
      password: {}
    };

    router.events.subscribe(
      (event) => {
        if ( event instanceof NavigationStart )
        {
          this.showLoadingBar = true;
        }
        if ( event instanceof NavigationEnd )
        {
          this.showLoadingBar = false;
        }
      });

  }

  ngOnInit() {

  this.loginForm = this.formBuilder.group({
    email   : ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  this.loginForm.valueChanges.subscribe(() => {
  this.onLoginFormValuesChanged();
});
  }

  signInWithEmail(email, password) {
    this.showLoadingBar = true;

    this.authService.signInRegular(email.value, password.value)
      .then((res) => {
        this.db.database.goOnline();
        this.router.navigate(['dashboard']);

      })
      .catch((err) => {
        this.loginErrorMessage = err.message;
        this.showLoadingBar = false;
      } );

  }

  onLoginFormValuesChanged()
  {
    for ( const field in this.loginFormErrors )
    {
      if ( !this.loginFormErrors.hasOwnProperty(field) )
      {
        continue;
      }

      // Clear previous errors
      this.loginFormErrors[field] = {};

      // Get the control
      const control = this.loginForm.get(field);

      if ( control && control.dirty && !control.valid )
      {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }


}
