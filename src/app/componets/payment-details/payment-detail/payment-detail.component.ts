import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/providers/payment-detail.service';
import { FormGroup,FormBuilder, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  paymentForm:FormGroup;
  
  constructor(private _paymentDetail:PaymentDetailService,
              private fb:FormBuilder) 
              {}
    


  ngOnInit(): void {
  }

 public get paymentDetail() : PaymentDetailService {
   return this._paymentDetail;
 }


 createForm(){
  this.paymentForm = this.fb.group({
    cardOwnerName:[''],
    CardNumber:[''],
    ExpirationDate:[''],
    CVV:[''],
  });
 }


 

}
