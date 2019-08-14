import { Injectable, OnInit } from '@angular/core';
import { CanActivate }    from '@angular/router';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {
  
  Role:any;
  constructor(private router:Router) {
    
   }
  ngOnInit(){
    
  }

  canActivate(role){
    if(role=='Admin'){
      this.router.navigate(['admin']);
    }
    else if(role=='Buyer'){
      this.router.navigate(['buyer']);
    }
    else{
      this.router.navigate(['seller']);
    }
    
  }
}
  
  


