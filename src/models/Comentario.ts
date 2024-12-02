import { Usuario } from "./Usuario";
import { Avaliacao } from "./Avaliacao";

export interface Comentario {
  id: number;
  texto: string;
  comentarioPai?: number;
  data: Date;
  usuario: Usuario;
  avaliacao: Avaliacao;
}