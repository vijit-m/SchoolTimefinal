import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { stringify } from '@angular/compiler/src/util';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController } from '@ionic/angular';
// import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';

@Component({
  selector: 'app-teachacc',
  templateUrl: './teachacc.page.html',
  styleUrls: ['./teachacc.page.scss'],
})
export class TeachaccPage implements OnInit {

  username = '';
  password = '';
  cpassword = '';


  constructor(public afAuth: AngularFireAuth,
              public afstore: AngularFirestore,
              public user: UserService,
              public alert: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  async register() {
    const {username, password, cpassword} = this;
    if (password !== cpassword) {
      this.showAlert('ERROR!!', 'Passwords do not match.');
      return console.error('Passwords dont match');
    }

    try {
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@school.com', password);
        console.log(res);


        this.afstore.doc(`users/${res.user.uid}`).set({
          username,
          isteacher: true,
          uid: res.user.uid
        });

        this.user.setUser({
            username,
            uid: res.user.uid
        });



        this.showAlert('SUCCESS!', 'Registration Successfull!');

        // this.gotoprofile();
        this.router.navigate(['codegen']);
      } catch (error) {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
           this.showAlert('ERROR!!', 'Email is already in use.');
        }
        if (error.code === 'auth/weak-password') {
           this.showAlert('ERROR!!', 'Weak password');
        }
      }


  }

  async showAlert(header: string, message: string) {
          const alert =  await this.alert.create({
            header,
            message,
            buttons: ['OK']
          });

          await alert.present();
      }


}
