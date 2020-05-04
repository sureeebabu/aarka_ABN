import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config/config.service';
import { ErrormsgService } from 'src/app/services/errormsg/errormsg.service';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.page.html',
  styleUrls: ['./forgotpwd.page.scss'],
})
export class ForgotpwdPage implements OnInit {
  validationsForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private storage: Storage,
    private router: Router,
    private config: ConfigService,
    public errorMsg: ErrormsgService,
  ) { }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      // password: new FormControl('', Validators.compose([
      //   Validators.minLength(5),
      //   Validators.required
      // ])),
    });
  }

  async onSubmit(values) {
    console.log(values);
  }


}
