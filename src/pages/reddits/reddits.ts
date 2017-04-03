import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';
import { AdMob } from 'ionic-native';


@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  
  items: any;
  category: any;
  limit: any;

  constructor(public navCtrl: NavController, private redditService: RedditService) {
  	this.getDefaults();  	 
  }

  ngOnInit(){
  	 this.getPosts(this.category, this.limit);
  }

  getDefaults(){
  	if(localStorage.getItem('category') != null){
  		this.category = localStorage.getItem('category');
  	}else{
  		this.category = 'sports';
  	}
  	if(localStorage.getItem('limit') != null){
  		this.limit = localStorage.getItem('limit');
  	}else{
  		this.limit = 30;
  	}
  	 
  }

  getPosts(category, limit){
  	this.redditService.getPosts(category, limit).subscribe( res => {  
  		console.log(res.data.children);		 
  		this.items = res.data.children;
  	});
  }

  viewItem(item){
  console.log(item);   
  	this.navCtrl.push(DetailsPage, {
  		item:item
  	});
  }

  loadAd(){
  	AdMob.prepareInterstitial({adId: 'ca-app-pub-6617005593427533/4624088804'})
  		.then(() => {
  			AdMob.showInterstitial();
  		});
  }

  changeCategory(){
 	this.getPosts(this.category, this.limit);
  }

}
