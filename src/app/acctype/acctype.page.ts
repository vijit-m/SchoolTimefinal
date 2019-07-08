import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acctype',
  templateUrl: './acctype.page.html',
  styleUrls: ['./acctype.page.scss'],
})
export class AcctypePage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  async gototeacher() {
    this.router.navigate(['/teachacc']);
  }
  async gotoparent() {
    this.router.navigate(['/studacc']);
  }

}
