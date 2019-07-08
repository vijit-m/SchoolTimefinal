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
import { firestore } from 'firebase/app'
import { reference } from '@angular/core/src/render3';

@Component({
  selector: 'app-studacc',
  templateUrl: './studacc.page.html',
  styleUrls: ['./studacc.page.scss'],
})
export class StudaccPage implements OnInit {

  username = '';
  password = '';
  cpassword = '';
  stucode = '';
  allusers: any ;
  want: any ;


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
    // try{
    //  this.allusers = this.afstore.collection('users',ref => ref.where('studentcode', '==', this.stucode)) ;
    //  this.want = this.allusers.valueChanges();
    // this.allusers.subscribe(res=>{
    //   console.log(res.uid)
    // })
      
    
    // }
    // catch(error)
    // {
    //   console.log(error);
    // }
    

// tslint:disable-next-line: align
    try{
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@school.com', password);
        console.log(res);


        this.afstore.doc(`users/${res.user.uid}`).set({
          username,
          isteacher: false,
          uid: res.user.uid
        });

        this.user.setUser({
            username,
            uid: res.user.uid
        });

        const studentcode = this.stucode;
        if (this.user !== undefined) {

          this.afstore.doc(`users/${this.user.getUID()}`).update({
          
             
          studentcode
    
        });
      }



        this.showAlert('SUCCESS!', 'Registration Successfull!');

        // this.gotoprofile();
        this.router.navigate(['sprofile']);
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

