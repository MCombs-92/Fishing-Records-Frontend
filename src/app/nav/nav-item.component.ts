import { Component, OnInit, Input } from '@angular/core';

import { Nav } from './nav';

@Component({
  selector: "nav-item",
  templateUrl: "./nav-item.component.html",
  styleUrls: ["./nav-item.component.css"]
})

export class NavItemComponent implements OnInit {

  @Input() nav: Nav;

  constructor() {}

  ngOnInit() {

  }}