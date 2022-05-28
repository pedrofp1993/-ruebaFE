import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  libro: any = {};
  constructor(private router: ActivatedRoute,private service: ServicesService) { 
    this.router.params.subscribe( params => {
      
      this.getLibro(params['title']);
    });
  }

  ngOnInit(): void {
  }

  getLibro(title:string){
      this.service.getQuery()
          .subscribe(libro => {
            console.log(libro);
            this.service.getLibro(title).subscribe(libro => {
              this.libro = libro;
            })
          });
  }

}
