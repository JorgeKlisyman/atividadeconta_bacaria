import { ContaCorrente } from "./contaCorrente";
import { ContaUniversitaria } from "./contaUniversitaria";
import { ContaPoupanca } from "./contaPoupanca";




export class ContaBancaria {
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
            return false;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return true;
        } else {
            return false;
        }
    }
}





const contaForm = document.getElementById("contaForm");
const resultado = document.getElementById("resultado");

contaForm.addEventListener("submit", function (e) {
    e.preventDefault();
});

document.getElementById("sacar").addEventListener("click", function () {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);
    const cartaoCredito = document.getElementById("cartaoCredito").value;
    const valor = parseFloat(prompt("Digite o valor a sacar:"));

    let conta;

    if (tipo === 'corrente') {
        conta = new ContaCorrente(agencia, numero, saldo, cartaoCredito);
    } else if (tipo === 'poupanca') {
        conta = new ContaPoupanca(agencia, numero, saldo);
    } else if (tipo === 'universitaria') {
        conta = new ContaUniversitaria(agencia, numero, saldo);
    }

    if (conta && conta.sacar(valor)) {
        resultado.textContent = `Saque de R$ ${valor} realizado com sucesso. Saldo atual: R$ ${conta.getSaldo()}`;
    } else {
        resultado.textContent = "Não foi possível realizar o saque. Verifique o valor e o saldo disponível.";
    }

    // Adicionando um log no console
    console.log(`Saque de R$ ${valor} na conta corrente. Saldo atual: R$ ${conta.getSaldo()}`);
});

document.getElementById("depositar").addEventListener("click", function () {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);
    const cartaoCredito = document.getElementById("cartaoCredito").value;
    const valor = parseFloat(prompt("Digite o valor a depositar:"));

    let conta;

    if (tipo === 'corrente') {
        conta = new ContaCorrente(agencia, numero, saldo, cartaoCredito);
    } else if (tipo === 'poupanca') {
        conta = new ContaPoupanca(agencia, numero, saldo);
    } else if (tipo === 'universitaria') {
        conta = new ContaUniversitaria(agencia, numero, saldo);
    }

    if (conta && conta.depositar(valor)) {
        resultado.textContent = `Depósito de R$ ${valor} realizado com sucesso. Saldo atual: R$ ${conta.getSaldo()}`;
    } else {
        resultado.textContent = "Não foi possível realizar o depósito. Verifique o valor.";
    }

    // Adicionando um log no console
    console.log(`Depósito de R$ ${valor} na conta corrente. Saldo atual: R$ ${conta.getSaldo()}`);
});
