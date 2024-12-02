import { Usuario } from "./Usuario";
import { Livro } from "./Livro";
import { Comentario } from "./Comentario";
import { Curtida } from "./Curtida";

export interface Avaliacao {
    id: number;
    nota: number; // De 0 a 5
    texto: string;
    data: Date;
    usuario: Usuario;
    livro: Livro;
    comentarios?: Comentario[];
    curtidas?: Curtida[];
  }