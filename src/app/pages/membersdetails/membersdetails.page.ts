import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-membersdetails',
  templateUrl: './membersdetails.page.html',
  styleUrls: ['./membersdetails.page.scss'],
})
export class MembersdetailsPage implements OnInit {

  type = 'business';
  validationsForm: FormGroup;

  constructor(
    private callNumber: CallNumber,
    private sms: SMS,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      businessDetails: new FormControl('', Validators.compose([
        // Validators.required,
      ])),
      product: new FormControl('', Validators.compose([
        // Validators.required
      ])),
      keywords: new FormControl('', Validators.compose([
        // Validators.required
      ])),
    });
  }

  async onSubmit(values) {
    console.log(values);
  }


  smsFn() {
    this.sms.send('7904768050', 'Hello world!');
  }
  callFn() {
    this.callNumber.callNumber('1234567890', true).then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
