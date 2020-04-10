import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { BasketService } from './basket.service';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'ab-shop-root',
  templateUrl: './app.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title = 'shop';
  public basketUnits = 0;
  public basket = [];
  constructor(
    private basketService: BasketService,
    private cdr: ChangeDetectorRef,
    private swUpdate: SwUpdate,
    private swPush: SwPush
  ) {
    this.checkVersionUpdates();
  }

  ngOnInit(): void {
    this.basketService.units$.subscribe({
      next: units => {
        this.basketUnits = units;
        this.cdr.detectChanges();
      }
    });
    this.basketService.basket$.subscribe({
      next: basket => {
        this.basket = basket;
        this.cdr.detectChanges();
      }
    });
  }

  private checkVersionUpdates() {
    this.swUpdate.checkForUpdate().then(data => console.log(data))
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(event => {
        if (event.current.appData) {
          const appData: any = event.current.appData;
          let msg = `New version ${appData.version} available.`;
          msg += `${appData.changelog}.`;
          msg += 'Reload now?';
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      });
    }
  }

  private subscribeToNotifications() {
    if (this.swPush.isEnabled) {
      this.swPush
        .requestSubscription({ serverPublicKey: 'VAPID_PUBLIC_KEY' })
        .then(sub => {
          console.log('subscription to server', sub.toJSON());
          this.swPush.messages.subscribe(msg => console.log('Received: ', msg));
        })
        .catch(err => console.error('Could not subscribe', err));
    }
  }

  public getNumItems() {
    console.count('get NUM_ITEMS calls');
    return this.basket.length;
  }
}
