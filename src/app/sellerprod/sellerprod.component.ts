import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {SellerProdSerService} from '../seller-prod-ser.service';
import{MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material';
import{ProductService} from '../shared/product.service';
import {NgForm} from '@angular/forms';

//declare var M:any;
@Component({
  selector: 'app-sellerprod',
  templateUrl: './sellerprod.component.html',
  styleUrls: ['./sellerprod.component.css'],
  providers:[ProductService]
  
})
export class SellerprodComponent implements OnInit {
  det= {
    id:'',
    sellerName:'',
    prodName:'',
    descb:'',
    actprice:'',
    disprice:'',
    price:'',
    image:''
    
  }
  url;
  url1;
  inde:any;
  userDet:any;
  flag=true;
  sellerprodForm;
  product:any;
   products:any;
  constructor(private productService:ProductService,private dialog:MatDialog,public router:Router,private fb: FormBuilder,private route: ActivatedRoute,private store:SellerProdSerService,private dialogRef:MatDialogRef<SellerprodComponent>) {
   // this.userDet=this.store.getDet();
    this.sellerprodForm = this.fb.group( this.det );
    
    
   }

   setProduct(prod) {
    this.products = prod;
    console.log("Name"+prod.name);
    this.det.id=prod._id;
    this.det.sellerName = prod.sellerName;
    this.det.prodName=prod.name;
    this.det.descb=prod.description;
    this.det.actprice=prod.actualprice;
    this.det.disprice=prod.discountprice;
    this.det.image=prod.imagePath;
    this.sellerprodForm = this.fb.group( this.det );
  
    // this.det= {
    //   id:prod._id,
    //   prodName:prod.name,
    //   descb:prod.description,
    //   actprice:prod.actualprice,
    //   disprice:prod.discountprice
      
    // }
    
    console.log("prods  ",this.products);
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.inde = params.get('id');
      // this.editform(this.inde);
    if(this.inde!='new'){//edit
      //this.det = this.store.getDet()[this.inde];
    
     this.productService.getwithid(this.inde)
     .subscribe(products=>{ console.log("Hi"+products.name);this.setProduct(products)});
      //  this.det={id:products._id,prodName:products.name,descb:products.description,actprice:products.actualprice,disprice:products.discountprice};});
     //this.productService.getProductList().subscribe(products => this.setProduct(products));
  //   console.log("HHHH"+this.det.id);
      //this.sellerprodForm = this.fb.group( this.det );
    }
    else{
      this.sellerprodForm = this.fb.group( this.det );

    }
    });
  }
// editform(inde){
//   if(this.inde!='new') {
    
//   }
//   this.flag=false;
//   var ProdName = this.userDet[det].prodName;
//   var Descb = this.userDet[det].descb;
//   var actPrice = this.userDet[det].actprice;
//   var disPrice = this.userDet[det].disprice;
//   var Price = this.userDet[det].price;
//   let Image = this.userDet[det].image;
 
//   this.loadData();


//  }
// loadData(){

  
// }
  // onSelectFile(event) { // called each time file input changes
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = reader.result;
  //     }
  //     }
  //   }

  onImagePicked(event:Event){
    const file = (event.target as HTMLInputElement).files[0];
   //this.sellerprodForm.patchValue({image:file});
    
    const reader = new FileReader();
    reader.onload = () =>{
      this.url = reader.result;
      this.sellerprodForm.patchValue({image:this.url});
      this.det.image=this.url;
    };
    reader.readAsDataURL(file);


  }
    onSubmit(formData){
      if(this.inde=='new'){
        console.log("ss"+this.url);
        console.log("SSS"+formData.sellerName);
        //formData["image"]=this.url;
        this.productService.postProduct(formData)
        .subscribe((res)=>{
          alert("Inserted Successfully");
        });
        this.router.navigate(['seller']);
        }
        else{
          console.log("Update");
          console.log("form"+formData.image);
          this.productService.update(formData);
          this.router.navigate(['seller']);
        }
      
      




      
  
    //  if(this.inde=='new'){
    //    this.url1=this.url;
    //   formData["url"] = this.url;
    //  this.store.addDet(formData);

    //  }
    //  else{
    //    if(this.url!=this.url1){
    //     formData["url"] = this.url;
    //    }
    //    this.store.updateDet(formData,this.inde);
       
    //  }
    //  //this.onClose();
    //  // window.location.reload();
    //   this.router.navigate(['seller']);
     
    }
  
    //  onClose(){
    //    this.dialogRef.close();
    //  }
     
}


