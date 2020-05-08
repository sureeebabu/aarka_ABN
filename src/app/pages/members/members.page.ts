import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  constructor(
    private callNumber: CallNumber,
    private sms: SMS,
    private androidPermissions: AndroidPermissions,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  whatsAppShare() {
    const headers1 = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post('https://api.whatsapp.com/send?phone=917904768050&amp;text=helloworld', { headers: headers1  }).subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
    //  https://api.whatsapp.com/send?phone=919756054965&amp;text=I%20want%20to%20find%20out%20about%20your%20products
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
