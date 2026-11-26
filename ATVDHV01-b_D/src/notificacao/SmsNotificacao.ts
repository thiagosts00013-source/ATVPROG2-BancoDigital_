import { Cliente } from "../dominio/Cliente";
import { CanalNotificacao } from "./CanalNotificacao";

export class SmsNotificacao implements CanalNotificacao {
  enviar(cliente: Cliente, mensagem: string): void {
    const curta = mensagem.length > 50 ? mensagem.substring(0, 47) + "..." : mensagem;
    console.log("   [SMS para " + cliente.nome + "] " + curta);
  }
}
