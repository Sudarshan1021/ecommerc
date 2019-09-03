//Built-in
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import{MatInputModule} from '@angular/material';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{FormsModule} from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AdminComponent } from './admin/admin.component';
import { SellerprodComponent } from './sellerprod/sellerprod.component';
import{ShowproductComponent} from './showproduct/showproduct.component';
//Routes
import { AppRoutingModule } from './app-routing.module';

//Services
import{StorageServiceModule} from 'ngx-webstorage-service';
import { StoreService } from './store.service';
import {AuthGuardService} from './auth-guard.service';
import {SellerProdSerService} from './seller-prod-ser.service';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import {ProductService} from './shared/product.service';
import {UserService} from './shared/user.service';


//Others
import { MatComponent } from './mat/mat.component';
import {AuthGuard} from './auth/auth.guard';
import {AuthInterceptor} from './auth/auth.interceptor';
import { LoadingComponent } from './loading/loading.component';





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
    LoadingComponent,
    ShowproductComponent
   
    
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
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard,UserService,ProductService,StoreService,AuthGuardService,SellerProdSerService,{ provide: MatDialogRef, useValue: {} },
  {provide:HTTP_INTERCEPTORS,
  useClass:AuthInterceptor,
multi:true}
  ],
  exports:[MatDialogModule],
  bootstrap: [AppComponent],
  entryComponents:[ShowproductComponent]
})
export class AppModule { }
