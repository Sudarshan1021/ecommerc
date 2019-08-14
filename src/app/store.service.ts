import { Injectable,Inject } from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

const STORAGE_KEY = 'local_signupDetails';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(@Inject(LOCAL_STORAGE)private storage:StorageService) { }

  addPerson(details){
    const currentdetails = this.storage.get(STORAGE_KEY) || [];
    console.log(currentdetails);
    currentdetails.push(details);
    this.storage.set(STORAGE_KEY,currentdetails);
    console.log(this.storage.get(STORAGE_KEY)||'Local storage is empty');
  }
  getPerson(){
    return this.storage.get(STORAGE_KEY);
  }
  
}
