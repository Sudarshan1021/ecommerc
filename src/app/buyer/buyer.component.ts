import { Component, OnInit } from '@angular/core';
import{ProductService} from '../shared/product.service';
import{UserService} from '../shared/user.service';
import {MatDialog, MatDialogConfig,MAT_DIALOG_DATA} from '@angular/material';
import { ShowproductComponent } from '../showproduct/showproduct.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  prodDetails;
  searchVal='';
  searchRes = [];
  retusername;
  retusername1;
  constructor(public router:Router,private user:UserService,private productService:ProductService,private dialog:MatDialog) { 
    this.productService.getProductList().subscribe(products => this.setProduct(products));
    this.user.getUserName().subscribe(
      res=>{
         this.retusername = res['user'];
         //console.log("GG"+this.retusername.name);
         this.retusername1 = this.retusername.name;
      },
    
    err=>{}
  );
  }


  onLogout(){
    this.user.deleteToken();
    this.router.navigate(['/login']);
  }
  setProduct(prod) {
    this.prodDetails = prod;
    console.log("HH"+this.prodDetails);
    for(let i in this.prodDetails) {
      this.searchRes.push(parseInt(i));
    }
    // console.log("prods  ",this.products);
    // console.log("seller"+this.products[1].sellerName);
  }

  ngOnInit() {
  }
  onCreate(user){ 
   console.log("DD");
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
  searchEmp(){
    if(this.searchVal) {
      this.searchRes = [];
      for(let i in this.prodDetails) {
        let prodname = (this.prodDetails[i].name).toLowerCase();
        let sellername = (this.prodDetails[i].sellerName).toLowerCase();
        

        let sVal = this.searchVal.toLowerCase();

        if(prodname.includes(sVal) || sellername.includes(sVal) ) {
          this.searchRes.push(parseInt(i));
        }
      }
    }
    else {
      this.searchRes = [];
      for(let i in this.prodDetails) {
          this.searchRes.push(parseInt(i));
      }
    }
  }

}

