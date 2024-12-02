
export default interface UsuarioLogin {
    id: number;
    nome: string;
    username: string;
    email: string;
    foto: string;
    senha: string;
    biografia: string;
    token: string;
    ativo: boolean
}