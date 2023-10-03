 import { ContaBancaria } from "./contaBancaria";
 
 export class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, 'poupanca', saldo);
    }
}
