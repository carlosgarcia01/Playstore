import { Injectable } from '@angular/core';
import { PaymentDetail } from '../models/payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail = new PaymentDetail();
  readonly url:string = "http://localhost:2312/api/";

  constructor(private http:HttpClient) { }


  postPaymentDetail(data:PaymentDetail){
    return this.http.post(`${this.url}/PaymentDetail `,data);
  }


}
