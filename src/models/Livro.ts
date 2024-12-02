import { Usuario } from "./Usuario";
import { Categoria } from "./Categoria";
import { Avaliacao } from "./Avaliacao";

export interface Livro {
  id: number;
  titulo: string;
  descricao: string;
  autor: string;
  editora: string;
  ano: string; // 4 dígitos
  urlCapa?: string;
  urlPdf?: string;
  avaliacaoMedia?: number; // De 0 a 5
  dataPublicacao: Date;
  usuario: Usuario;
  categorias?: Categoria[];
  avaliacoes?: Avaliacao[];
}
