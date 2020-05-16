import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/providers/payment-detail.service';
import { FormGroup,FormBuilder, FormControlName, Validators } from '@angular/forms';
import { PaymentDetail } from 'src/app/models/payment-detail.model';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  private paymentForm:FormGroup;
  
  constructor(private _paymentDetail:PaymentDetailService,
              private fb:FormBuilder) 
              { this.createForm()}
    


  ngOnInit(): void {
  }

  
  public get getPaymentForm() : FormGroup {
    return this.paymentForm
  }
  

  
  public get invalidCardOwnerName() : boolean {
    return this.paymentForm.get('cardOwnerName').invalid && this.paymentForm.get('cardOwnerName').touched;
  }
  public get invalidCardNumber() : boolean {
    return this.paymentForm.get('CardNumber').invalid && this.paymentForm.get('CardNumber').touched;
  }
  public get invalidExpirationDate() : boolean {
    return this.paymentForm.get('ExpirationDate').invalid && this.paymentForm.get('ExpirationDate').touched;
  }
  public get invalidCVV() : boolean {
    return this.paymentForm.get('CVV').invalid && this.paymentForm.get('CVV').touched;
  }
  


 public get paymentDetail() : PaymentDetailService {
   return this._paymentDetail;
 }


 createForm(){
  this.paymentForm = this.fb.group({
    cardOwnerName:['',[Validators.required]],
    CardNumber:['',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
    ExpirationDate:['',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]],
    CVV:['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
  });
 }

 save(){
   if(this.paymentForm.invalid)
     return Object.values(this.paymentForm.controls).forEach(x => x.markAllAsTouched())

   let data:PaymentDetail = new PaymentDetail();
/*     data.CardOwnerName = this.paymentForm.get('cardOwnerName').value;
    data.CardNumber = this.paymentForm.get('CardNumber').value;
    data.ExpirationDate = this.paymentForm.get('ExpirationDate').value;
    data.CVV = this.paymentForm.get('CVV').value; */
    this._paymentDetail.postPaymentDetail(this.paymentForm.value)
        .subscribe(
          res => {this.paymentForm.reset},
          err => {console.log(err)}
        ); 
 }


 

}
