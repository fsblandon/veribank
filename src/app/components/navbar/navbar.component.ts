import { Component, OnInit } from '@angular/core';

import { Client } from "../../models/client.model";
import { Account } from 'src/app/models/account.model';

import { AccountService } from "../../services/account.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  client: Client = new Client();

  account: Account;

  constructor(
    private accountS: AccountService
  ) { }

  async ngOnInit() {
    this.client.id = 'Francisco';
    this.account = this.accountS.newAccount1;
  }

}
