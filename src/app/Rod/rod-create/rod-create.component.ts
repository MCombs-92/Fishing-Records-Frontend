import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Rod } from '../rod';
import { RodService } from '../rod.service';

@Component({
  selector: 'app-rod-create',
  templateUrl: './rod-create.component.html',
  styleUrls: ['./rod-create.component.css']
})
export class RodCreateComponent implements OnInit {

  constructor(
    private rodsvc:RodService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  rod:Rod = new Rod;

  create(): void {
    this.rodsvc.create(this.rod).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/rods/list");
    })
  }

  ngOnInit() {
  }

}
