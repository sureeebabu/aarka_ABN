import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  showSearchbar: boolean;
  term = '';
  public fullData = [];
  public json = [
    {
      img: '../../../assets/handshake.png',
      title: 'Consulting'
    },
    {
      img: '../../../assets/diamond.png',
      title: 'Diamonds'
    },
    {
      img: '../../../assets/education.png',
      title: 'Education'
    },
    {
      img: '../../../assets/electrical.png',
      title: 'Electrical'
    },
    {
      img: '../../../assets/energy.png',
      title: 'Energy'
    },
    {
      img: '../../../assets/leaf.png',
      title: 'Environment'
    },
    {
      img: '../../../assets/financial.png',
      title: 'Financial'
    },
    {
      img: '../../../assets/government.png',
      title: 'Government'
    },
    {
      img: '../../../assets/healthcare.png',
      title: 'Health Care'
    },
  ];

  constructor(
    private storage: Storage,
    private route: Router,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    this.fullData = this.json;
  }

  onCancelSearch() {
    //  alert('ask');
    this.showSearchbar = false;
    // this.json = this.fullData;
    console.log(this.json);
  }

  // onSearch(event) {
  //   // console.log(event.target.value);
  //   const searchTxt = event.target.value;
  //   if (searchTxt !== '' && searchTxt != null && searchTxt !== undefined) {
  //     this.json = this.json.filter((item) => {
  //       return item.title.toLowerCase().indexOf(searchTxt.toLowerCase()) > -1;
  //     });
  //   } else {
  //     this.json = this.fullData;

  //   }
  // }

  logutfn() {
    this.storage.clear();
    this.route.navigateByUrl('/login');
  }
}
