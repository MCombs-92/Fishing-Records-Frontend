import { Component, OnInit } from '@angular/core';
import { Fish } from '../fish';
import { FishService } from '../fish.service';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css']
})
export class FishListComponent implements OnInit {

  fish: Fish[];

  constructor(private fishsvc: FishService) { }

  ngOnInit() {

    this.fishsvc.list().subscribe(resp => {
      this.fish = resp;
      console.log(this.fish);
    })

  }

}
