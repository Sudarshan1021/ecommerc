import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import{StorageServiceModule} from 'ngx-webstorage-service';
import { StoreService } from './store.service';
import { LoginComponent } from './login/login.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuardService} from './auth-guard.service';
import {SellerProdSerService} from './seller-prod-ser.service';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { SellerprodComponent } from './sellerprod/sellerprod.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponent } from './mat/mat.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef } from '@angular/material';
import {MatDialogModule} from '@angular/material';
import{MatInputModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SellerComponent,
    BuyerComponent,
    AdminComponent,
    SellerprodComponent,
    MatComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowHidePasswordModule,
    ReactiveFormsModule,
    StorageServiceModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [StoreService,AuthGuardService,SellerProdSerService,MatDialogModule,{ provide: MatDialogRef, useValue: {} },],
  bootstrap: [AppComponent],
  entryComponents:[SellerprodComponent]
})
export class AppModule { }
