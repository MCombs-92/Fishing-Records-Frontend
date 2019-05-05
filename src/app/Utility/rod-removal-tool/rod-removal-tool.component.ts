import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Rod } from '../../rod/rod';
import { RodService } from '../../rod/rod.service';

@Component({
  selector: 'app-rod-removal-tool',
  templateUrl: './rod-removal-tool.component.html',
  styleUrls: ['./rod-removal-tool.component.css']
})
export class RodRemovalToolComponent implements OnInit {

  constructor(   
    private rodsvc: RodService,
    private router: Router,
    private route: ActivatedRoute) { }

    rod:Rod = new Rod;

  ngOnInit() {

    let id = this.route.snapshot.params.id;

    this.rodsvc.get(id).subscribe(resp => {
      this.rod = resp;
      this.rod.Markedforremoval = !this.rod.Markedforremoval;
      this.rodsvc.change(this.rod).subscribe(resp => {
        if(this.rod.Markedforremoval) {
          console.log("Record has been marked for removal, please confirm to continue or cancel to unmark")
          this.router.navigateByUrl("/rods/list")
        }
        else {
          console.log("Record is no longer marked for removal")
          this.router.navigateByUrl("/rods/list")
        }
      })
    })



  }

}
