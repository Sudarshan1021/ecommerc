import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { SellerprodComponent } from '../sellerprod/sellerprod.component';
import {SellerProdSerService} from '../seller-prod-ser.service';
import {Router} from '@angular/router';
import{ProductService} from '../shared/product.service';
import {Product} from '../shared/product.model';

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
  constructor(private productService:ProductService,private dialog:MatDialog,private store:SellerProdSerService,public router:Router) { 
    //this.userDet=this.store.getDet();
    console.log("sud");
    //console.log(this.userDet[1]);
  }

  setProduct(prod) {
    this.products = prod;
    console.log("prods  ",this.products);
  }
 
  async ngOnInit() {
    await this.productService.getProductList().subscribe(products => this.setProduct(products));
    
    
  }
  add() {
    this.containers.push(this.containers.length);
    this.router.navigate(['sellerprod','new']);
  }
    // onCreate(){ 
    //   const dialogConfig = new MatDialogConfig();
    //   dialogConfig.autoFocus=true;
    //   dialogConfig.width = "60%";
    //   this.dialog.open(SellerprodComponent,dialogConfig);
      
    // }
    
  
}
