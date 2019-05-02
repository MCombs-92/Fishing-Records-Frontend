import { Component, OnInit } from '@angular/core';
import { Nav } from './nav';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
  })

  export class NavComponent implements OnInit {

    constructor() {}

    navs: Nav[] = [
        new Nav("Fish", "/fish/list"),
        new Nav("Rods", "/rods/list"),
    ];

    ngOnInit() {}
  }