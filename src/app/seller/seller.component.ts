import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material';
import {MatDialog, MatDialogConfig,MAT_DIALOG_DATA} from '@angular/material';
import { SellerprodComponent } from '../sellerprod/sellerprod.component';
import {SellerProdSerService} from '../seller-prod-ser.service';
import { ShowproductComponent } from '../showproduct/showproduct.component';

import {Router} from '@angular/router';
import{ProductService} from '../shared/product.service';
import {Product} from '../shared/product.model';
import{UserService} from '../shared/user.service';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
  providers:[ProductService]
})
export class SellerComponent implements OnInit {
  containers = [];
  userDet:any;
  products: any;
  retusername;
  retusername1;
  searchVal='';
  searchRes = [];
  userproducts=[];
  Toggle:boolean = true;
  Toggle1:boolean = false;
  constructor(private user:UserService,private productService:ProductService,private dialog:MatDialog,private store:SellerProdSerService,public router:Router) { 
    //this.userDet=this.store.getDet();
    console.log("sud");
    //console.log(this.userDet[1]);
    this.user.getUserName().subscribe(
      res=>{
         this.retusername = res['user'];
         //console.log("GG"+this.retusername.name);
         this.retusername1 = this.retusername.name;
      },
    
    err=>{}
  );
  //this.sellerprodForm = this.fb.group( this.det );


  }

  setProduct(prod) {
    this.products = prod;
    console.log("prods  ",this.products);
    console.log("seller"+this.products[1].sellerName);
    for(let i in this.products){
    if(this.products[i].sellerName==this.retusername1){
      this.userproducts.push(this.products[i]);
    }

  }
  }
  Home(){
    this.Toggle = true;
    this.Toggle1 = false;
  }
  All(){
    this.Toggle = false;
    this.Toggle1 = true;
    console.log("Hi")
  }
  onlog()
  {
    console.log("LINK");
  }
 
  async ngOnInit() {
    await this.productService.getProductList().subscribe(products => this.setProduct(products));
    
    
  }
  add() {
    this.containers.push(this.containers.length);
    this.router.navigate(['sellerprod','new']);
  }
    onCreate(user){ 
  
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus=true;
      dialogConfig.width = "60%";
      dialogConfig.data={
        Sellername:user.sellerName,
        name:user.name,
        description:user.description,
        actualprice:user.actualprice,
        discountprice:user.discountprice,
        imagePath:user.imagePath
      };
      
      this.dialog.open(ShowproductComponent,dialogConfig);
      
    }
    onLogout(){
      this.user.deleteToken();
      this.router.navigate(['/login']);
    }
    
  
}
