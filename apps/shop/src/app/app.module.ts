import { UiModule } from '@angular-boss/shared/ui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'cart',
          loadChildren: () =>
            import('./cart/cart.module').then(m => m.CartModule)
        },
        {
          path: 'catalog',
          loadChildren: () =>
            import('./catalog/catalog.module').then(m => m.CatalogModule)
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    HttpClientModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
