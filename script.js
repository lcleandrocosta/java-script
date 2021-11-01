class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this. numero = numero;
        this. tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo += valor;
        return this._saldo;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada!"
        }

        this._saldo -= valor;
        return this._saldo;
    }

    depositar(valor){
        this.saldo += valor;
        return this._saldo
    }
}

//Classe Conta Corrente
class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this._cartaoCredito = cartaoCredito;
        this.tipo = "Corrente";
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito += valor;
    }
}

//Classe Poupança
class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "Poupança";
    }
}

//Classe conta Univesitária
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
    this.tipo = "Universitária";
    }

    sacar(valor){
        if(valor > this.saldo){
            return "Operação negada";
        }
        this.saldo -= valor;
        return this.saldo;
    }
}