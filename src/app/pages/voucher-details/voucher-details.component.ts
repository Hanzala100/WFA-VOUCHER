import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-voucher-details',
  templateUrl: './voucher-details.component.html',
  styleUrls: ['./voucher-details.component.scss'],
  standalone: true,
  imports: [RouterLink, IonContent]
})
export class VoucherDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
