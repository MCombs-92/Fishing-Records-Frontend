import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Fish } from '../fish';
import { FishService } from '../fish.service';


@Component({
  selector: 'app-fish-create',
  templateUrl: './fish-create.component.html',
  styleUrls: ['./fish-create.component.css']
})


export class FishCreateComponent implements OnInit {

  fish: Fish = new Fish;

  create(): void {
    this.fishsvc.create(this.fish).subscribe(resp=> {
      console.log(resp);
      this.router.navigateByUrl("/fish/list");
    })
  }

  constructor(
    private fishsvc: FishService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

}
