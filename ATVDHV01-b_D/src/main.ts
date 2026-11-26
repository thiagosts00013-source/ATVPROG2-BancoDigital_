import { Cliente } from "./dominio/Cliente";
import { Conta } from "./dominio/Conta";
import { SmsNotificacao } from "./notificacao/SmsNotificacao";
import { EmailNotificacao } from "./notificacao/EmailNotificacao";
import { AppNotificacao } from "./notificacao/AppNotificacao";
import { WhatsAppNotificacao } from "./notificacao/WhatsAppNotificacao";
import { ServicoSaque } from "./servicos/ServicoSaque";

const servico = new ServicoSaque();

const ana = new Cliente("Ana", "111.111.111-11", "Rua A, 10", 4500, new SmsNotificacao());
const bruno = new Cliente("Bruno", "222.222.222-22", "Rua B, 20", 7200, new EmailNotificacao());
const carla = new Cliente("Carla", "333.333.333-33", "Rua C, 30", 3100, new AppNotificacao());

// numero, agencia, titular, saldo, limite diario
const anaC1 = new Conta("0001-1", "001", ana, 1000, 500);
const anaC2 = new Conta("0001-2", "001", ana, 100, 500);
const brunoC1 = new Conta("0002-1", "001", bruno, 100, 500);
const carlaC1 = new Conta("0003-1", "002", carla, 800, 300);
const carlaC2 = new Conta("0003-2", "002", carla, 50, 300);

console.log("===== 1) VALOR INVALIDO =====");
servico.executar(anaC1, -50);
servico.executar(brunoC1, 0);

console.log("\n===== 2) CONTA BLOQUEADA =====");
carlaC1.bloquear();
anaC2.bloquear();
servico.executar(carlaC1, 100);
servico.executar(anaC2, 10);
carlaC1.desbloquear();
anaC2.desbloquear();

console.log("\n===== 3) SALDO INSUFICIENTE =====");
servico.executar(brunoC1, 150);
servico.executar(carlaC2, 80);

console.log("\n===== 4) LIMITE DIARIO EXCEDIDO =====");
servico.executar(anaC1, 400);
servico.executar(anaC1, 200);
servico.executar(carlaC1, 250);
servico.executar(carlaC1, 100);

console.log("\n===== 5) SAQUE COM SUCESSO =====");
servico.executar(brunoC1, 40);
servico.executar(anaC2, 30);

console.log("\n===== 6) TROCANDO O CANAL PARA WHATSAPP =====");
ana.canal = new WhatsAppNotificacao();
bruno.canal = new WhatsAppNotificacao();
servico.executar(anaC2, 999);
servico.executar(brunoC1, -1);

console.log("\n===== 7) CONTAS DE CADA CLIENTE =====");
for (const c of [ana, bruno, carla]) {
  console.log(c.nome + " tem " + c.contas.length + " conta(s):");
  for (const conta of c.contas) {
    console.log("   " + conta.numero + " | saldo R$ " + conta.consultarSaldo().toFixed(2));
  }
}

console.log("\n===== 8) GETTERS E SETTERS =====");
console.log("Endereco antes: " + ana.endereco);
ana.endereco = "Rua Nova, 99";
console.log("Endereco depois: " + ana.endereco);

anaC1.limiteDiario = 1000;
console.log("Novo limite diario da conta " + anaC1.numero + ": R$ " + anaC1.limiteDiario.toFixed(2));

try {
  ana.renda = -100;
} catch (e) {
  console.log("Setter recusou: " + (e as Error).message);
}
