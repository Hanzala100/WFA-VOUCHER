import { Component, OnInit } from '@angular/core';
import { VoucherCardComponent } from 'src/app/shared/voucher-card/voucher-card.component';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.scss'],
  imports:[VoucherCardComponent],
  standalone:true
})
export class VouchersComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
