import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  constructor(
    private callNumber: CallNumber,
    private sms: SMS,
    private androidPermissions: AndroidPermissions
  ) { }

  ngOnInit() {
  }

  smsFn() {
    // this.sms.send('7904768050', 'Hello world!');
    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(() => {
      this.sms.send('7904768050', 'Hello world!');
    }).catch((err) => {
      alert(JSON.stringify(err));
    });
  }
  callFn() {
    this.callNumber.callNumber('1234567890', true).then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
