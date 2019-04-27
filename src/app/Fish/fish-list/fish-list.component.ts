import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Fish } from '../fish';
import { FishService } from '../fish.service';
import { FishDetailComponent } from '../fish-detail/fish-detail.component'

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css']
})
export class FishListComponent implements OnInit {

  fish: Fish[];
  f: Fish;

  Removed: boolean = false;
  
  Markforremoval(): void {
    this.Removed = !this.Removed;
  }

  Header = "Fishing Records";

  // Remove(): void {
  //   this.fishsvc.remove(this.detail.fish).subscribe(resp => {
  //     console.log("Removed record", this.detail.fish);
  //     this.router.navigateByUrl("/fish/list");
  //   })
  // }

  constructor(
    private fishsvc: FishService,
    private router: Router,
    private route: ActivatedRoute,
    // private detail: FishDetailComponent
    ) { }

  ngOnInit() {

    this.fishsvc.list().subscribe(resp => {
      this.fish = resp;
      console.log(this.fish);
    })

  }

}
