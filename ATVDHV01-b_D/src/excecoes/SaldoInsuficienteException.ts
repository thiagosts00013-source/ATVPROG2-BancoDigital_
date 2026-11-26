import { SaqueException } from "./SaqueException";

export class SaldoInsuficienteException extends SaqueException {
  falta: number;

  constructor(saldo: number, valor: number) {
    super("Saldo insuficiente. Faltam R$ " + (valor - saldo).toFixed(2));
    this.falta = valor - saldo;
  }
}
