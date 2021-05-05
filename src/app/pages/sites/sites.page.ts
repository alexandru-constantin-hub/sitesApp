import { SiteService} from './../../services/site.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.page.html',
  styleUrls: ['./sites.page.scss'],
})

export class SitesPage implements OnInit {
  //Infinite scroll
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  sites = [];

  //define how many records we want at the start
  infiniteScrollEvents: number = 10;

  constructor(private siteService: SiteService) { }


  //get the first records from API and wait
  ngOnInit() {
    this.siteService.sendGetRequest().subscribe((data: any[])=>{
      this.sites = data.slice(0,10);
    })
  }

  //on scroll get the rest of data, for every scroll add 10 records

  loadData(event) {
    setTimeout(() => {
      this.siteService.sendGetRequest().subscribe((data: any[])=>{
        this.sites = data.slice(0,this.infiniteScrollEvents+10);
        this.infiniteScrollEvents +=10;
      })
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.sites.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

 }
