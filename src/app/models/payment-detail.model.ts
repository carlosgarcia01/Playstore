export class PaymentDetail {
  PMId:number;
  CardOwnerName:string;
  CardNumber:string;
  ExpirationDate:string;
  CVV:string;

  constructor(){
    this.PMId=0;
    this.CardOwnerName="";
    this.CardNumber="";
    this.ExpirationDate="";
    this.CVV="";
  }
}
