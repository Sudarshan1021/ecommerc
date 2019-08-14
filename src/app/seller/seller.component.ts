import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { SellerprodComponent } from '../sellerprod/sellerprod.component';
import {SellerProdSerService} from '../seller-prod-ser.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  containers = [];
  userDet:any;
  constructor(private dialog:MatDialog,private store:SellerProdSerService,public router:Router) { 
    this.userDet=this.store.getDet();
    console.log(this.userDet[1]);
  }

  ngOnInit() {
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
