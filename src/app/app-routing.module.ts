import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentDetailsComponent } from './componets/payment-details/payment-details.component';
import { HomeComponent } from './componets/home/home.component';
import { LoginComponent } from './componets/login/login.component';
import { CategoryComponent } from './componets/category/category.component';
import { UserDetailsComponent } from './componets/user-details/user-details.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"categories",component:CategoryComponent},
  {path:"users",component:UserDetailsComponent},
  {path:"paymentDetails",component:PaymentDetailsComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
