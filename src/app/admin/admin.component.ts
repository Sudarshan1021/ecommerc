import { Component, OnInit, ɵɵelementContainerStart } from '@angular/core';
import { Router } from '@angular/router';
import {AuthGuardService} from '../auth-guard.service';
import {UserService} from '../shared/user.service';
import{ProductService} from '../shared/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  retusername;
  username;
  products;
  sellers = [];
  sellername;
  uniqueseller;
  profit = 0;
  profit1 = 0;
  highestseller =' ';

  productsarr=[];
  productname;
  uniqueproduct;
  profit2 = 0;
  profit3 = 0;
  highestproduct=' ';
  flag2:boolean = false;
  flag :boolean = false;
  countprod=[];
  count = 0;
  count1=0;
  uniqueproduct1;
  productname1;
  flag4:boolean=false;
  highestnumpro = ' ';
  constructor(private productService:ProductService,private user :UserService,private authservice:AuthGuardService,private router: Router){}

  ngOnInit() {

    this.user.getUserName().subscribe(
      res=>{
         this.retusername = res['user'];
         console.log("HI"+this.retusername.name);
          //this.username = this.username.name;
         
      },
      err=>{}
    );

    this.productService.getProductList().subscribe(products => this.setProduct(products));
  }
  setProduct(prod) {
    this.products = prod;
    console.log("prods 2  ",this.products);
    for(var i in this.products)
    console.log("seller2"+this.products[i].sellerName);
  }

  highestnumofprod(){

    //this.countprod.push(this.products[0].name);
    for(let i in this.products){
      this.count=0;
      this.productname1 = this.products[i].name;
      for(var k=0;k<this.countprod.length;k++){
        if(this.productname1==this.countprod[i]){
          this.flag4=true;
          break;
        }
      }
      if(this.flag4==false){
        
        this.countprod.push(this.productname1);
        for(let g in this.products){
            if(this.productname1==this.products[g].name){
              this.count++;
            }
        }
        if(this.count>this.count1){
          this.count1=this.count;
          this.highestnumpro = this.productname1;
        }
      }
      else{
        this.flag4=false;
      }
    }
    console.log("DDD"+this.highestnumpro);

  }

  uniqueproducts(){
    this.productsarr.push(this.products[0].name);
    for(let i in this.products){
      this.productname = this.products[i].name;
      for(var k=0;k<this.productsarr.length;k++){
          if(this.productname == this.productsarr[k]){
            this.flag2=true;
            break;
          }
      }
      if(this.flag2==false){
        this.productsarr.push(this.productname);
        
      }
      else{
        this.flag2=false;
      }
    }
    console.log("Result"+this.sellers);
    this.res1();
  }

  res1(){
    for(let i in this.productsarr){
      this.profit2=0;
      this.uniqueproduct = this.productsarr[i];
      for(let j in this.products){
        if(this.products[j].name==this.uniqueproduct){
          this.profit2 = this.profit2 + (this.products[j].actualprice - this.products[j].discountprice);
        }
        
      }
      if(this.profit2>this.profit3){
        this.profit3=this.profit2;
        this.highestproduct = this.uniqueproduct;
      }
    }
    console.log("product"+this.highestproduct);
  }

  uniquesellers(){
    console.log("ENTERED");
    this.sellers.push(this.products[0].sellerName);
    //console.log(this.sellers);
    for(let i in this.products){
      this.sellername = this.products[i].sellerName;
      for(var k=0;k<this.sellers.length;k++){
          if(this.sellername == this.sellers[k]){
            this.flag=true;
            break;
          }
      }
      if(this.flag==false){
        this.sellers.push(this.sellername);
        
      }
      else{
        this.flag=false;
      }
    }
    //console.log("Result"+this.sellers);
    this.res();
  }
  res(){
    console.log("En"+this.highestseller);
    for(let i in this.sellers){
      this.profit=0;
      console.log("ll"+this.sellers);
      this.uniqueseller = this.sellers[i];
      for(let j in this.products){
        if(this.products[j].sellerName==this.uniqueseller){
          this.profit = this.profit + (this.products[j].actualprice - this.products[j].discountprice);
        }
        
      }
      if(this.profit>this.profit1){
        this.profit1=this.profit;
        this.highestseller = this.uniqueseller;
      }
    }
    console.log("HighestSeller  Yes"+this.highestseller);
  }
 
}
