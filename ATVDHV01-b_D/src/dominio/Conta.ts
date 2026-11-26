import { Cliente } from "./Cliente";
import { ValorInvalidoException } from "../excecoes/ValorInvalidoException";
import { ContaBloqueadaException } from "../excecoes/ContaBloqueadaException";
import { SaldoInsuficienteException } from "../excecoes/SaldoInsuficienteException";
import { LimiteDiarioExcedidoException } from "../excecoes/LimiteDiarioExcedidoException";

export class Conta {
  private _numero: string;
  private _agencia: string;
  private _dataAbertura: Date;
  private _titular: Cliente;
  private _saldo: number;
  private _bloqueada: boolean = false;
  private _limiteDiario: number;
  private _sacadoHoje: number = 0;

  constructor(numero: string, agencia: string, titular: Cliente, saldo: number, limiteDiario: number) {
    this._numero = numero;
    this._agencia = agencia;
    this._dataAbertura = new Date();
    this._titular = titular;
    this._saldo = saldo;
    this._limiteDiario = limiteDiario;
    titular.adicionarConta(this);
  }

  // getters
  get numero(): string {
    return this._numero;
  }

  get agencia(): string {
    return this._agencia;
  }

  get dataAbertura(): Date {
    return this._dataAbertura;
  }

  get titular(): Cliente {
    return this._titular;
  }

  get bloqueada(): boolean {
    return this._bloqueada;
  }

  get limiteDiario(): number {
    return this._limiteDiario;
  }

  get sacadoHoje(): number {
    return this._sacadoHoje;
  }

 //setters
 
  set limiteDiario(limite: number) {
    if (limite < 0) throw new Error("Limite nao pode ser negativo");
    this._limiteDiario = limite;
  }

  sacar(valor: number): void {
    if (!Number.isFinite(valor) || valor <= 0) throw new ValorInvalidoException(valor);
    if (this._bloqueada) throw new ContaBloqueadaException(this._numero);
    if (valor > this._saldo) throw new SaldoInsuficienteException(this._saldo, valor);
    if (this._sacadoHoje + valor > this._limiteDiario) throw new LimiteDiarioExcedidoException(this._limiteDiario, this._sacadoHoje);

    this._saldo -= valor;
    this._sacadoHoje += valor;
  }

  depositar(valor: number): void {
    if (valor <= 0) throw new Error("Deposito deve ser positivo");
    this._saldo += valor;
  }

  consultarSaldo(): number {
    return this._saldo;
  }

  bloquear(): void {
    this._bloqueada = true;
  }

  desbloquear(): void {
    this._bloqueada = false;
  }
}
