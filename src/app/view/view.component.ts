import { Component, OnInit } from '@angular/core';
import { KfsServiceService } from '../kfs-service.service';
import { ProductComponent } from '../product/product.component';
import { Product } from 'src/domain/product';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  productList:[];
  customerList:[];
  productDetails :{};
  productName:String;
  constructor(private kfsService:KfsServiceService) { }

  ngOnInit() {
    //this.getProductList();
    this.kfsService.getCustomerList();
    this.customerList=this.kfsService.customerList;
    
  }

  getProductList(){
    this.kfsService.loading=true;
    if(this.productList==null){
    this.kfsService.getService("/getProductList").subscribe((data:[])=>{
      console.log("result--->"+data);
      this.productList=data;
      this.kfsService.loading=false;
    })
  }else{
    this.kfsService.loading=false;
  }
  }


  getProductDetails(product: Product){
    // this.kfsService.loading=true;
    
    // this.kfsService.getService('/getProductDetails/'+product).subscribe((data:{})=>{
    //   console.log(data);
    //   this.productDetails=data;
    //   this.kfsService.loading=false;
    // });

    this.productDetails=product;
  }
}
