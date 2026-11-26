import { Cliente } from "../dominio/Cliente";
import { CanalNotificacao } from "./CanalNotificacao";

export class WhatsAppNotificacao implements CanalNotificacao {
  enviar(cliente: Cliente, mensagem: string): void {
    console.log("   [WHATSAPP para " + cliente.nome + "] " + mensagem);
  }
}
