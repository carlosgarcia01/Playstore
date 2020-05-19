import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/providers/payment-detail.service';
import { PaymentDetail } from 'src/app/models/payment-detail.model';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: [`table tr:hover{cursor: pointer}`]
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private _paymentDetail:PaymentDetailService) 
        { _paymentDetail.getPaymentDetails() }

   
   public get paymentDetailList() : PaymentDetail[] {
     return this._paymentDetail.paymentList;
   }
        

  ngOnInit(): void {
  }

}
