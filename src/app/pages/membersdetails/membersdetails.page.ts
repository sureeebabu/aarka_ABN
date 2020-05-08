import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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
    private androidPermissions: AndroidPermissions,
    private socialSharing: SocialSharing
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

  shareFn() {
    this.socialSharing.shareViaWhatsApp('Arun Kumar details... !', '', '').then((res) => {
      console.log(res);
      // Success
    }).catch((e) => {
      alert(JSON.stringify(e));
    });
  }

  async onSubmit(values) {
    console.log(values);
  }


  smsFn() {
    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(() => {

      const options = {
        replaceLineBreaks: false,
        android: {
          intent: 'INTENT'
        }
      };
      this.sms.send('1234567890', 'Hello world!', options).then(result => {
        console.log(result);
      }, error => {
        console.log(error);
      });
    }).catch((err) => {
      alert(JSON.stringify(err));
    });
  }
  callFn() {
    this.callNumber.callNumber('1234567890', true).then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
