import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  productName: string = '';
  productPrice: number | null = null;
  productDescription: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    alert(`Produto cadastrado com sucesso!\nNome: ${this.productName}\nPreço: ${this.productPrice}\nDescrição: ${this.productDescription}`);
    
    // Redireciona para a página de detalhes com os dados do produto
    this.router.navigate(['/produto-detalhe'], {
      state: {
        productName: this.productName,
        productPrice: this.productPrice,
        productDescription: this.productDescription
      }
    });
  }
}  
