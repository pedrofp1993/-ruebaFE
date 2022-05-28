import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  libros: any[] = [];
  mensajeError: string;
  constructor(private librosService: ServicesService) { 
    this.librosService.getQuery().subscribe((data: any) => {
      this.libros = data["data"];
      console.log(this.libros);
    }, (errorServicio) => {
      console.log(errorServicio);
    });

  }

  ngOnInit(): void {
  }

}
