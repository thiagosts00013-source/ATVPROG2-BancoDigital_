import { SaqueException } from "./SaqueException";

export class ValorInvalidoException extends SaqueException {
  constructor(valor: number) {
    super("Valor invalido para saque: " + valor);
  }
}
