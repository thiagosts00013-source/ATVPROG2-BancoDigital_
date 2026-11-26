import { Conta } from "./Conta";
import { CanalNotificacao } from "../notificacao/CanalNotificacao";

export class Cliente {
  private _nome: string;
  private _cpf: string;
  private _endereco: string;
  private _renda: number;
  private _canal: CanalNotificacao;
  private _contas: Conta[] = [];

  constructor(nome: string, cpf: string, endereco: string, renda: number, canal: CanalNotificacao) {
    this._nome = nome;
    this._cpf = cpf;
    this._endereco = endereco;
    this._renda = renda;
    this._canal = canal;
  }

  // getters
  get nome(): string {
    return this._nome;
  }

  get cpf(): string {
    return this._cpf;
  }

  get endereco(): string {
    return this._endereco;
  }

  get renda(): number {
    return this._renda;
  }

  get canal(): CanalNotificacao {
    return this._canal;
  }

  get contas(): Conta[] {
    return this._contas;
  }

  // setters
  set endereco(endereco: string) {
    this._endereco = endereco;
  }

  set renda(renda: number) {
    if (renda < 0) throw new Error("Renda nao pode ser negativa");
    this._renda = renda;
  }

  set canal(canal: CanalNotificacao) {
    this._canal = canal;
  }

  adicionarConta(conta: Conta): void {
    this._contas.push(conta);
  }
}
