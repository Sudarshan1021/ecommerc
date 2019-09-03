import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthGuardService} from '../auth-guard.service';
import {UserService} from '../shared/user.service';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  retrole;
  role;
  constructor(private user :UserService,private authservice:AuthGuardService,private router: Router){}

  ngOnInit() {

    this.user.getUserProfile().subscribe(
         res=>{
            this.retrole = res['user'];
             this.role = this.retrole.role;
             this.onrole();
            console.log(this.role);
         },
         err=>{}
       );
       
      //  switch(this.role){
         
      //   case 'Admin':
      //           this.router.navigate(['admin']);
      //         break;
      
      //         case 'Buyer':
      //             this.router.navigate(['buyer']);
      //           break;
      
      //           case 'Seller':
      //               this.router.navigate(['seller']);
      //             break;


      //  }
  }
  onrole(){
    switch(this.role){
         
      case 'Admin':
              this.router.navigate(['admin']);
            break;
    
            case 'Buyer':
                this.router.navigate(['buyer']);
              break;
    
              case 'Seller':
                  this.router.navigate(['seller']);
                break;


     }
  }

}
