import { Conta } from "../dominio/Conta";
import { SaqueException } from "../excecoes/SaqueException";

export class ServicoSaque {
  executar(conta: Conta, valor: number): void {
    console.log("\nConta " + conta.numero + " (" + conta.titular.nome + ") - saque de R$ " + valor.toFixed(2));
    try {
      conta.sacar(valor);
      console.log("   OK. Novo saldo: R$ " + conta.consultarSaldo().toFixed(2));
    } catch (e) {
      if (e instanceof SaqueException) {
        console.log("   ERRO: " + e.name);
        conta.titular.canal.enviar(conta.titular, e.message);
      } else {
        throw e;
      }
    }
  }
}
