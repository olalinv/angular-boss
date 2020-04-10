import { UiModule } from '@angular-boss/shared/ui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, RouterState, routerReducer } from '@ngrx/router-store';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot([
    {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
    },
    {
        path: 'catalog',
        loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule)
    },
    { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
    { path: 'rates', loadChildren: () => import('./rates/rates.module').then(m => m.RatesModule) }
], { initialNavigation: 'enabled' }),
    HttpClientModule,
    UiModule,
    StoreModule.forRoot(
      {
        router: routerReducer
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
