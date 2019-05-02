import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Rod } from '../rod';
import { RodService } from '../rod.service';

@Component({
  selector: 'app-rod-edit',
  templateUrl: './rod-edit.component.html',
  styleUrls: ['./rod-edit.component.css']
})
export class RodEditComponent implements OnInit {

  constructor(
    private rodsvc: RodService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  rod:Rod = new Rod();

  change(): void {
    this.rodsvc.change(this.rod).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/rods/list");
    })
  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.rodsvc.get(id).subscribe(resp => {
      this.rod = resp;
      console.log(resp);
    })
  }

}
