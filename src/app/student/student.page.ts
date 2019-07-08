import { Component, OnInit } from '@angular/core';

import { School } from './school.model' ;

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

// import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})




// constructor(public alertController: AlertController) {}







export class StudentPage implements OnInit {

  schools: School[] = [
    {
      id : 'Schoolimg',
      title : 'Mount Gomera Public School',
// tslint:disable-next-line: max-line-length
      imageUrl : 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_3/v1553531051/elmhurst205org/w555mh8d5vjlzk18skxj/YorkHighSchool.jpg'
    }
  ];

  username = '';
  password = '';



// tslint:disable-next-line: max-line-length
  constructor(public afAuth: AngularFireAuth , public alertController: AlertController, private router: Router, public user: UserService) { }


  


  ngOnInit() {
  }

  async presentalert(themsg: string)
   {
       if(themsg==="auth/user-not-found")
       {
        const alert = await this.alertController.create({
          header: 'USER DOES NOT EXIST',
         
          message: 'You need to register first.',
          buttons: ['OK']
        });

        alert.present();
       }
       if(themsg==="auth/wrong-password")
       {
        const alert = await this.alertController.create({
          header: 'WRONG PASSWORD',
         
          message: '',
          buttons: ['OK']
        });

        alert.present();
       }
   }

  async login()
  {
    const {username, password} = this
    try{
         const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@school.com', password)
         this.router.navigate(['dashboard']);
    }
    catch(err)
    {
      console.dir(err)
      this.presentalert(err.code)
         
    }
  }

  async gotonextpage()
  {
    this.router.navigate(['/acctype']);
  }
  

}
