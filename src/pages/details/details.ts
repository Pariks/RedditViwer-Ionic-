import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DomSanitizer } from '@angular/platform-browser';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({  
  templateUrl: 'details.html'
})
 
export class DetailsPage {
  
  item: any; 
  
  constructor(public navCtrl: NavController, public params: NavParams, private sanitizer: DomSanitizer,  public platform: Platform, public actionsheetCtrl: ActionSheetController) {
  	this.item = params.get('item');
  }

  sanitizeUrl(url){  
  	return this.sanitizer.bypassSecurityTrustResourceUrl(url);
   }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({      
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('android') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('android') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('android') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
