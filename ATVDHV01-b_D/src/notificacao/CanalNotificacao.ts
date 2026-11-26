import { Cliente } from "../dominio/Cliente";

export interface CanalNotificacao {
  enviar(cliente: Cliente, mensagem: string): void;
}
