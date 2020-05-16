import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './componets/payment-details/payment-details.component';
import { PaymentDetailComponent } from './componets/payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './componets/payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './providers/payment-detail.service';
import { HttpClientModule } from '@angular/common/http'


import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PaymentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
