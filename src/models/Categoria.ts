import { Livro } from "./Livro";

export interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  livros?: Livro[];
}