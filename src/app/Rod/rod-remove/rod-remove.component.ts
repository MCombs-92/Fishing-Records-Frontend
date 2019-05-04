import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Rod } from '../rod';
import { RodService } from '../rod.service';

@Component({
  selector: 'app-rod-remove',
  templateUrl: './rod-remove.component.html',
  styleUrls: ['./rod-remove.component.css']
})
export class RodRemoveComponent implements OnInit {

  constructor(
    private rodsvc:RodService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  rod: Rod = new Rod;

  ngOnInit() {

    let id = this.route.snapshot.params.id;
    this.rodsvc.get(id).subscribe( resp => {
      this.rod = resp;
      console.log(resp);
      this.rodsvc.remove(this.rod).subscribe(resp  => {
        console.log("Removed record", this.rod);
        this.router.navigateByUrl("/rods/list");
      })
    })


  }

}
