 import { ContaBancaria } from "./contaBancaria";
 export class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, 'universitaria', saldo);
    }

    sacar(valor) {
        if (valor > 0 && valor <= 500 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }
}
