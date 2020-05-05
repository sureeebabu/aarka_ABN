import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config/config.service';
import { ErrormsgService } from 'src/app/services/errormsg/errormsg.service';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { HttpClient } from '@angular/common/http';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  validationsForm: FormGroup;
  public showPassword: boolean = true;
  constructor(
    public formBuilder: FormBuilder,
    private storage: Storage,
    private router: Router,
    private config: ConfigService,
    public errorMsg: ErrormsgService,
    private auth: AuthenticationService,
    private http: HttpClient,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    // this.getData();
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  getData() {
    this.http.get('http://localhost:3000/api/v1/users/1').subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }

  async onSubmit(values) {
    console.log(values);
    this.auth.login();
    console.log(values.email);
    localStorage.setItem('email', values.email);
    this.router.navigateByUrl('/home');
  }

  ngOnDestroy() {
    this.validationsForm.reset();
  }

}
