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

    const apples = [20, 15, 10, 5];

    from(apples).subscribe(console.log);

    from(apples).subscribe(
      item => console.log(`resulting item .. ${item}`),
      err => console.error(`error occured ${err}`),
      () => console.log('complete')
    );

    of(apples).subscribe(
      item => console.log(`resulting item .. ${item}`),
      err => console.error(`error occured ${err}`),
      () => console.log('complete')
    );

    of(...apples).subscribe( //takto to funguje jako s from
      item => console.log(`resulting item .. ${item}`),
      err => console.error(`error occured ${err}`),
      () => console.log('complete')
    );
  }
}
