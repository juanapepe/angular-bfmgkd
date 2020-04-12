import { Component, OnInit } from '@angular/core';
import {of, from} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  ngOnInit() {
    let numbers$ = of(2, 4, 6, 8);
    numbers$.subscribe(console.log);

    from([20, 15, 10, 5]).subscribe(console.log);

    from([20, 15, 10, 5]).subscribe(
      item => console.log(`resulting item .. ${item}`),
      err => console.error(`error occured ${err}`),
      () => console.log('complete')
    );
  }
}
