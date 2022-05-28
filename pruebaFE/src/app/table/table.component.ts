import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private route:ActivatedRoute,
              private cartService:CartService,
              private router:Router) { }

  ngOnInit(): void {
  }

  addToCart(item: any){
    this.cartService.addToCart(item);
    window.alert('Producto añadido');
  }
  verLibro( item: any ) {

    let libro;

    
    libro = item.name;
  
    this.router.navigate([ '/title', libro  ]);

  }

}
