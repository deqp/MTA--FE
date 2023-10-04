import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'flex-tutorial';
  mediaSub!: Subscription;
  deviceXs!: boolean;
  constructor(public mediaObserver: MediaObserver) {

  }
  ngOnInit() {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((res: MediaChange[]) => {
      // Handle media change here
      console.log(res);
    })
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
