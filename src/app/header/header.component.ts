import { Component, Input , OnInit} from '@angular/core';
import {CdkMenu, CdkMenuItem} from '@angular/cdk/menu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
 
 
})


export class HeaderComponent {
  @Input() deviceXs!: boolean;

  topVal = 0;
  onScroll(e: any) {
    let scrollXs = this.deviceXs ? 55 : 73;
    if (e.srcElement.scrollTop < scrollXs) {
      this.topVal = e.srcElement.scrollTop;
    } else {
      this.topVal = scrollXs;
    }
  }
  sideBarScroll() {
    let e = this.deviceXs ? 160 : 130;
    return e - this.topVal;


  }
}
