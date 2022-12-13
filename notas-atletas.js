
   class Atletas {
    constructor(nome, notas){
      this.nome = nome
      this.notas = notas
    }

    obterNome(){
      return this.nome
    }

    obterNotas(){
      this.notas.sort(function(a,b){
        return a - b
      })
      return this.notas.slice(1,4)
    }

    obterTamanhoNotas(){
      return this.notas.length
    }

    obterSomaTotal(soma, total){
      total = 0
      soma = this.notas.reduce(function(soma,nota){
        return valorInicial = soma + nota
      },valorInicial)
      return soma
    }

    obterMediaValida(media, tamanho, organizado, notaValida){
      tamanho = this.notas.length
      organizado = tamanho.sort(function(a,b){
        return a - b
      })
      notaValida = organizado.slice(1,4)
      return media = soma / notaValida
    }
      
    }
   
    let atletas = [
      {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
      },
      {
        nome: "Fernando Puntel",
        notas:  [8, 10, 10, 7, 9.33]
      },
      {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
      },
      {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
      }
     ];