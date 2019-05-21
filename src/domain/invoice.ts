import { Product } from './product';
import { Customer } from './customer';

export interface Invoice{
id:Number;
invoices:String;
totalAmount:String;
productId:Product;
customers:Customer;

}