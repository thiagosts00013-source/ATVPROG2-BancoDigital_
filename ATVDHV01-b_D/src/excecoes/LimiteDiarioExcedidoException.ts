import { SaqueException } from "./SaqueException";

export class LimiteDiarioExcedidoException extends SaqueException {
  constructor(limite: number, jaSacado: number) {
    super("Limite diario excedido. Limite: R$ " + limite.toFixed(2) + ", ja sacado hoje: R$ " + jaSacado.toFixed(2));
  }
}
