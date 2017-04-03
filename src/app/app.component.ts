import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMob } from 'ionic-native';
import { RedditService } from './services/reddit.service';
 
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html',
  providers: [RedditService]
})
export class MyApp {
  rootPage = TabsPage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
 
      let options = {
        adId: 'ca-app-pub-6617005593427533/5740895207',        
        isTesting: false

      };

      AdMob.createBanner(options).then(() => {
        AdMob.showBanner(8);
      });

 
 AdMob.prepareInterstitial({ adId: 'ca-app-pub-6617005593427533/4624088804'} );
  AdMob.showInterstitial();
  
  
  
  //!!!add the code here!!! - so, just paste what I wrote above:
  setInterval(AdMob.showInterstitial, 2*60*1000);
 
    });
  }
}
