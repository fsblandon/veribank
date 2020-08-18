import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  
  transferForm: FormGroup;

  transferDone: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private accountS: AccountService
  ) { }

  ngOnInit(): void {
    this.transferForm = this.formBuilder.group({
      value: ['', [Validators.required]]
    });
  }

  transfer() {
    const valueToTransfer = this.transferForm.controls['value'].value;
    const currentTransfer = this.accountS.newTransfer.Transfer(valueToTransfer);
    this.accountS.newTransfer.result = currentTransfer;

    this.transferDone = true;
    setTimeout(() => {
      this.transferDone = false;
      this.route.navigateByUrl('home');
    }, 2000);
  }

  toCancel() {
    this.route.navigateByUrl('home');
  }

}
