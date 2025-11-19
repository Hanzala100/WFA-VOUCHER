import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { VoucherCardComponent } from 'src/app/shared/voucher-card/voucher-card.component';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.scss'],
  imports: [VoucherCardComponent, RouterLink, IonContent],
  standalone: true
})
export class VouchersComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
