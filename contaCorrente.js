import { ContaBancaria } from "./contaBancaria";

export class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, 'corrente', saldo);
        this.cartaoCredito = cartaoCredito;
    }

    
    getCartaoCredito() {
        return this.cartaoCredito;
    }

    setCartaoCredito(cartaoCredito) {
        this.cartaoCredito = cartaoCredito;
    }
}