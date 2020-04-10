import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'ab-warehouse-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'warehouse';
  public building = {
    date: Date.now(),
    value: 2345.897,
    status: 'buy'
  };
  constructor() {
    if (this.building.status === 'buy') {
      this.building.status = environment.buy;
    } else {
      this.building.status = environment.sell;
    }
  }
}
