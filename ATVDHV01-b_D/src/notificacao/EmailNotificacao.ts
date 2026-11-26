import { Cliente } from "../dominio/Cliente";
import { CanalNotificacao } from "./CanalNotificacao";

export class EmailNotificacao implements CanalNotificacao {
  enviar(cliente: Cliente, mensagem: string): void {
    console.log("   [EMAIL para " + cliente.nome + "] Prezado(a) " + cliente.nome + ", " + mensagem + ". Procure nossa agencia em caso de duvidas.");
  }
}
