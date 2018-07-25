import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 
import {RugbyPage} from '../../pages/rugby/rugby' ;
import {Teams} from  '../../app/object';
import { AlertController } from 'ionic-angular';




import arr from '../../app/Array';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  TeamA;
  TeamB ;

  constructor(public navCtrl: NavController , public alertCtrl: AlertController) {

  }


  Startbtn(){

 
    if(this.TeamA != undefined && this.TeamB != undefined){

      if(this.TeamA == this.TeamB){ const alert = this.alertCtrl.create({
        title: 'Confrimation',
        subTitle: 'vv',
        buttons: ['OK']
      });
      alert.present();}
      
      else {



        let obj = new Teams(this.TeamA ,this.TeamB) ;

        arr.push(obj) ;
    
        console.log(arr);
    
        this.navCtrl.push(RugbyPage);
      }
      
     
  } else {

    const alert = this.alertCtrl.create({
      title: 'Confrimation',
      subTitle: 'Enter both team',
      buttons: ['OK']
    });
    alert.present();


  }
   
  }

}
