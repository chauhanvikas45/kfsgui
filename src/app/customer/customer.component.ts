import { Component, OnInit } from '@angular/core';
import { KfsServiceService } from '../kfs-service.service';
import { Customer } from 'src/domain/customer';
import { ToastrService } from 'ngx-toastr';  
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  response:{};
  customerName: String;
  customerAddress: String;
  customerPhone: String;
  customerEmail: String;
  customerGSTIN: String;
  customerCode: String;
  customerState: String;
  dataAccess: any;
  id:Number;

  constructor(private kfsService:KfsServiceService,private toasterService:ToastrService) { }

  ngOnInit() {
  }

createCustomer(){
  
    let customer:Customer = {
      id:this.id,
      customerName: this.customerName,
      customerAddress: this.customerAddress,
      customerPhone: this.customerPhone,
      customerEmail: this.customerEmail,
      customerGSTIN: this.customerGSTIN,
      customerCode: this.customerCode,
      customerState: this.customerState
    
// };
// this.kfsService.createCustomer(customer)
//      .subscribe(
//        success => alert("Done"),
//        error => alert(error)
//      );
 }
 this.postCustomerForm(customer);
}

  postCustomerForm(customer:Customer){
    this.kfsService.loading=true;
    this.kfsService.postService("/addCustomer",customer).subscribe(
      
      response => (data:{})=>{
        console.log(data);
        this.response=data;
        this.kfsService.loading=false;
        this.toasterService.success("Customer Added :"+customer.customerName)
      },
      error =>{
        this.toasterService.error("Error in sending Request")
        this.kfsService.loading=false;
      } )
    

  }
}
