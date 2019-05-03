import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest } from '@angular/common/http';

@Injectable({
 providedIn: 'root'
})
export class KfsServiceService {
 apiURL: string = 'http://localhost:8080';
 headerOptions = {headers:new HttpHeaders({ 'Content-Type': 'application/json'})
 ,method:"GET"};

 public customerList:[]
 public loading:boolean=false;
 constructor(private httpClient: HttpClient) {
    this.getCustomerList()
 }
//  ngOnInit() {
    
    
//   }
 getService(resource:string){
    return   this.httpClient.get(`${this.apiURL}/${resource}`, this.headerOptions);
}

postService(resource:String,data:any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    //let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    return this.httpClient.post(`${this.apiURL}/${resource}`, data);
}

getCustomerList(){
    this.loading=true;
    this.getService("/getCustomerList").subscribe((data:[])=>{
    console.log(data);
    this.customerList=data;
    this.loading=false;
},err => {
    // Do stuff whith your error
    this.loading=false;
  })
    
}
 }