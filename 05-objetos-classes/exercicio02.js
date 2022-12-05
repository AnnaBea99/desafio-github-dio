/*
    2- crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu imc (peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70 kg de peso e 1,75 de altura e peça ao José
    para dizer o valor do seu IMC.


*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC(){
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC(){
        const imc = this.calculaIMC();
        if(imc < 18.5){
            return 'Abaixo do peso';
        
        }else if((imc >= 18.5) && (imc < 25)){
            return 'Peso normal';
        
        }else if((imc >= 25) && (imc < 30)){
            return 'Acima do peso';
        
        }else if((imc >= 30) && (imc < 40)){
            return 'Obeso';
        
        }else{
            return 'Obesidade grave';
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.calculaIMC());
console.log(jose.classificarIMC());

const anna = new Pessoa('Anna', 76.5, 1.72);
console.log(anna.calculaIMC());
console.log(anna.classificarIMC());

