import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './componets/payment-details/payment-details.component';
import { PaymentDetailComponent } from './componets/payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './componets/payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './providers/payment-detail.service';
import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './componets/login/login.component';
import { CategoryComponent } from './componets/category/category.component';
import { HomeComponent } from './componets/home/home.component';
import { UserDetailsComponent } from './componets/user-details/user-details.component';
import { UserListComponent } from './componets/user-details/user-list/user-list.component';
import { UserComponent } from './componets/user-details/user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    NavbarComponent,
    LoginComponent,
    CategoryComponent,
    HomeComponent,
    UserDetailsComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PaymentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
