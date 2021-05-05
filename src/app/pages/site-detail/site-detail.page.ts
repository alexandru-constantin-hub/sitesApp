import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteService} from './../../services/site.service';


@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.page.html',
  styleUrls: ['./site-detail.page.scss'],
})

export class SiteDetailPage implements OnInit {
  information:any = [];
  //extract from json and create separate array for addess
  address:any = [];
  //extract from json and create separate array for images
  images:any = [];
  //extract from json and create separate array for images
  contacts:any = [];


  constructor(private activatedRoute: ActivatedRoute, private siteService: SiteService) { }

  ngOnInit() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    // Get the information from the API
    this.siteService.getDetails(id).subscribe(result => {
      this.information = result;
      this.address = this.information.address;
      this.images = this.information.images;
      this.contacts = this.information.contacts.main;

    });
}


}
