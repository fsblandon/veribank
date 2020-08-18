import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  withdrawForm: FormGroup;

  withdrawDone: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private accountS: AccountService
  ) { }

  ngOnInit(): void {
    this.withdrawForm = this.formBuilder.group({
      value: ['', [Validators.required]]
    });
  }

  withdraw() {
    const valueToWithdraw = this.withdrawForm.controls['value'].value;
    const currentWithdraw = this.accountS.newAccount1.Withdraw(valueToWithdraw);
    this.accountS.newAccount1.balance = currentWithdraw;

    this.withdrawDone = true;
    setTimeout(() => {
      this.withdrawDone = false;
      this.route.navigateByUrl('home');
    }, 2000);
  }

  toCancel() {
    this.route.navigateByUrl('home');
  }

}
