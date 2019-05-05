import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Fish } from '@fish/fish'
import { FishService } from '@fish/fish.service';

@Component({
  selector: 'app-removal-tool',
  templateUrl: './removal-tool.component.html',
  styleUrls: ['./removal-tool.component.css']
})
export class RemovalToolComponent implements OnInit {

  constructor(   
    private fishsvc: FishService,
    private router: Router,
    private route: ActivatedRoute) { }

    fish:Fish = new Fish;

  ngOnInit() {

    let id = this.route.snapshot.params.id;

    this.fishsvc.get(id).subscribe(resp => {
      this.fish = resp;
      this.fish.Markedforremoval = !this.fish.Markedforremoval;
      this.fishsvc.change(this.fish).subscribe(resp => {
        if(this.fish.Markedforremoval) {
          console.log("Record has been marked for removal, please confirm to continue or cancel to unmark")
          this.router.navigateByUrl("/fish/list")
        }
        else {
          console.log("Record is no longer marked for removal")
          this.router.navigateByUrl("/fish/list")
        }
      })
    })



  }

}
