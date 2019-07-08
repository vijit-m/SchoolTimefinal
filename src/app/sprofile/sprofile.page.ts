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
  selector: 'app-sprofile',
  templateUrl: './sprofile.page.html',
  styleUrls: ['./sprofile.page.scss'],
})
export class SprofilePage implements OnInit {

  nameofstud = '';
  gender = '';
  role = ''
  nameofpar = '';
  contact: number ;
  hobbies = '';
  school = '';
  classname = '';
  medical = '';
  emcontact: number;
  rollno: number ;




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

      const namestudent = this.nameofstud ;
      const genderstudent = this.gender ;
      const contactnumber = this.contact ;
      const rollnumber = this.rollno ;
      const nameofclass = this.classname ;
      const hobby = this.hobbies ;
      const emergencycontact = this.emcontact ;
      const schoolname = this.school ;
      const roleofuser = this.role ;
      const nameofparent = this.nameofpar ;
      const medicalconditions = this.medical ;

// tslint:disable-next-line: triple-equals
      if (this.user !== undefined) {

      this.afstore.doc(`users/${this.user.getUID()}`).update({
      data: firestore.FieldValue.arrayUnion({
        namestudent, genderstudent, contactnumber, rollnumber, nameofclass, hobby, emergencycontact, schoolname, roleofuser, nameofparent, medicalconditions
      })
    });

    this.router.navigate(['sphoto']) ;
  }
  }

}

