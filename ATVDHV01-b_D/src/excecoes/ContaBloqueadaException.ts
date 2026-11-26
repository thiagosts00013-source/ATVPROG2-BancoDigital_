import { SaqueException } from "./SaqueException";

export class ContaBloqueadaException extends SaqueException {
  constructor(numeroConta: string) {
    super("A conta " + numeroConta + " esta bloqueada");
  }
}
