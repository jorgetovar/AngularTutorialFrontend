import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {AppComponent} from './app.component';
import {ProductSelectionComponent} from './product-selection/product-selection.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {LogProviderService} from './log-provider.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductSelectionComponent,
    ProductDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogProviderService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
