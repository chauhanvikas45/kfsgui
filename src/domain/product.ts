import { Customer } from './customer';

export interface Product{
         productName : String;
         productDescription :String;
         productHSNCode:String;
         productUON:String;
         productQuantity:String;
         productRate:String;
         productImage:String;
         cgst:String;
         sgst:String;
         igst:String;
         customer:Customer;

}