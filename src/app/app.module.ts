import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSpinner, MatSelect, MatSelectModule, MatFormFieldModule, MatProgressSpinnerModule, MatCheckboxModule} from '@angular/material';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { DescriptionComponent } from './description/description.component';
import { ViewComponent } from './view/view.component'
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
const appRoutes:Routes=[
  {path:'',redirectTo:"/aboutUs",pathMatch:'full'},
  {
    path:'aboutUs',component:DescriptionComponent
  },
  {
    path:'customer',component:CustomerComponent
  },
  {
    path:'product',component:ProductComponent
  },{
    path:'view',component:ViewComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductComponent,
    LeftNavBarComponent,
    DescriptionComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatCheckboxModule,ToastrModule.forRoot(),
  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    MatSpinner,CUSTOM_ELEMENTS_SCHEMA 
  ],
  exports:[MatSelectModule,
    
  ]
})
export class AppModule { }
