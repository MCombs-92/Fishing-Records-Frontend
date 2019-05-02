import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Rod } from '../rod';
import { RodService } from '../rod.service';

@Component({
  selector: 'app-rod-list',
  templateUrl: './rod-list.component.html',
  styleUrls: ['./rod-list.component.css']
})
export class RodListComponent implements OnInit {

  constructor(
    private rodsvc: RodService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  rods:Rod[];
  removed: Boolean = false;

  


  ngOnInit() {
    this.rodsvc.list().subscribe(resp => {
      this.rods = resp;
      console.log(resp);
    })
  }

}
