import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AdminComponent } from './admin/admin.component';
import { LoadingComponent } from './loading/loading.component';
import { AuthGuardService } from './auth-guard.service';
import { SellerprodComponent } from './sellerprod/sellerprod.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import {AuthGuard} from './auth/auth.guard';

const appRoutes:Routes= [

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'seller',component:SellerComponent,canActivate:[AuthGuard]},
  {path:'buyer',component:BuyerComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminComponent},
  {path:'sellerprod/:id',component:SellerprodComponent},
  {path:'sellerprod',component:SellerprodComponent},
  {path:'loading',component:LoadingComponent,canActivate:[AuthGuard]},
  {path:'show',component:ShowproductComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
