export interface Customer{
    id:Number;
    
    customerName:String;
    
    customerAddress:String ;
    
    customerEmail:String;
    
    customerGSTIN:String ;
    
    customerState:String ;
    
    customerCode:String ;
    
    customerPhone:String ;
}

export interface Customers{
    customers:Array<Customer>
}