import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  libros: any[] = [];
  constructor(private libroService:ServicesService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.libroService.getLibro(termino).subscribe((data:any) => {
      this.libros = data['data'];

    });
  }

}
