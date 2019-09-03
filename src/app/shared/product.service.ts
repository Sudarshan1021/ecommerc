import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


import{ Product} from './product.model';
import { stringify } from '@angular/compiler/src/util';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct:Product;
  products :Product[];
  readonly baseURL  = 'http://localhost:3000/products';
  constructor(private http:HttpClient) { }

  postProduct(prod){
    // const postData = new FormData();
    // postData.append("name",prod.prodName);
    // postData.append("description",prod.descb);
    // postData.append("actualprice",prod.actprice);
    // postData.append("discountprice",prod.disprice);
    // postData.append("image",prod.image);
    console.log("DDD"+prod.sellerName);
    return this.http.post(this.baseURL,prod);
  }

  getProductList(){
    return this.http.get(this.baseURL);
  }
  getwithid(id){
    return this.http.get<{_id:string;sellerName:string;name:string;description:string;actualprice:string;discountprice:string;imagepath:string}>("http://localhost:3000/products/"+id);
  }
  update(prod){
    const newprod={id:prod.id,name:prod.prodName,description:prod.descb,actualprice:prod.actprice,discountprice:prod.disprice,imagepath:prod.image};
    console.log("lll"+newprod.name);
    return this.http.put("http://localhost:3000/products/"+newprod.id,newprod).subscribe(res=>console.log(res));
  }
}
