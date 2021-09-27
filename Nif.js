class Nif {
    constructor(numeroDni){
        this._dni = numeroDni;
        this._letra = this.calculaLetra();
    }

    get dni(){
        return this._dni;
    }

    set dni(nuevoNumeroDni){
        this._dni = nuevoNumeroDni;
        this._letra = this.calculaLetra();
    }

    calculaLetra(){
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',  'E', 'T'];
        return letras[this._dni%23];
    }

    mostrar(){
        return `NIF: ${this._dni}-${this._letra}`
    }
}




