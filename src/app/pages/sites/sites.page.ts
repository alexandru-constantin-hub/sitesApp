import { SiteService} from './../../services/site.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { OrderByPipe } from './../../services/order-by.pipe';



@Component({
  selector: 'app-sites',
  templateUrl: './sites.page.html',
  styleUrls: ['./sites.page.scss'],
})
export class SitesPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  sites = [];
  infiniteScrollEvents: number = 10;

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.siteService.sendGetRequest().subscribe((data: any[])=>{
      this.sites = data.slice(0,10);
    })

  }

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
