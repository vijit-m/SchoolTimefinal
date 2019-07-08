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
import { firestore } from 'firebase/app';


@Component({
  selector: 'app-codegen',
  templateUrl: './codegen.page.html',
  styleUrls: ['./codegen.page.scss'],
})
export class CodegenPage implements OnInit {

  cal: any;

  constructor(
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
    public user: UserService,
    public alert: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }


  gencode() {
     
      this.cal = this.makeid(12);
      this.showAlert("YOUR CODE IS:", this.cal) ;
      const studentcode =  this.cal
      
      if (this.user !== undefined) {

      this.afstore.doc(`users/${this.user.getUID()}`).update({
      
         studentcode
      

    });
  }

  this.router.navigate(['tprofile']);

     
    
  }

   makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
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
