import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-membersdetails',
  templateUrl: './membersdetails.page.html',
  styleUrls: ['./membersdetails.page.scss'],
})
export class MembersdetailsPage implements OnInit {

  type = 'business';
  constructor(
    private callNumber: CallNumber,
    private sms: SMS
  ) { }

  ngOnInit() {
  }

  smsFn() {
    this.sms.send('7904768050', 'Hello world!');
  }
  callFn() {
    this.callNumber.callNumber('1234567890', true).then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
