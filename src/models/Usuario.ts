import { Avaliacao } from "./Avaliacao";
import { Comentario } from "./Comentario";
import { Curtida } from "./Curtida";
import { Livro } from "./Livro";

export interface Usuario {
  id: number;
  nome: string;
  username: string;
  email: string;
  foto?: string;
  senha: string;
  biografia?: string;
  ativo: boolean;
  token: string;

  // Relacionamentos
  livrosPublicados?: Livro[];
  comentarios?: Comentario[];
  avaliacoes?: Avaliacao[];
  curtidas?: Curtida[];
  livrosLidos?: Livro[];
  seguindo?: Usuario[];
  seguidores?: Usuario[];
}
