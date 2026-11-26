import { Cliente } from "../dominio/Cliente";
import { CanalNotificacao } from "./CanalNotificacao";

export class AppNotificacao implements CanalNotificacao {
  enviar(cliente: Cliente, mensagem: string): void {
    console.log("   [APP para " + cliente.nome + "] " + mensagem);
  }
}
