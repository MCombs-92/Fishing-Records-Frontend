import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Fish } from '../fish';
import { FishService } from '../fish.service';
import { FishDetailComponent } from '../fish-detail/fish-detail.component'
import { element, elementAttribute } from '@angular/core/src/render3';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html',
  styleUrls: ['./fish-list.component.css']
})
export class FishListComponent implements OnInit {

  fish: Fish[];
  f: Fish = new Fish;

  Removed: boolean = false;

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

    let id = this.route.snapshot.params.id;
    this.fishsvc.get(id).subscribe( resp => {
      this.f = resp;
      if(this.f == null) {
        console.log("No record returned")
      }
      else {
        this.f.Markedforremoval = !this.f.Markedforremoval;
        this.fishsvc.change(this.f).subscribe(resp => {
          console.log(resp, this.f)
        })
        this.router.navigateByUrl("/fish/list")
      }

      
    })
    this.fishsvc.list().subscribe(resp => {
      this.fish = resp;
      console.log(this.fish);
    })

  }

}
