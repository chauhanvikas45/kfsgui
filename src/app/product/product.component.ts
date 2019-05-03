import { Component, OnInit } from '@angular/core';
import { KfsServiceService } from '../kfs-service.service';
import { ReplaySubject } from 'rxjs';
import { Product } from 'src/domain/product';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/domain/customer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public customerList: ReplaySubject<String[]> = new ReplaySubject<String[]>(1);
  response: {};
  productName: String;
  productDescription: String;
  productHSNCode: String;
  productUON: String;
  productQuantity: String;
  productRate: String;
  productImage: String;
  cgst: String;
  sgst: String;
  igst: String;
  customer: Customer;
  //kfsService:KfsServiceService
  constructor(private kfsService:KfsServiceService,private toasterService:ToastrService) {

   }

  ngOnInit() {
  //  this.kfsService.customerList.map(data=>this.customerList.push(data));
  this.kfsService.getCustomerList();
  this.customerList.next(this.kfsService.customerList);
  }


  createProduct(){
    let product:Product = {
      customer: this.customer,
      productName: this.productName,
      productDescription: this.productDescription,
      productHSNCode: this.productHSNCode,
      productUON: this.productUON,
      productQuantity: this.productQuantity,
      productRate: this.productRate,
      productImage: this.productImage,
      cgst: this.cgst,
      sgst: this.sgst,
      igst: this.igst,
 }


    this.postCustomerForm(product);
  }

  postCustomerForm(product:Product){
    this.kfsService.loading=true;
    this.kfsService.postService("/addProduct",product).subscribe(
      
      success => (data:{})=>{
        console.log(data);
        this.response=data;
        this.kfsService.loading=false;
        this.toasterService.success("Customer Added :"+product.productName)
      },
      error =>{
        this.toasterService.error("Error in sending Request")
        this.kfsService.loading=false;
      } )
    

  }
}
