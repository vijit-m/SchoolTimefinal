import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Http } from '@angular/http' ;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  firstname = '';
  lastname = '';
  classval: number;
  phoneno: number;
  section = '';
  admno: number;
  father = '';
  mother = '';



  constructor(
// tslint:disable-next-line: deprecation
    public http: Http,
    public afstore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
  }

  uploaddata() {

      const newfirstname = this.firstname;
      const newlastname = this.lastname ;
      const newclassval = this.classval ;
      const newphoneno = this.phoneno ;
      const newsection = this.section ;
      const newadmno = this.admno ;
      const newfather = this.father ;
      const newmother = this.mother ;

      this.afstore.doc(`users/${this.user.getUID()}`).update({
      posts: firestore.FieldValue.arrayUnion({
        newfirstname, newlastname, newclassval, newphoneno, newsection, newadmno, newfather, newmother
      })
    });
  }

}
