import { Injectable } from '@angular/core';
import { PaymentDetail } from '../models/payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail = new PaymentDetail();
  constructor() { }
}
