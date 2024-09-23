import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'produto-detalhe', component: ProdutoDetalheComponent }, // Adiciona a rota para a página de detalhes do produto
  { path: '**', redirectTo: '' } // Redireciona qualquer rota desconhecida para o login
];
