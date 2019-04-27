import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Fish } from '../fish';
import { FishService } from '../fish.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-fish-detail',
  templateUrl: './fish-detail.component.html',
  styleUrls: ['./fish-detail.component.css']
})
export class FishDetailComponent implements OnInit {

  fish: Fish = new Fish;

  constructor(
    private fshsvc: FishService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.fshsvc.get(id).subscribe(resp => {
      console.log(resp);
      this.fish = resp;
      this.fshsvc.remove(this.fish).subscribe(resp => {
        console.log("Removed record", this.fish);
        this.router.navigateByUrl("/fish/list");   
      })
    })
  }

}
