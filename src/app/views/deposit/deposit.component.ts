import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  depositForm: FormGroup;

  depositDone: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private accountS: AccountService
  ) { }

  ngOnInit(): void {
    this.depositForm = this.formBuilder.group({
      value: ['', [Validators.required]]
    });
  }

  deposit() {
    const valueToDeposit = this.depositForm.controls['value'].value;
    const currentDeposit = this.accountS.newAccount1.Deposit(valueToDeposit);
    this.accountS.newAccount1.balance = currentDeposit;
    this.depositDone = true;
    setTimeout(() => {
      this.depositDone = false;
      this.route.navigateByUrl('home');
    }, 2000);
  }

  toCancel() {
    this.route.navigateByUrl('home');
  }

}
