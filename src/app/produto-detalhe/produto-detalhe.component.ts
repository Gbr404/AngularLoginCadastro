import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [CommonModule],  // Adiciona o CommonModule para habilitar o pipe currency
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent {
  productName: string = '';
  productPrice: number | null = null;
  productDescription: string = '';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state) {
      this.productName = nav.extras.state['productName'];
      this.productPrice = nav.extras.state['productPrice'];
      this.productDescription = nav.extras.state['productDescription'];
    }
  }
  
}
