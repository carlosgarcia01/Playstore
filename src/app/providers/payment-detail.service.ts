import { Injectable } from '@angular/core';
import { PaymentDetail } from '../models/payment-detail.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  paymentList:PaymentDetail[];
  readonly url:string = "https://localhost:44397/api/";
  //https://localhost:44397/api/paymentdetails

  

  constructor(private http:HttpClient) { }

  getPaymentDetails(){
     this.http.get(`${this.url}paymentdetails`)
         .subscribe( res => this.paymentList = res as PaymentDetail[]);
  }

  postPaymentDetail(data:PaymentDetail){
    let header = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(`${this.url}paymentdetails `,data,{headers:header});
  }


}
