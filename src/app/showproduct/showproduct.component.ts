import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {

  sellername;
  name;
  description;
  actualprice;
  discountprice;
  imagePath;
  constructor(private dialogRef: MatDialogRef<ShowproductComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      
    this.sellername = data.Sellername;
    this.name = data.name;
    this.description=data.description;
    this.actualprice = data.actualprice;
    this.discountprice = data.discountprice;
    this.imagePath = data.imagePath;
    console.log("SSS"+data.imagePath);
}

  ngOnInit() {
    
  }

}
