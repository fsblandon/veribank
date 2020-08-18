import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//views
import { HomeComponent } from './views/home/home.component';
import { DepositComponent } from "./views/deposit/deposit.component";
import { WithdrawComponent } from "./views/withdraw/withdraw.component";

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransferComponent } from './views/transfer/transfer.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    DepositComponent,
    WithdrawComponent,
    HomeComponent,
    NavbarComponent,
    TransferComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
