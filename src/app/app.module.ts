import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {AppComponent} from './app.component';
import {ProductSelectionComponent} from './product-selection/product-selection.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {LogProviderService} from './log-provider.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {AppRoutingModule} from './/app-routing.module';
import {BdbRouteProviderService} from './bdb-route-provider.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductSelectionComponent,
    ProductDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LogProviderService, MessageService, BdbRouteProviderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
