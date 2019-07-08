import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http' ;
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadphoto',
  templateUrl: './uploadphoto.page.html',
  styleUrls: ['./uploadphoto.page.scss'],
})
export class UploadphotoPage implements OnInit {


  imageURL: string;
  desc: string;
// tslint:disable-next-line: deprecation
  constructor(public http: Http,
              public afstore: AngularFirestore,
              public user: UserService,
              public alertController: AlertController,
              public router: Router
              ) { }

  ngOnInit() {
  }


   setpicture() {
    const image = this.imageURL;
    const desc = this.desc;
    if (this.user.getUID === undefined) {
       console.log('USER IS UNDEFINED');
    }


    try {this.afstore.doc(`users/${this.user.getUID()}`).update({
          posts: firestore.FieldValue.arrayUnion({
            image, desc
          })
        });
         this.showAlert('Set Your Profile', 'Please enter your details on the next page');
         this.router.navigate(['profile']);
        } catch (error) {
        console.log(error.message); }

  }

  fileChanged(event) {
    const files = event.target.files;
    console.log(files);
    const data = new FormData();

    data.append('file', files[0]);
    data.append('UPLOADCARE_STORE', '1');
    data.append('UPLOADCARE_PUB_KEY', '7d10e18faebad1a4ef52');

// tslint:disable-next-line: no-shadowed-variable
    this.http.post('https://upload.uploadcare.com/base/', data).subscribe(event => {
      console.log(event);
      this.imageURL = event.json().file;
    });


  }

  async showAlert(header: string, message: string) {
    const alert =  await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
}

}
