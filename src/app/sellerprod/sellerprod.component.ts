import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {SellerProdSerService} from '../seller-prod-ser.service';
import{MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material';
@Component({
  selector: 'app-sellerprod',
  templateUrl: './sellerprod.component.html',
  styleUrls: ['./sellerprod.component.css'],
  
})
export class SellerprodComponent implements OnInit {
  det= {
    // ind: [{value: null, disabled:true}],
    prodName:'',
    descb:'',
    actprice:'',
    disprice:'',
    image:''
  }
  url;
  inde:any;
  userDet:any;
  flag=true;
  sellerprodForm;
  constructor(private dialog:MatDialog,public router:Router,private fb: FormBuilder,private route: ActivatedRoute,private store:SellerProdSerService,private dialogRef:MatDialogRef<SellerprodComponent>) {
    this.userDet=this.store.getDet();
    this.sellerprodForm = this.fb.group( this.det );
    
    
   }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.inde = params.get('id');
      // this.editform(this.inde);
    if(this.inde!='new'){
      this.det = this.store.getDet()[this.inde];
      this.sellerprodForm = this.fb.group( this.det );
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
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
      }
      }
    }
    onSubmit(formData){
      
     
     if(this.inde=='new'){
      formData["url"] = this.url;
     this.store.addDet(formData);

     }
     else{
       this.store.updateDet(formData,this.inde);
       
     }
     //this.onClose();
     // window.location.reload();
      this.router.navigate(['seller']);
     
    }
  
    //  onClose(){
    //    this.dialogRef.close();
    //  }
     
}


