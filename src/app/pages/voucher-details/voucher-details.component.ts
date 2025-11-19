import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-voucher-details',
  templateUrl: './voucher-details.component.html',
  styleUrls: ['./voucher-details.component.scss'],
  imports: [RouterLink]
})
export class VoucherDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
