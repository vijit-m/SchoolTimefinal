import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Http } from '@angular/http' ;
import { auth } from 'firebase/app' ;
import { AngularFireAuth } from '@angular/fire/auth' 

@Component({
  selector: 'app-tprofile',
  templateUrl: './tprofile.page.html',
  styleUrls: ['./tprofile.page.scss'],
})
export class TprofilePage implements OnInit {

  name = '';
  gender = '';
  contact: number ;
  qualif = '';
  school = '';
  classname = '';
  subject = '';




  constructor(
    public http: Http,
    public afstore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
  }


  

  uploaddata() {

      const nameofuser = this.name ;
      const genderofuser = this.gender ;
      const contactnumber = this.contact ;
      const qualifications = this.qualif ;
      const nameofclass = this.classname ;
      const subjectname = this.subject ;
      const schoolname = this.school ;

// tslint:disable-next-line: triple-equals
      if (this.user !== undefined) {

      this.afstore.doc(`users/${this.user.getUID()}`).update({
      data: firestore.FieldValue.arrayUnion({
        nameofuser, genderofuser, contactnumber, qualifications, nameofclass, subjectname, schoolname
      })
    });

    this.router.navigate(['tphoto']) ;
  }
  }

}
