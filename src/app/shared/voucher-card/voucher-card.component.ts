import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-voucher-card',
  templateUrl: './voucher-card.component.html',
  styleUrls: ['./voucher-card.component.scss'],
  imports: [RouterLink],
})
export class VoucherCardComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
