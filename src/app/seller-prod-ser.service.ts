import { Injectable,Inject } from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

const STORAGE_KEY = 'local_Details';
@Injectable({
  providedIn: 'root'
})
export class SellerProdSerService {

  constructor(@Inject(LOCAL_STORAGE)private storage:StorageService) { }

  addDet(details){
    const currentdetails = this.storage.get(STORAGE_KEY) || [];
    console.log(currentdetails);
    currentdetails.push(details);
    this.storage.set(STORAGE_KEY,currentdetails);
    console.log(this.storage.get(STORAGE_KEY)||'Local storage is empty');
  }
  updateDet(empDetail, index){
    let currentEmpDetails = this.storage.get(STORAGE_KEY) || [];

    currentEmpDetails[index] = empDetail;

    this.storage.set(STORAGE_KEY, currentEmpDetails);

    console.log(this.storage.get(STORAGE_KEY) || 'Local Storage is Empty');
  }
  getDet(){
    return this.storage.get(STORAGE_KEY);
  }

  
}
