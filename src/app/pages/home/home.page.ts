import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private storage: Storage,
    private route: Router
  ) { }

  ngOnInit() {
  }

  logutfn() {
    this.storage.clear();
    this.route.navigateByUrl('/login');
  }
}
