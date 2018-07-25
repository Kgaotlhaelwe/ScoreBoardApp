import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';



import arr from '../../app/Array';

import { ActionSheetController } from 'ionic-angular'


/**
 * Generated class for the RugbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rugby',
  templateUrl: 'rugby.html',
})
export class RugbyPage {

  team;
  teams;
  HSCORE=0;
  ASCORE=0;

  awe =arr ;



  Score=[] ;
  myTeam =[] ;
  



  constructor(public navCtrl: NavController, public navParams: NavParams ,  public actionSheetCtrl: ActionSheetController , public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RugbyPage');
    console.log(this.awe)
  }

  check(d):any{
     this.team=d;

     console.log(this.team);

  

  }

  checkS(d){
    this.team=d;

    console.log(this.team);

 

 }


  

  Trys(){

    if (this.team == "B"){
      this.ASCORE += 5;
      this.Score.push("tryawayscore");
      this.myTeam.push("tryawayteam");

      console.log(this.Score);

      console.log(this.myTeam);

     
    }
    else {
      this.HSCORE+=5;

      this.Score.push("tryhomescore");
      this.myTeam.push("tryhometeam")
    }

    

  }

  
  Penalty(){

    
    if (this.team == "B"){
      this.ASCORE += 3;
      
      this.Score.push("penaltyawayscore");
      this.myTeam.push("penaltyawayteam");
    }
    else {
      this.HSCORE+=3;
      this.Score.push("penaltyhomescore");
      this.myTeam.push("penaltyhometeam");
    }

    
  }

  Conversion(){
      
    if (this.team == "B"){
      this.ASCORE += 2;
      this.Score.push("awayscore");
      this.myTeam.push("awayteam")
    
    
    }
    else {
      this.HSCORE+=2;

      this.Score.push("homescore");
      this.myTeam.push("hometeam")
    }

    console.log(this.Score);
  }

  Reset(){

    this.ASCORE=0;
    this.HSCORE=0;
  }


  Undo(){

    const actionSheet = this.actionSheetCtrl.create({
      title: 'Undo your Mistakes',
      buttons: [
        {
          text: 'TRY',
          role: 'destructive',
          handler: () => {

           
            if (this.team == "B"){

              console.log("Kabelo");
              
              for(var x = 0; x< this.Score.length; x++ ){
                console.log("A");
              
                if(this.Score[x] == "tryawayscore" && this.myTeam[x] == "tryawayteam"){
                  console.log("B");
                  this.ASCORE -= 5;
                  this.Score.splice(x,1);
                  this.myTeam.splice(x,1);
                  break;}


                  else if(x = this.Score.length - 1){
                    const toast = this.toastCtrl.create({
                      message: 'Hello.. The team has no tries',
                      duration: 2000
                    });
                    toast.present();
           
                  }}}

              else{

                console.log("VINCENT");

                for(var x = 0; x< this.Score.length; x++ ){
                  console.log("VINCENTSS");
                  console.log(this.Score[x]);
                  console.log(this.myTeam[x]);
                  if(this.Score[x] == "tryhomescore" && this.myTeam[x] == "tryhometeam"){
                  

                    console.log("VINCENTZZ");
                    this.HSCORE-=5;
                    this.Score.splice(x,1);
                    this.myTeam.splice(x,1);
                    break;}
  
  
                    else if(x = this.Score.length - 1){
                      const toast = this.toastCtrl.create({
                        message: 'Hello.. The team has no tries',
                        duration: 2000
                      });
                      toast.present();


              }
             
            }}

           

            }


          


           // console.log('Destructive clicked');
          
        },{
          text: 'Penalty',
          handler: () => {



            
            if (this.team == "B"){
              console.log("Vincent")
             
              for(var x = 0; x< this.Score.length; x++ ){

                console.log("Vincentss");
                console.log(this.Score[x]);

                console.log(this.myTeam[x]);

              
                


               
                if(this.Score[x] == "penaltyawayscore" && this.myTeam[x] == "penaltyawayteam"){
                  console.log("Vincentzz")
                  this.ASCORE -= 3;
                  this.Score.splice(x,1);
                  this.myTeam.splice(x,1);
                  break;}


                  else if(x = this.Score.length - 1){
                    const toast = this.toastCtrl.create({
                      message: 'Hello.. The team has no penalty',
                      duration: 2000
                    });
                    toast.present();
                  }}}
             
             
              
              else{

                for(var x = 0; x< this.Score.length; x++ ){
                  if(this.Score[x] == "penaltyhomescore" && this.myTeam[x] == "penaltyhometeam"){
                    this.ASCORE -= 3;
                    this.Score.splice(x,1);
                    this.myTeam.splice(x,1);
                    break;}
  
  
                    else if(x = this.Score.length - 1){
                      const toast = this.toastCtrl.create({
                        message: 'Hello.. The team has no tries',
                        duration: 2000
                      });
                      toast.present();


              }
            }}}
         



        },{
          text: 'CONVERSION',
          role: 'cancel',
          handler: () => {
            if (this.team == "B"){

              for(var x = 0; x< this.Score.length; x++ ){
                if(this.Score[x] == "homescore" && this.myTeam[x] == "hometeam"){
                  this.ASCORE -= 3;
                  this.Score.splice(x,1);
                  this.myTeam.splice(x,1);
                  break;}


                  else if(x = this.Score.length - 1){
                    const toast = this.toastCtrl.create({
                      message: 'Hello.. The team has no Convertion',
                      duration: 2000
                    });
                    toast.present();
                  }}
            }

            else{

              for(var x = 0; x< this.Score.length; x++ ){
                if(this.Score[x] == "tryawayscore" && this.myTeam[x] == "tryawayteam"){
                  this.ASCORE -= 3;
                  this.Score.splice(x,1);
                  this.myTeam.splice(x,1);
                  break;}


                  else if(x = this.Score.length - 1){
                    const toast = this.toastCtrl.create({
                      message: 'Hello.. The team has no tries',
                      duration: 2000
                    });
                    toast.present();


            }
          }}


            
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();

   

    
      

    }

   
     
      
  



  }


  

