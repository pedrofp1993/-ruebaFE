import { Component, OnInit } from '@angular/core';
// To use Html5QrcodeScanner (more info below)
import {Html5QrcodeScanner} from "html5-qrcode"

// To use Html5Qrcode (more info below)
import {Html5Qrcode} from "html5-qrcode"
@Component({
  selector: 'app-scanner-code',
  templateUrl: './scanner-code.component.html',
  styleUrls: ['./scanner-code.component.css']
})
export class ScannerCodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}
