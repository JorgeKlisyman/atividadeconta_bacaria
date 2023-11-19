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

class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, 'Conta Corrente', saldo);
        this.cartaoCredito = cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, 'Conta Poupança', saldo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, 'Conta Universitária', saldo);
    }

    sacar(valor) {
        if (valor <= 500) {
            return super.sacar(valor);
        }
        return false;
    }
}

const contas = [];

function inserirConta() {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    if (agencia && numero && tipo && !isNaN(saldo)) {
        let novaConta;

        if (tipo === 'corrente') {
            const cartaoCredito = confirm('Esta conta terá cartão de crédito?');
            novaConta = new ContaCorrente(agencia, numero, saldo, cartaoCredito);
        } else if (tipo === 'poupanca') {
            novaConta = new ContaPoupanca(agencia, numero, saldo);
        } else {
            novaConta = new ContaUniversitaria(agencia, numero, saldo);
        }

        contas.push(novaConta);
        limparCampos();
    }
}

function visualizarContas() {
    const extrato = document.getElementById("extrato");
    extrato.innerHTML = '';

    contas.forEach((conta, index) => {
        extrato.innerHTML += `<p>${index + 1}. Agência: ${conta.agencia}, Número: ${conta.numero}, Tipo: ${conta.tipo}, Saldo: R$ ${conta.saldo.toFixed(2)}</p>`;
    });
}

function gerarExtrato() {
    const extrato = document.getElementById("extrato");
    extrato.innerHTML = '';

    let saldoTotal = 0;

    contas.forEach(conta, index) => 
        extrato.innerHTML += `<p>${index + 1}. Agência: ${conta.agencia}, Número: ${conta.numero}, Tipo








