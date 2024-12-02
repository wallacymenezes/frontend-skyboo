import { Usuario } from "./Usuario";

export enum TipoItem {
  LIVRO = "LIVRO",
  AVALIACAO = "AVALIACAO",
  COMENTARIO = "COMENTARIO",
}

export interface Curtida {
  id: number;
  itemId: number;
  tipoItem: TipoItem;
  data: Date;
  usuario: Usuario;
}
