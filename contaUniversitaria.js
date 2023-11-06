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

class contaUniversitaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return this.sacar;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return true;
        } else {
            return this.sacar;
        }
    }
}

class contaUniversitaria extends ContaBancaria {
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

class contaUniversitaria extends contaUniversitaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, 'poupanca', saldo);
    }
}

class ContaUniversitaria extends contaUniversitaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, 'universitaria', saldo);
    }

    sacar(valor) {
        if (valor > 0 && valor <= 500 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return this.sacar;
        }
    }
}

// Exemplo de uso:

const contaUniversitaria = new ContaUniversitaria("001", "12345", 1000.0);
console.log(`Saldo da conta universitária: R$${contaUniversitaria.getSaldo()}`);

contaUniversitaria.sacar(200);
console.log(`Saque de R$200 realizado com sucesso. Saldo atual: R$${contaUniversitaria.getSaldo()}`);

contaUniversitaria.sacar(600);
console.log(`Tentativa de saque de R$600. Saldo atual: R$${contaUniversitaria.getSaldo()}`);






