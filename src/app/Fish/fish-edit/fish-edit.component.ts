import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Fish } from '../fish';
import { FishService } from '../fish.service';


@Component({
  selector: 'app-fish-edit',
  templateUrl: './fish-edit.component.html',
  styleUrls: ['./fish-edit.component.css']
})


export class FishEditComponent implements OnInit {

  fish: Fish = new Fish;

  change(): void {
    this.fshsvc.change(this.fish).subscribe(resp=> {
      console.log(resp);
      this.router.navigateByUrl("/fish/list");
    })
  }

  constructor(
    private fshsvc: FishService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.fshsvc.get(id).subscribe(resp=> {
      this.fish = resp;
    })
  }

}
